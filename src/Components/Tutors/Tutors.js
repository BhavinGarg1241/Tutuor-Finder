import React, { Fragment } from "react";
import { useState, useNavigate } from "react";
import { tutorData } from "./data";
import user from './user.png'
import './Tutors.css';
import Navigation from "../Navigation/Navigation";
import proceed from './proceed.png';
import brandlogo from './brandlogo.png';

function Tutors(){
    //Search Bar
    const [datas,setData] = useState(tutorData);
    
    const handleChange = (e) => {
        if (e.target.value.length > 0) {
            setData(datas.filter((subject) => {
                return subject.subject.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase());
            }));
        }else{
            setData(tutorData)
        }
    };

    return(
        <Fragment>
            <div className="tutors">
                <Navigation/>
                <div id="tutors-container">
                    <input type="text" id="searchbarinp" placeholder="Search Subjetcs..." onChange={handleChange}/>

                    {datas.map((data,key) => {
                        return(
                        <div className="tut-cards">
                            <img src={brandlogo} style={{height:"40px",width:"40px",top:"10px",position:"fixed",left:"220px"}}/>
                            <div className="tut-cards-img">
                                <img className="tut-user-img" src={user} alt="Tutor Image"/>
                            </div>
                            <div className="tut-cards-details">
                                <p className="tutorp">Name : {data.name} <br/><br/>
                                Subjects : {data.subject} <br/><br/>
                                Qualification : {data.qualification} </p>
                                <img onClick={() => alert("Deatils will be mailed you soon!\nThankyou!")} className="proceed-img" src={proceed} />
                            </div>
                        </div>
                        );
                    })}

                </div>
            </div>
        </Fragment>
    );
}
export default Tutors;