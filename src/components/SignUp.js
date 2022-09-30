import React from "react";

export default function SignUp(props) {

    return (
        <div>
            <a href="/" className={`link-light ${props.hide}`} data-bs-toggle="modal" data-bs-target="#exampleModal-sign-up">
            Sign up
            </a>
            <div className="modal fade" id="exampleModal-sign-up" tabIndex="-1" aria-labelledby="exampleModalLabel-sign-up" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel-sign-up">Sign Up</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="exampleInputFirstName-sign-up" className="form-label">First Name</label>
                                    <input onChange={props.handleFirstName} type="text" className="form-control" id="exampleInputFirstName-sign-up" aria-label="First name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputLastName-sign-up" className="form-label">Last Name</label>
                                    <input onChange={props.handleLastName} type="text" className="form-control" id="exampleInputLastName-sign-up" aria-label="Last name"/>
                                </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail-sign-up" className="form-label">Email address</label>
                                    <input onChange={props.handleEmail} type="email" className="form-control" id="exampleInputEmail-sign-up" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword-sign-up" className="form-label">Password</label>
                                    <input onChange={props.handlePassword} type="password" className="form-control" id="exampleInputPassword-sign-up"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword-repeat-sign-up" className="form-label">Repeat password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword-repeat-sign-up"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck"/>
                                    <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
                                </div>
                                {/* <button className="btn btn-primary" type="submit">Submit form</button> */}
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.handleClick} type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}