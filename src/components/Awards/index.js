import React from "react";
import "./style.css";

function Awards() {
    return (
        <div>
            <section id="awardsSection">
                <h3 id="awardsTitle"> Awards/Certifications</h3>
                <ul id="awardsList">
                    <li className="award"> <strong> Full-Stack Web Development Certificate </strong> from Monash University (via extra-curricular studies of online Bootcamp) </li>
                    <li className="award"> <strong> Bachelor of Business Degree </strong> Monash University maintaining a High Distinction grade score. (in progress) </li>
                    <li className="award"> <strong> VCE Certificate </strong> with a raw ATAR score of 82.85.</li>
                    <li className="award"> First aid, CPR  and Working with Children qualified.</li>
                    <li className="award"> Certificate 4 in Business</li>
                    <li className="award"> Certificate 4 in Sport and Recreation and Leadership.</li>
                </ul>

            </section>

        </div>
    )
}
export default Awards;