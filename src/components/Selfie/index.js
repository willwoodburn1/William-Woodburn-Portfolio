import React from 'react';
import Me from "../../images/me.png";
import "./style.css";

function Selfie() {
    return (
        <div>

            {/* <p id="introPara"> Hello there! My name is William Woodburn. I'm a Business Student at Monash University, Full-Stack Web Developer, Aspiring Entrepreneur, and Investor </p> */}

            <img src={Me} alt="selfie" id="selfie"></img>

        </div>
    )
}
export default Selfie;