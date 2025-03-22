const jwt  =require('jsonwebtoken')
const { secrertKey } = require('../config/config')
const {secrertKey} = require('../config/config')

const generateToken = async (id,role) =>{
return  await jwt.sign({id,role},secrertKey,{expiresIn:'1h'})
}

const verifyToken = async (token) =>{
try{

    const payload = await jwt.verify(token,secrertKey)
    return payload;
}

catch(err){
    throw new Error(`Error decoding the token`)
}

}



module.exports = {generateToken,verifyToken}