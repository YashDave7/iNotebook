import React, { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import noteContext from "../context/notes/noteContext"

const Navbar = (props) => {
    const context = useContext(noteContext);
    const { getUser, user } = context;

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token') && (location.pathname === '/' || location.pathname === '/about')) {
            getUser();
        }
        // eslint-disable-next-line
    }, [location.pathname])

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{"height": "70px", "backgroundColor": "#393646"}}>
                <Link className="navbar-brand mx-3" to="/" style={{"fontSize": "30px", "color": "#F4EEE0"}}> <i className="fa-solid fa-paste"></i> iNotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="container collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" style={{"fontSize": "20px", "color": "#F4EEE0"}}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{"fontSize": "20px", "color": "#F4EEE0"}}>About</Link>
                        </li>
                    </ul>

                    {!localStorage.getItem('token') ?
                        <form className='d-flex' style={{"color": "#F4EEE0"}}>
                            <Link className="btn btn-primary mx-1" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}} to="/signup">Sign Up</Link>
                            <Link className="btn btn-primary mx-1" style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}} to="/login">Login</Link>
                        </form> :
                        <Link data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm" style={{ "textDecoration": "none", "color": "#F4EEE0", "fontSize": "18px" }}> {user.name} <i className="fa-solid fa-user" style={{ "color": "#F4EEE0", "fontSize": "20px", "border": "2px solid white", "borderRadius": "100%", "padding": "8px", "marginRight": "1px" }}></i> </Link>
                    }


                    {/* USER PROFILE SECTION */}
                    <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-sm" style={{"float": "right", "marginTop": "60px" }}>
                            <div className="modal-content">
                                <div className="card" style={{"borderColor": "#F4EEE0"}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item py-3" style={{"backgroundColor": "#4F4557", "color": "#F4EEE0", "borderColor": "#F4EEE0"}}>User_id: {user.d}</li>
                                        <li className="list-group-item py-3" style={{"backgroundColor": "#4F4557", "color": "#F4EEE0", "borderColor": "#F4EEE0"}}>Name: {user.name}</li>
                                        <li className="list-group-item py-3" style={{"backgroundColor": "#4F4557", "color": "#F4EEE0", "borderColor": "#F4EEE0"}}>Email: {user.email}</li>
                                        <button data-bs-dismiss="modal" className='btn btn-primary py-3' onClick={handleLogout} style={{"backgroundColor": "#393646", "color": "#F4EEE0", "borderColor": "#F4EEE0"}}><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
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
