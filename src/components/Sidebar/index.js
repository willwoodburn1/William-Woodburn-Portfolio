import React, { useState } from "react";
import Linkedin from "../../images/linkedinLogo.png";
import Resume from "../../images/resumeLogo.png";
import Github from "../../images/githubLogo.png";

import "./style.css";

function Sidebar() {

    // const [greeting, setGreeting] = useState()


    return (
        <div>
            <aside id="sideBar">
                <h3 id="connectTitle"> Connect With Me </h3>
                <span id="imagesSpan">
                    <a href="https://docs.google.com/document/d/13oEx84Pn1siprB5DLkNToBeR-GNSTXfetH8NxtXw2Vg/edit?usp=sharing" target="_blank" ><img src={Resume} alt="resume" /> </a>
                    <a href="https://www.linkedin.com/in/will-woodburn-bb656b1ab/" target="_blank" ><img src={Linkedin} alt="linkedin" /> </a>
                    <a href="https://github.com/willwoodburn1" target="_blank" ><img src={Github} alt="github" /> </a>


                </span>

                <div id="contactInfo">
                    <h4 id="contactTitle"> <strong>Contact Info: </strong> </h4> <br />
                    <h6> <strong>Name: </strong> William Woodburn </h6> <br />
                    <h6> <strong>Email: </strong> woodburn.william1@gmail.com</h6> <br />
                    <h6> <strong>Phone: </strong> 0497803106 </h6> <br />
                    <h6> <strong>Address: </strong> 56 College Walk, Clayton, 3168 </h6>
                </div>

            </aside>


            <div id="titleOfPage">
                <h1 id="renderedTitle"> Hello There </h1>
            </div>

        </div>
    )
}
export default Sidebar;