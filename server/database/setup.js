const fs = require("fs");
const client = require("./connection")

const footballSchema = fs.readFileSync('./database/football-team.sql').toString();
const seedData = fs.readFileSync('./database/seed.sql').toString();

const setUpDB = async () => {
    await client.query(footballSchema)
    await client.query(seedData)
    console.log("Database ready")
}

setUpDB()
