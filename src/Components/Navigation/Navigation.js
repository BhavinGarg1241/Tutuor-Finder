import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css'


function Navigation(){
    return(
        <div className="navbar">
            <div id="nav-div1">
                <Link id="brand" to="/">Expertism</Link> &emsp;
            </div>
            <div id="navdiv2">
                <Link className="navlinks" to="/tutors">Tutors</Link> &emsp;
                <Link className="navlinks" to="/about">About</Link> &emsp;
                <Link className="navlinks" to="/contact">Contact</Link> &emsp;
                <Link className="navlinks" to="/login">Sign Up / Login</Link>
            </div>
        </div>
    );
}

export default Navigation;