const mongoose= require("mongoose");

const taskSchema=new mongoose.Schema({

    tasktitle:{
        type:String,
        require:true

    },
    taskdetail:String,


    taskduration:Number,

    userid : { type: mongoose.Types.ObjectId, ref: "user" } 

})


module.exports = mongoose.model("task", taskSchema); 