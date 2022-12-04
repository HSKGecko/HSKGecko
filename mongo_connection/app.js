const express = require('express')
const { connectToDb, getDb } = require('./db')

//init app & middleware
const app = express()

//db connection
let db

connectToDb((err) => {
    if(!err){
        app.listen(3000, () => {
            console.log('Application is listening on port 3000');
        })

        db = getDb()
    }
})

//routes
app.get('/characters', (req, res) => {
    let characters = []
    db.collection('LevelOne')
    .find()
    .forEach(character => characters.push(character))
    .then(()=>{
        res.json({characters})
    })
    // res.json({ msg: "Welcome to the api"})
})