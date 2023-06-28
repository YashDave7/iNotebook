<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup">
Open
</button>
<div className="signup modal fade" id="signup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" style={{ "width": "1000px" }}>
    <div className="modal-body" style={{ "width": "1000px" }}>
        <div className="card text-black" style={{ "borderRadius": "25px", "width": "500px" }}>
            <div className="card-body p-md-5">
                <div className="row justify-content-center">
                    <div className="">
                        <i class="fa-solid fa-xmark" data-bs-dismiss="modal" style={{ "fontSize": "30px", "float": "right" }}></i>
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                        <form className="mx-1 mx-md-4">

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="text" id="form3Example1c" className="form-control" placeholder='Name' />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="email" id="form3Example3c" className="form-control" placeholder='Email' />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4c" className="form-control" placeholder='Set Password' />
                                </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                <div className="form-outline flex-fill mb-0">
                                    <input type="password" id="form3Example4cd" className="form-control" placeholder='Confirm Password' />
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center mx-4 mb-3 mb-lg-4">
                                <button type="button" className="btn btn-primary btn-lg mx-3">Register</button>
                                <p className='my-3 mx-auto'>Already have a account? Login </p>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* </div> */}
</div>