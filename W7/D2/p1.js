//Routing
// "/" base url
// "/api/users"
const express = require("express");
const app = express();

//*?api/users*/create/delete/update/:id

//Router objects helps organize route groups
const apiRouter = express.Router();

apiRouter.get("/users", function (req, res) {
    res.json({
        route: "/api/users",
        message: "Users route inside api router"
    });
});

apiRouter.get("/orders", function (req, res) {
    res.json({
        route: "/api/users",
        message: "Users route inside api router"
    });
});
//Mounting the router under the /api base path
app.use("/api", apiRouter);
//***new Router***
//Product router (handle/api/products/...)
const productsRouter = express.Router();
//api/products           ->create product
productsRouter.post("/", (req, res) => {
    res.json({
        route: "/api/product",
        message: "Create products",
    });
});

//api/products/:id       -> delete product
productsRouter.delete("/:id", (req, res) => {
    res.json({
        route: `/api/products/${req.params.id}`,
        message: "Delete product"

    });
});

//mount products router under /api/products
apiRouter.use("/products", productsRouter);

app.listen(4000, function () {
    console.log("Express server running at http://localhost:4000");
});