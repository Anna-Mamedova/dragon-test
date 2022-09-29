import React, { useState } from "react";
import SingUp from "./SingUp"
import SingIn from "./SingIn"
import logo from "./image/logo.jpeg"
import "./Header.css"

export default function Header() {

    const [hide, setHide] = useState("")
    const [show, setShow] = useState("d-none")

    function handleClick(event) {
        event.preventDefault()
        setHide("d-none")
        setShow("")
    }

    function handleSign(event) {
        event.preventDefault()
        setHide("")
        setShow("d-none")
    }

    return (
        <div className="Header d-flex justify-content-between sticky-top">
            <img src={logo} alt="logo SpaceX" height={22}/>
            <div className="d-flex">
                <SingIn handleClick = {handleClick} hide = {hide}/>
                <SingUp handleClick = {handleClick} hide = {hide}/>
            </div>
            <a onClick={handleSign} href="/" className={`link-light me-4 ${show}`}>
             Sign out
            </a>
        </div>
    )

}