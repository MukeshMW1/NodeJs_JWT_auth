const {userCollection} = require('../config/db')
const bcrypt = require('bcryptjs')




const createUser = async (email,name, password,role="user")=>{
const saltRounds = 10;
const hashedPassword = await bcrypt.hash(password,10);
return await userCollection.insertOne({name,password,password:hashedPassword,role});


}





const findUser = async (email)=>{
if(!email) throw new Error('Please Enter a valid email');
return userCollection.findOne({email});
}





module.exports = {createUser,findUser}
