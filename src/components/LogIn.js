import React from "react";

export default function LogIn(props) {

    return (
        <div>
            <a href="/" className={`link-light me-4 ${props.hide}`} data-bs-toggle="modal" data-bs-target="#exampleModal-log-in">
            Log in
            </a>
            <div className="modal fade" id="exampleModal-log-in" tabIndex="-1" aria-labelledby="exampleModalLabel-log-in" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel-log-in">Log In</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail-log-in" className="form-label">Email address</label>
                                    <input onChange={props.handleEmail} type="email" className="form-control" id="exampleInputEmail-log-in" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword-log-in" className="form-label">Password</label>
                                    <input onChange={props.handlePassword} type="password" className="form-control" id="exampleInputPassword-log-in"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck-log-in">Check me out</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.handleClick} type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Log In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}