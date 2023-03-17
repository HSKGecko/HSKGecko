const MongoClient = require('mongodb').MongoClient;

let db

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://TregearC:Acheng586041@cluster0.d04such.mongodb.net/?retryWrites=true&w=majority')
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

