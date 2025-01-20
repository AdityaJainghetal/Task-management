import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import compimg from "../Images/img1.jpg"
import incompimg from "../Images/img2.jpg"

const DisplayTask = () => {
    const [mydata,setMyData] = useState([])

    const loadData=async()=>{
      let api="http://localhost:8000/admin/displaytaskuser";

        try {
            const response = await axios.get(api)
            console.log(response.data);
            setMyData(response.data)
        } catch (error) {
            console.log(error)
        }
    }


useEffect(()=>{
    loadData()
},[])


const deluser=async(id)=>{
    let api=`http://localhost:8000/admin/deleteusertask/?id=${id}`;


    try {
       const response =await axios.get(api);
       message.success("Task sucessfully deleted")
        loadData()
    } catch (error) {
        
    }


    const response = await axios.get(api);

}



const ans= mydata.map((key)=>{
    return(

        <>
        <tr>
            <td>{key.status=="Complete" ? (<img src={compimg} width="30" height="20"/>):(<img src={incompimg} width="30" height="20"/>)}</td>
            <td>{key.userid.username}</td>
            <td>{key.userid.designation}</td>
            <td>{key.userid.email}</td>
            <td>{key.tasktitle}</td>
            <td>{key.taskdetail}</td>
            <td>{key.taskduration}</td>
            <td>
            <Button variant="primary" onClick={()=>{deluser(key._id)}}>Deleted</Button>
            </td>
        </tr>
        
        </>
    )
})


  return (
    <>
    <h1>Display data</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Designation</th>
          <th>Email</th>
          <th>Tasktitle</th>
          <th>Task Detail</th>
          <th>Taskduration</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {ans}
</tbody>
</Table>
    
    </>
  )
}

export default DisplayTask