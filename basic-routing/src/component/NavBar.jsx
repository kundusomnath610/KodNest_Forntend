import React from "react"
import { Link } from "react-router-dom"
import "../assets/style.css"

export default function Navbar() {
    return(
        <div>
            <nav className= "navbar">
            <Link to={'/home'} className="nav-link">Home</Link>
            <Link to={'/about'} className="nav-link">About</Link>
            <Link to={'/contact'} className="nav-link">Contact</Link>
            </nav>
        </div>
    ) 
}