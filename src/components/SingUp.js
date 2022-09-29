import React from "react";

export default function SingUp(props) {

    return (
        <div>
            <a href="/" className={`link-light me-4 ${props.hide}`} data-bs-toggle="modal" data-bs-target="#exampleModal-sing-up">
            Sing up
            </a>
            <div className="modal fade" id="exampleModal-sing-up" tabIndex="-1" aria-labelledby="exampleModalLabel-sing-up" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel-sing-up">Sing Up</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="exampleInputFirstName-sing-up" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="exampleInputFirstName-sing-up" aria-label="First name"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="exampleInputLastName-sing-up" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="exampleInputLastName-sing-up" aria-label="Last name"/>
                                </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail-sing-up" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail-sing-up" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword-sing-up" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword-sing-up"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword-repeat-sing-up" className="form-label">Repeat password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword-repeat-sing-up"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck"/>
                                    <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.handleClick} type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Sing In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}