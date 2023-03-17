const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const { connectToDb, getDb } = require('./db')
let db

connectToDb((err) => {
    if(!err){
        const uri = "mongodb+srv://TregearC:Nottingham_2015@cluster0.d04such.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        db = getDb()
    }
})

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')


//routes
app.get('/characters', (req, res) => {
    let characters = []
    db.collection('LevelOne')
        .find()
        .forEach(character => characters.push(character))
        .then(() => {
            res.json({ characters })
        })
    })

app.get('/displaydonuts', (req, res)=>{
    res.render('displaydonuts')
})


// router.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
//     //__dirname : It will resolve to your project folder.
// });

// router.get('/neil', function(req, res) {
//     res.sendFile(path.join(__dirname + '/neil.html'));
// })
// router.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname + '/about.html'));
// });

// router.get('/sitemap', function (req, res) {
//     res.sendFile(path.join(__dirname + '/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(process.env.port || 80);

console.log('Running at Port 80');
