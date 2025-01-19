const express= require("express");
const route = express.Router();
const adminController= require("../controllers/adminController");

route.post("/adminlogin", adminController.adminLogin)
route.post("/createuser", adminController.createUser)
route.get("/userdatashow", adminController.UserDatashow)
route.post("/assigntask", adminController.assignTask)


module.exports=route;