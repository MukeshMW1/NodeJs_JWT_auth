const jwt  =require('jsonwebtoken');
const { decode } = require('punycode');





const token = jwt.sign({
    id:1,
    username:'123',

}
,secretKey,{expiresIn:'1h'})

console.log(token);



jwt.verify(token,'abcd',(err,decoded)=>{
    
    if(err){

        console.log('Invalid token',err);
    }
    else{

        console.log('Token Validated',decoded);
    }

})