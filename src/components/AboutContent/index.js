import React from "react";
import "./style.css";

function AboutContent() {
    return (
        <div>

            <section className="aboutSection">
                <h3 className="aboutTitles"> Business Student Monash University</h3>
                <p>
                    I am Currently undertaking a tertiary education course at Monash University, Caulfield. I am completing a Bachelor of Business with major studies
                    in Banking and Finance, as well as Macroeconomics coupled with a minor study in Accounting.
                    I have already began looking into such courses as macro/micro economics, accounting, finance, management, marketing, business law, and business statistics.
                    During my study time I have maintained a High Distinction(HD) grade score average.
                </p>
            </section>

            <section className="aboutSection">
                <h3 className="aboutTitles"> Full-Stack Web Development </h3>
                <p>
                    This course was an additional extra-curricular activity run through Monash university to which I was very interested in completing and hence signed up for of my own accord.
                    Having no prior knowledge I found this quite challenging however, through perseverance and hardwork  I was able to complete the course whilst maintaining an A- average score on tasks.
                    At completion of this course, I have now received an extensive knowledge of various front and back end coding practices which include... <br></br>
                    HTML5, CSS, Javascript, Jquery, Bootstrap, JSON, AJAX, Real Time Cloud Database via Firebase, Node js, Express, MVC User Authentication, ORM (Sequelize), Heroku, Git, GitHub, and React
                </p>
            </section>

            <section className="aboutSection">
                <h3 className="aboutTitles"> Victorian Certificate of Education</h3>
                <p>
                    During my high school endeavours  I undertook studies in English, advanced mathematics, business,
                    sport and recreation, and  physical education.
                    I received an ATAR score of 83.00 at the conclusion of my schooling,
                    ranking me in the top 17% of the state of Victoria.
                </p>
            </section>

        </div>
    )
}
export default AboutContent;