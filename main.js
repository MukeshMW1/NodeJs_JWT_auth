const http = require('http')
const {port} = require('./config/config') || 3000

const app = http.createServer((req,res)=>{
    res.statusCode=200;
   res.end('Server is created ');
})




app.listen(()=>{
    console.log('Server is listening at port 3000')
},port)




module.exports = app