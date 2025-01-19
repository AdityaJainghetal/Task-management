import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Createuser = () => {
  const [input,setInput] = useState({});



  const handleInput=(e)=>{
    let name= e.target.name;
    let value= e.target.value;
    setInput(values=>({...values,[name]:value}))
    console.log(input);
 
  }

  const handleSubmit= async()=>{
    let api="http://localhost:8000/admin/createuser"
    try {
      let response=  await axios.post(api, input)
      console.log(response.data)
    } catch (error) {
      
    }


  }


  return (
    <>
    <h1>Create user</h1>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your name</Form.Label>
        <Form.Control type="text" name="username" value={input.username} onChange={handleInput} />
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Designation</Form.Label>
       
        <Form.Select aria-label="Default select example" name="designation" value={input.designation} onChange={handleInput} >
      <option>Select designation</option>
      <option value="Frontend">Front end Designer</option>
      <option value="Backend">Back end Designer</option>
      <option value="Analyst">Analyst</option>
    </Form.Select>
      
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your email</Form.Label>
        <Form.Control type="email"  name="email" value={input.email} onChange={handleInput}/>
       
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name="password" value={input.password} onChange={handleInput}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Createuser