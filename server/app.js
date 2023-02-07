const client = require("./database/connection");
const express = require("express");
const logger = require("./logger")
const cors = require("cors")

const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(logger)


// ENDPOINT
app.post("/team/", async (req, res) => {
    const team = req.body.team;
    console.log(team)
    if(!team){
        res.status(400).json ({ error: "Please enter team" })
        return
    }
    try{
        const result = await client.query("SELECT * FROM countries WHERE name = $1;", [team]);
        res.send(result.rows)
    }catch(err){

        res.send(err)
    }
})

module.exports = app;
