import React from "react";
import { Link,useNavigate } from "react-router-dom";
import './Login.css';


function Login(){
    const navigateto = useNavigate();
    const navigateToMain = ()=>{
        navigateto('/tutors');
    }
    return(
        <div className="login">
            <div id="nav-div1">
                <Link id="brand" to="/">Expertism</Link> &emsp;
                <Link className="logbacklinks" to="/tutors">Tutors</Link> &emsp;
            </div>
            <div className="login-container">
            <label style={{color:"#2E2C2C",fontSize:"30px"}}>Login Here!</label><br/><br/>
                <form action="/home" onSubmit={navigateToMain}>
                    <label>Email : </label><br/><input type="email" required name="email" className="logininp" placeholder="Enter your Email" /><br/><br/>
                    <label>Password : </label><br/><input type="password" required name="psswd" className="logininp" placeholder="Enter your Password" /><br/><br/>
                    <button onClick={() => window.location("http://localhost:3000/tutors")} type="submit" id="loginbtn">Login</button><br/><br/>
                    <span id="loginspan">Dont have account? <Link id="loginlink" to="/signup">Register Here!</Link></span>
                </form>
            </div>
        </div>
    );
}
export default Login;