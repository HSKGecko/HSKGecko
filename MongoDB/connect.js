const express = require('express')
const { connectToDb, getDb } = require('./db')

const app = express()

let db
connectToDb((err)=>{
    if(!err){

        app.listen(3000, () => {
            console.log('App listening on port 3000')
        })
        db = getDb()
    }
})


app.get('LevelOne', (req, res) => {
    res.json({mssg: "Welcome to the api"})
    console.log('Connected to db')
})