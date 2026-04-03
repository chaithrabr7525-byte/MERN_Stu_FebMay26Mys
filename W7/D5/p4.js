//Baics of RBAC
const routePermissions = {
    "/admin":["admin"],
    "/report":["admin","manager"],
    "/profile":["admin","manager","user"]
};
function canAccess(route, role){
    const allowedRoles = routePermissions[route] || [];
    return allowedRoles.includes(role);
}
console.log("user access to /admin:",canAccess("/admin","user"));
console.log("admin access to /admin:",canAccess("/admin","admin"));
console.log("manager access to /report:",canAccess("/report","manager"));
console.log("user access to /profile:",canAccess("/profile","user"));

