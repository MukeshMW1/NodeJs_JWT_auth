const mongoClient = require('mongodb').MongoClient;
const {mongoURI} = require('../config/config')

const client  = new mongoClient(mongoURI);


const connectDB =async ()=>{
try{
    await client.connect();
    console.log('Mongo DB successfully connected');
}

catch(err){
throw new Error(`Error connecting to the database ${err}`);
}
}

const db = client.db('user');
const userCollection = db.collection('users');



module.exports = {connectDB,userCollection}