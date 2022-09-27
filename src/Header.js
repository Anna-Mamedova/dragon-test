import React from "react";
import SingUp from "./SingUp"
import SingIn from "./SingIn"
import "./Header.css"

export default function Header() {
    return (
        <div className="Header d-flex justify-content-end">
            <SingIn />
            <SingUp />
        </div>
    )
}