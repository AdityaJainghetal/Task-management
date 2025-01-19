const UserModel = require("../models/userModel");




const userLogin= async(req,res)=>{

    try {
        const {email,password} =req.body;
        const User= await UserModel.findOne({email:email})
        if(!User){
           res.status(400).send({msg:"Invalid user email"})
        }

        if(User.password!=password){
           res.status(400).send({msg:"Invalid password"})

        }

        res.status(200).send(User)




    } catch (error) {
        console.log(error)
    }
    
    
}


module.exports={
    userLogin
}