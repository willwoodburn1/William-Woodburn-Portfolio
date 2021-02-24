import React from "react";
import "./style.css";

import Bandear from "../../images/Bandear2.png";
import BetGraphs from "../../images/BetGraphs.png";


function Carousel() {


    return (
        <section >
            <div id="carouselExampleControls" className="carousel slide" id="hey" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active the">
                        <img src={Bandear} className="d-block w-70  the" alt="..." />
                    </div>
                    <div className="carousel-item the">
                        <img src={BetGraphs} className="d-block w-70 the" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section >
    )

}
export default Carousel;