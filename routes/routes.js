const app = require('../main')

const router = (req,res)=>{
res.setHeader('Content-Type','application/json')

if(req.url === '/signup' && req.method === 'POST'){
console.log('Sign Up')
}

if(req.url === '/login' && req.method === 'POST' ){
    console.log('Login')

}



if(req.url === '/profile' && req.method === 'GET'){
    console.log('Profile')

}


if(req.url === '/admin' && req.method === 'GET'){
    
console.log('Admin')
}

}