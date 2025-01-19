import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

import { Outlet } from 'react-router-dom';


const UserDashboard = () => {
    const [username,Setusername] = useState("");
    const [email,Setemail] =  useState("")

    useEffect(()=>{
        Setusername(localStorage.getItem("username"))
        Setemail(localStorage.getItem("useremail"))
    },[])

  return (
    <>
    <div id="userdisplaylogin">
            Welcome to : {username} Email: {email}
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