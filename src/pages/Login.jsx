import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { signIn } from '../auth/Firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email,password,navigate)
    
  }
  return (
    <div>
       <Form className='text-start mt-5 w-25 d-flex jusify-content-center mx-auto flex-column'
       onSubmit={handleSubmit}>
     
      
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

      <div className="link mb-3">
        ForgotPassword?
      </div>
      
      <Button 
      className="" 
      variant="primary" 
      type="submit"
      value="Register">
        Login
      </Button>
    </Form>

    <button className='btn btn-primary form-control w-25 mt-3'>Continue with Google</button>
    </div>
  )
}

export default Login