const mongoose = require("mongoose");
const { scryptSync} = require("crypto");



const db = require("../../db");



const adminSchema = new mongoose.Schema({
    username : String,
    password : String
});
const Admin = mongoose.model("Admin",adminSchema);



async function getUser(username){
    await db.connect();
    let result = await Admin.findOne({
        username : username
    });

    return(result)? result : false;
}



async function addUser(username,password){
    await db.connect();
    let user = await getUser(username);
    console.log(user);
    if(!user){
        let secret = process.env.SALT;
        let key = scryptSync(password,secret,64);
        let newUser = new Admin({
            username : username,
            password: key.toString("base64")
        });
        let result = await newUser.save();
        if (result === newUser)
            return true;
        else  
            return false;
    } else{
        return false;
    }

}



async function authenticateAdmin(username, password){
    await db.connect();
    let secret = process.env.SALT;
    let key = scryptSync(password, secret, 64);
    let result = await Admin.findOne({
        username: username,
        password: key.toString("base64")
    });
    return(result)? true: false;
}



module.exports = {
    getUser,
    addUser,
    authenticateAdmin
    
}
