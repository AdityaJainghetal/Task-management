import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
// import UserTaskAssign from './UserTaskAssign';
import { message } from 'antd';


const UserTaskAssign = () => {
    const {id} = useParams();

    const [tasktitle,setTaskTitle]= useState("");
    const [taskdetail,setTaskDetail] = useState("");
    const [taskduration,settaskduration] = useState("");

    const navigate= useNavigate()

    const taskAssignToUser= async()=>{

        try {
        let api="http://localhost:8000/admin/assigntask";
         const response = await axios.post(api,{id:id,tasktitle:tasktitle,taskdetail:taskdetail, taskduration:taskduration})
         console.log(response.data)
        message.success(response.data.msg);
          navigate("../assigntask")

      } catch (error) {
            console.log(error)
        }



    }


  return (
    <>
    <h1>Assign new task to user: {id}</h1>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Enter Task Title</Form.Label>
        <Form.Control type="text"value={tasktitle} onChange={(e)=>{setTaskTitle(e.target.value)}}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={taskdetail} onChange={(e)=>{setTaskDetail(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Expected time duration</Form.Label>
        <Form.Control type="time"value={taskduration} onChange={(e)=>{settaskduration(e.target.value)}}  />
      </Form.Group>
      <Button variant="primary" onClick={taskAssignToUser}>Assign task</Button>

    </Form>
    
    
    </>
  )
}

export default UserTaskAssign