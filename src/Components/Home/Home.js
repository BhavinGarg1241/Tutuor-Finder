import React from "react";
import { useNavigate} from "react-router-dom";
import homeTutor from './home-tutor.png';
import './Home.css';

function Home(){
    const navigate = useNavigate();
    const navigateToTutors=()=>{
        navigate('/tutors');
    }
    return(
        <div className="home">
            <h1 id="homeh1">Welcome to Expertism</h1>
            <h2 id="homeh2">Difficulty in Studies!</h2>
            <p className="homep">No worries!, We have Expert Tutors from all</p> <p className="homep" style={{marginTop:"-30px"}}>over India for multiple subjects and age groups.</p>
            <p className="homep" style={{marginTop:"-30px"}}>You can trust on us with your studies and for good marks.</p>
            <button id="home-btn" onClick={navigateToTutors}>Explore!</button>
            <img id="homeimg" src={homeTutor}/>
        </div>
    );
}

export default Home;