const { getDb } = require("../database/DatabaseManager");

async function dbReady(req, res, next) {

    await getDb(); 
    next();  

}

module.exports = dbReady;
