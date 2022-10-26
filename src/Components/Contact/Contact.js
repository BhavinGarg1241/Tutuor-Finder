import React from "react";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import './Contact.css';
import mail from './mail.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png';
import brandlogo from '../Tutors/brandlogo.png';

function Contact(){
    const [textarea, setTextarea] = useState(null);
    
      const handleChange = (event) => {
        setTextarea(event.target.value)
      };
    return(
        <div className="contact">
            <div id="contact-navbar"><Navigation/></div>
            <img src={brandlogo} style={{height:"40px",width:"40px",top:"10px",position:"fixed",left:"220px"}}/>
            <div id="contact-form">
                <form>
                    <label>Name : </label><br/><input type="text" required name="name" className="inp" placeholder="Enter your Name" /><br/><br/>
                    <label>Email : </label><br/><input type="email" required name="email" className="inp" placeholder="Enter your Email" /><br/><br/>
                    <label>State : </label><br/><input type="text" required name="state" className="inp" placeholder="Enter your State" /><br/><br/>
                    <label>City : </label><br/><input type="text" required name="city" className="inp" placeholder="Enter your City" /><br/><br/>
                    <label>Message: </label><br/><textarea cols="27" rows="4" placeholder="Type your message here....." value={textarea} onChange={handleChange}/><br/><br/>
                    <button id="contact-btn">Submit</button>
                </form>
            </div>
            <div id="contact-icons">
                <br/><br/>
                <a href="mailto:bhavin1241@chitkara.edu.in" className="contact-icons-a"><img src={mail} className="contact-icon-img" /></a><br/><br/>
                <a href="https://www.facebook.com/" className="contact-icons-a"><img src={facebook} className="contact-icon-img" /></a><br/><br/>
                <a href="https://www.instagram.com/" className="contact-icons-a"><img src={instagram} className="contact-icon-img" /></a><br/><br/>
                <a href="https://twitter.com/?lang=en" className="contact-icons-a"><img src={twitter} className="contact-icon-img" /></a><br/><br/>
            </div>
            <Footer/>
        </div>
    );
}
export default Contact;