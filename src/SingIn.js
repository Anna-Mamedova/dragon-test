import React from "react";

export default function SingIn() {
    return (
        <div>
            <a href="/" className="link-light me-4" data-bs-toggle="modal" data-bs-target="#exampleModal-sing-in">
            Sing in
            </a>
            <div className="modal fade" id="exampleModal-sing-in" tabIndex="-1" aria-labelledby="exampleModalLabel-sing-in" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel-sing-in">Sing In</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail-sing-in" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail-sing-in" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword-sing-in" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword-sing-in"/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck-sing-in">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-secondary w-100">Sing In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}