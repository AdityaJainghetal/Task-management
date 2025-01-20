import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom'

import { Outlet } from 'react-router-dom';


const UserDashboard = () => {
    const [username,Setusername] = useState("");
    const [email,Setemail] =  useState("")
    const navigate= useNavigate()
    useEffect(()=>{

      if(!localStorage.getItem("username")){
        navigate("/home ")
      }




        Setusername(localStorage.getItem("username"))
        Setemail(localStorage.getItem("useremail"))
    },[])



    const userlogout=()=>{
      localStorage.clear()
      navigate("/home")
    }




  return (
    <>
    <div id="userdisplaylogin">
            Welcome to : {username} Email: {email} | <a href="" onClick={userlogout}>Logout</a> 
    </div>

    <div id='userDashboardData'>
            <div id='userleftmenu'>

            <Nav defaultActiveKey="/home" className="flex-column">
      {/* <Nav.Link href="/home">Active</Nav.Link> */}
      <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
      <Nav.Link as={Link} to="changepassword">Change Password</Nav.Link>

        </Nav>
            </div>
            <div id='userrightmenu'>

                <Outlet/>
            </div>

    </div>
    
    
    
    </>
  )
}

export default UserDashboard