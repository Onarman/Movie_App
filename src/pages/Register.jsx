import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const Register = () => {
  const [firstName,setFirstName] = useState();
  const [lastName,setLastName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    

  }
  return (
    <div>
       <Form className='text-start mt-5 w-25 d-flex jusify-content-center mx-auto flex-column'
       onSubmit={handleSubmit}>
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label htmlFor='firstName'>First Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter first name..."
        id='firstName'
        required
        onChange={(e)=> setFirstName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='lastName'>Last Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Enter last name..." 
        id='lastName'
        required
        onChange={(e)=> setLastName(e.target.value)}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor='email'>Email address</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Enter email"
        id='email'
        required
        onChange={(e)=> setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor='password'>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password"
        id='password'
        required
        onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      
      <Button 
      className="" 
      variant="primary" 
      type="submit"
      value="Register">
        Register
      </Button>
    </Form>
    </div>
  )
}

export default Register