import React, { useState } from "react";
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import UserAccount from "./UserAccount"
import logo from "./image/logo.jpeg"
import "./Header.css"

export default function Header() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [hide, setHide] = useState("")
    const [show, setShow] = useState("d-none")

    function handleClick(event) {
        event.preventDefault()
        setHide("d-none")
        setShow("")
    }

    function handleSignOut() {
        setHide("")
        setShow("d-none")
    }

    return (
        <div className="Header d-flex justify-content-between sticky-top">
            <img src={logo} alt="logo SpaceX" height={24}/>
            <div className="d-flex">
                <LogIn handleClick = {handleClick} hide = {hide} setEmail = {setEmail} setPassword = {setPassword}/>
                <SignUp handleClick = {handleClick} hide = {hide} setEmail = {setEmail} setPassword = {setPassword} setFirstName = {setFirstName} setLastName = {setLastName}/>
            </div>
            <div className={`d-flex ${show}`}>
                <a href="/" className="link-light me-4" data-bs-toggle="modal" data-bs-target="#exampleModal-user">{email} </a>
                <UserAccount email = {email} password = {password} firstName = {firstName} lastName = {lastName}/>
                <a onClick={handleSignOut} href="/" className="link-light">
                Sign out
                </a>
            </div>
        </div>
    )

}