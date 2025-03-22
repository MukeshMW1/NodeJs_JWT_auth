require('dotenv').config()

const port = 3000
const secrertKey = process.env.secrertKey
const mongoURI = process.env.MONGOURI

module.exports = {secrertKey,mongoURI,port}