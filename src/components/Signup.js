import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(credentials.password !== credentials.confirmPassword)
        {
            console.log(credentials);
            toast.error("Passwords dont match");
            return
        }
        const response = await fetch(`http://localhost:4000/api/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: credentials.name ,email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if(json.authToken)
        {
          // Save the authToken and Redirect.
          localStorage.setItem('token', json.authToken);
          navigate("/");
          toast.success("Sign up Successfully");
        }
        else 
        {
          toast.error("Invalid credentials");
        }
      }

      const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }

    return (
        <>
         <div className="container" style={{"marginTop": "50px"}}>
        <h2 className="" style={{ "margin": "20px", "textAlign": "center" }}>Signup to iNotebook</h2>
            <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="text" name='name' id="form3Example1c" className="form-control" defaultValue={credentials.name} onChange={onChange} placeholder='Name' required />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="email" name='email' id="form3Example3c" className="form-control" defaultValue={credentials.email} onChange={onChange} placeholder='Email' required />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" name='password' id="form3Example4c" className="form-control" defaultValue={credentials.password} onChange={onChange} placeholder='Set Password' minLength={8} required />
                    </div>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                        <input type="password" name='confirmPassword' id="form3Example4cd" className="form-control" defaultValue={credentials.confirmPassword} onChange={onChange} placeholder='Confirm Password' minLength={8} required />
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-primary btn-lg mx-3">Sign Up</button>
                    <p className='my-3 mx-auto'>Already have a account? <Link to="/login">Login</Link></p>
                </div>
            </form>
            </div>
        </>
    )
}

export default Signup
