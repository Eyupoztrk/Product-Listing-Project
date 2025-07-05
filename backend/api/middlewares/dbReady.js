const { getDb, waitForDb } = require("../database/DatabaseManager"); // yolunu kendi projenle eşleştir

async function dbReady(req, res, next) {

    await waitForDb(); // eğer bağlı değilse hata fırlatır
    next();  // bağlıysa devam

}

module.exports = dbReady;
