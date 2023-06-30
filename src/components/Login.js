import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login'
import { toast } from 'react-toastify';

const clientId = "926816405536-2ojt4mmea2ts9lh9h6kdhq64i6di3bs2.apps.googleusercontent.com"
const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:4000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
      });
      const json = await response.json()
      console.log(json);
      if(json.authToken)
      {
        // Save the authToken and Redirect.
        localStorage.setItem('token', json.authToken);
        toast.success("Logged In Successfully");
        navigate("/");
      }
      else 
      {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Something went wrong");
      
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <>
       <div className="container" style={{"marginTop": "50px"}}>
        <h2 className="" style={{ "margin": "20px", "textAlign": "center", "color": "#F4EEE0" }}>Login to iNotebook</h2>
      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input type="email" name='email' defaultValue={credentials.email} className="form-control" style={{ "color": "#393646", "borderColor": "#F4EEE0" }} onChange={onChange} placeholder='Email' />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input type="password" name='password' defaultValue={credentials.password} className="form-control" style={{ "color": "#393646", "borderColor": "#F4EEE0" }} onChange={onChange} placeholder='Password' />
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg mx-3" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}} to="/login">Login</button>
          <p className='my-3 mx-auto' style={{"color": "#F4EEE0"}}>Don't have an account? <Link style={{"color": "#F4EEE0"}} to="/signup">Signup</Link> </p>
        </div>
      </form>
      </div>
    </>
  )
}

export default Login
