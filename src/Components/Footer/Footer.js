import React from "react";

function Footer(){
    const mystyle = {
        backgroundColor: "#3F3939",
        height : "50px",
        textAlign: "center",
        position: "fixed",
        bottom : "0px",
        width : "100%"
    };
    const mystyleforp = {
        color : "white",
        fontSize : "15px"
    }
    return(
        <div className="footer" style={mystyle}>
            <p style={mystyleforp}><b>&copy; Copyright | Expertism</b></p>
        </div>
    );
}
export default Footer;