const MongoClient = require('mongodb').MongoClient;

let db

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://127.0.0.1:27017/')
            .then((client) => {
                console.log('Connected to Database')
                db = client.db('HSK')
                return cb()
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })

    },
    getDb: () => db

}

