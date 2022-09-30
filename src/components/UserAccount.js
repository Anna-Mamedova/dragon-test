import React from "react";

export default function UserAccount(props) {

    if (props.firstName && props.lastName){
        return (
            <div className="modal fade" id="exampleModal-user" tabIndex="-1" aria-labelledby="exampleModalLabel-user" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel-user">Account</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>First name: {props.firstName}</p>
                        <p>Last name: {props.lastName}</p>
                        <p>Email: {props.email}</p>
                        <p>Password: {props.password}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    } else {
    return (
        <div className="modal fade" id="exampleModal-user" tabIndex="-1" aria-labelledby="exampleModalLabel-user" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel-user">Account</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Email: {props.email}</p>
                        <p>Password: {props.password}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}