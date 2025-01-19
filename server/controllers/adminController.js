const AdminModel = require("../models/adminModel");
const UserModel = require("../models/userModel");
const TaskModel = require("../models/taskModel")


const adminLogin = async(req,res)=>{
  const {userid, password} =req.body;
  console.log(req.body);
  
  try {
   const Admin = await AdminModel.findOne({userid})
    
   if(!Admin){
      res.status(400).send({msg:"Invalid user id"});
   }
   if(Admin.password != password){
      res.status(400).send({msg:"password is incorrect"})
   }
   res.send(200).send(Admin)
   // console.log(Admin);
   res.send("ok")
   
  } catch (error) {
      // console.log(error)
  }

   
}

const createUser =async(req,res)=>{
   const {username, designation, email, password} = req.body;
  
   try {
      const User = await UserModel.create ({
         username:username,
         designation:designation,
         email:email,
         password:password
      })

      if(User){
         res.status(200).send({msg:"New user created"});
      }
      else{
         res.status(500).send({mes:"error in server"})
      }


   } catch (error) {
      // console.log(error)
   }
  
   console.log(req.body)
   res.send("okkk")
}

const UserDatashow=async(req,res)=>{
   const User= await UserModel.find();
   res.status(200).send(User)
}

const assignTask=async (req,res)=>{
   try {
   const {id,tasktitle,taskdetail,taskduration}= req.body
      const Task = await TaskModel.create({
         tasktitle:tasktitle,
         taskdetail:taskdetail,
         taskduration: taskduration,
         userid:id
      })

      res.status(200).json({msg:"Task succefully assign"});

   } catch (error) {
      console.log(error)
   }



   console.log(req.body);
   res.send("okk")
}


module.exports ={
   adminLogin,
   createUser,
   UserDatashow,
   assignTask
}