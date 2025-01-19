import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
import {message} from "antd";
import { useNavigate } from 'react-router-dom';
const Home=()=>{
    const [userid, setUserid]= useState("");
    const [password, setPassword]= useState("");
    const [usertype, setUserType]=useState("");
    const navigate= useNavigate();
   const  handleSubmit=async()=>{
    //  console.log({userid:userid, password:password, usertype:usertype});
     if (usertype=="admin")
     {
        let api="http://localhost:8000/admin/adminlogin";
        try {
            const response= await axios.post(api, {userid:userid, password:password});
            
          if(response.status==200){
            localStorage.setItem("adminname", response.data.name)
            navigate("/admindashboard")
          }


           console.log(response);
     } catch(error){
      message.error(error.response.data);
     }
     

    }

    else{
      alert("No admin")
    }
  }

    return(
        <>
       
       <div id="myform">
        <h2>Login Form</h2>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Id: </Form.Label>
        <Form.Control type="text" value={userid} onChange={(e)=>{setUserid(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter Password: </Form.Label>
        <Form.Control type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword" style={{width:"200px"}}>
      <Form.Label>Login As:</Form.Label>
      <Form.Select aria-label="Default select example" value={usertype} onChange={(e)=>{setUserType(e.target.value)}}>
      <option>Login User As</option>
      <option value="admin">Admin</option>
      <option value="user">User</option>
    </Form.Select>
    </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </div>
        </>
    )
}
export default Home;