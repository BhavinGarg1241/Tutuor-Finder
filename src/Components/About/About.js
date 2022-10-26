import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import './About.css';
import brandlogo from '../Tutors/brandlogo.png';

function About(){
    return(
        <div className="about">
            <Navigation/>
            <img src={brandlogo} style={{height:"40px",width:"40px",top:"10px",position:"fixed",left:"220px"}}/>
            <h1 id="abouth1">About Us!</h1>
            <h2 id="abouth2">Welcome to Expertism!</h2>
            <p className="aboutp">Expertism is a Professional Tutor Finder Platform. Here we will provide you only interesting content, which you will like very much.
               We're dedicated to providing you the best of Tutors, with a focus on dependability and Teaching. 
               We're working to turn our passion for Tutor Finder into a booming online website. We hope you enjoy our Tutor Finder rvice as much as we enjoy offering them to you.</p>
            <p className="aboutp">We will keep posting more important posts on our Website for all of you. Please give your support and love.</p>
            <h3 id="abouth3">Thanks For Visiting Our Site</h3>
            <Footer/>
        </div>
    );
}
export default About;