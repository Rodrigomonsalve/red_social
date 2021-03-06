const express = require ("express")
let app = express ();
app.use(express.json());

const userView = require("./view/user.js");

const sequelize = require ("./conection/db.js");

async function serverStart () {
    try {
        await sequelize.authenticate();
        app.listen(5500, () => {
            console.log("System satrts in http://localhost:3000")
        })
    }

    catch (error) {
        console.log ("SQL authentication error")
    }

}

serverStart();
userView(app);
