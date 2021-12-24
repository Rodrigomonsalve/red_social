const userController = require("../controller/user.js");

module.exports = (app) => {
    app.get("/view/user.js", async (req, res) => {
        let result = await userController.listUsers
        ();
        res.json(result)
    })

    app.post("/view/user.js", async (req, res)=> {
        let user = req.body
        let result = await userController.addUser(user)
        res.json(result)
    })

}