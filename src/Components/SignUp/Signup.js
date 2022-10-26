import React from "react";
import { Link } from "react-router-dom";
import './Signup.css';


function Signup(){
   
    return(
        <div className="signup">
            <div id="nav-div1">
                <Link id="brand" to="/">Expertism</Link> &emsp;
                <Link className="logbacklinks" to="/tutors">Tutors</Link> &emsp;
            </div>
            <div className="signup-container">
            <label style={{color:"#2E2C2C",fontSize:"30px"}}>Create Account!</label><br/><br/>
                <form action="/login">
                    <label>Name : </label><br/><input type="text" required name="name" className="signinp" placeholder="Enter your Name" /><br/><br/>
                    <label>Email : </label><br/><input type="email" required name="email" className="signinp" placeholder="Enter your Email" /><br/><br/>
                    <label>Gender : </label><br/><input type="radio" name="gender" required className="radioinp"/><span className="signspan">Male</span>
                    <input type="radio" name="gender" className="radioinp"/><span className="signspan">Female</span>
                    <input type="radio" name="gender" className="radioinp"/><span className="signspan">Others</span><br/><br/>
                    <label>Create Password : </label><br/><input type="password" required name="psswd" className="signinp" placeholder="Create Password" /><br/><br/>
                    <button onClick={() => history.push('/')} type="submit" id="signbtn">Sign Up</button><br/><br/>
                    <span id="signupspanlink">Already have account? <Link id="signuplink" to="/login">Login Here!</Link></span>
                </form>
            </div>
        </div>
    );
}
export default Signup;