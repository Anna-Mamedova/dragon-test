import React from "react";
import SingUp from "./SingUp"
import SingIn from "./SingIn"
import logo from "./image/logo.jpeg"
import "./Header.css"

export default function Header() {
    return (
        <div className="Header d-flex justify-content-between sticky-top">
            <img src={logo} alt="logo SpaceX" height={22}/>
            <div className="d-flex">
            <SingIn />
            <SingUp />
            </div>
        </div>
    )
}