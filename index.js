const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
//Middle wares
app.use(cors());
app.use(express.json());

//database connection
// console.log(process.env.DB_User)
// console.log(process.env.DB_pass)


const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_pass}@cluster0.iksmdxf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});







app.get('/', (req, res) => {
    res.send("Genius Car services server running now");
})
app.listen(port, () => {
    console.log(`genius on ${port}`);
})