import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand mx-3" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ?
                        <form className='d-flex'>
                            <Link className="btn btn-primary mx-1" to="/signup">Sign Up</Link>
                            <Link className="btn btn-primary mx-1" to="/login">Login</Link>
                        </form> :
                        <button className='btn btn-primary' onClick={handleLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar
