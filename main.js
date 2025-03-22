const http = require('http')
const {user,admin} = require('./controllers/user')
// global.myvaribale = 123;
const {port} = require('./config/config') || 3000

const app = http.createServer((req,res)=>{
    res.statusCode=200;
   res.end('Server is created ');
})

// user();
// admin();


app.listen(()=>{
    console.log('Server is listening at port 3000')
},port)




module.exports = app