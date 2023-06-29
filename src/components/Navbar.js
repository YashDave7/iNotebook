import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import noteContext from "../context/notes/noteContext"

const Navbar = (props) => {
    // const { handleProfile } = props;
    const context = useContext(noteContext);
    const { getUser, user } = context;

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    useEffect(() => {
        if (localStorage.getItem('token') && (location.pathname === '/' || location.pathname === '/about')) {
            getUser();
        }
        // eslint-disable-next-line
    }, [])

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
                        <Link data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm" style={{ "textDecoration": "none", "color": "white", "fontSize": "18px" }}><i className="fa-solid fa-user" style={{ "color": "white", "fontSize": "20px", "border": "2px solid white", "borderRadius": "100%", "padding": "8px", "marginRight": "1px" }}></i> {user.name} </Link>
                    }


                    {/* USER PROFILE SECTION */}
                    <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm" style={{"float": "right", "marginTop": "60px"}}>
                            <div className="modal-content">
                                <div className="card">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">User_id: {user._id}</li>
                                        <li className="list-group-item">Name: {user.name}</li>
                                        <li className="list-group-item">Email: {user.email}</li>
                                        <button data-bs-dismiss="modal" className='btn btn-primary' onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
