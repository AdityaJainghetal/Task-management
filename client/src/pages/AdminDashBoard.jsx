import React from 'react'
import { useState, useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';

    
const AdminDashBoard = () => {
    const [adminname, SetAdminname] = useState("")
    const navigate = useNavigate()


    useEffect(()=>{
        if(!localStorage.getItem("adminname")){
            navigate("/home")
        }


        SetAdminname(localStorage.getItem("adminname"))
    })

    const Logout=()=>{
        localStorage.clear()
        navigate("/home")
    }

  return (
    <>
        <h1>AdminDashBoard</h1>
    <div id='admindata'>
        Welcome to: {adminname} 
        <a href="" className='logoutbtn' onClick={Logout}>Logout</a>|  
    </div>

    <div id='adminarea'>
        <div id='adminmenu'>
          
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link as={Link} to="createuser">Create user</Nav.Link>
      <Nav.Link as={Link} to="assigntask">Assign Task</Nav.Link>
      
    </Nav>
      
   

        </div>

    </div>

    <div id='adminRightdata' style={{textAlign:"center", paddingLeft:"300px",width:"50%", margin:"auto",position:"absolute", top:"200px"}}>

        
        <Outlet/>
    </div>
    
    </>

        
  )
}

export default AdminDashBoard