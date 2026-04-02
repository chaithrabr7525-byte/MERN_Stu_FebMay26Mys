//JWT flow with login, refresh-style logic & secure verification
const jwt = require("jsonwebtoken");
const express = require("express");

const app = express();
app.use(express.json());

const secretKey = "Mysecretkey";
const refreshSecretKey = "MyNewSecretKey"; // Fixed typo in secret key string

const refreshTokens = []; // In-memory storage for refresh tokens

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization; // fixed 'Header' to 'headers'
    const token = authHeader && authHeader.split(" ")[1]; // fixed variable name to lowercase 'token'

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try {
        req.user = jwt.verify(token, secretKey, {
            algorithms: ["HS256"], 
            issuer: "jwt-example"
        });
        next();
    } catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired"
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access Token is invalid"
        });
    }
}

app.post("/login", function (req, res) {
    const { email, password } = req.body;
    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Credential"
        });
    }
    const accessToken = jwt.sign(
        { userId: 101, email: email, role: "member" },
        secretKey,
        { expiresIn: "10m", algorithm: "HS256", issuer: "jwt-example" } // fixed 'algorithms' to 'algorithm'
    );

    const refreshToken = jwt.sign(
        { userId: 101, email: email },
        refreshSecretKey, // fixed variable name case
        { expiresIn: "10d", algorithm: "HS256", issuer: "jwt-example" } // fixed 'algorithms' to 'algorithm'
    );

    refreshTokens.push(refreshToken);
    res.json({
        success: true,
        message: "successfully login",
        accessToken: accessToken,
        refreshToken: refreshToken
    });
});

app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            success: false,
            message: "refresh token is missing or invalid"
        });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshSecretKey, {
            algorithms: ["HS256"], // fixed to array
            issuer: "jwt-example"
        });

        const newAccessToken = jwt.sign(
            {
                userId: decoded.userId,
                email: decoded.email,
                role: "member"
            },
            secretKey,
            { expiresIn: "15m", algorithm: "HS256", issuer: "jwt-example" } // fixed 'algorithms' to 'algorithm'
        );

        res.json({
            success: true,
            accessToken: newAccessToken
        });
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "Refresh token verification failed"
        });
    }
});

app.get("/me", authenticateAccessToken, function (req, res) {
    res.json({
        success: true,
        message: "protected user route",
        user: req.user
    });
});

app.listen(4000, function () {
    console.log("JWT demo server running @ http://localhost:4000");

});
