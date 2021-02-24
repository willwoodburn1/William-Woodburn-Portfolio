import React from 'react';
import "./style.css";

function Dropdowns() {
    return (
        <span id="dropdownSpan">
            <div className="dropdown" id="one">
                <a className="btn btn-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    Deployed Application </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="https://shrouded-citadel-48245.herokuapp.com/" target="_blank">BetHub: Odds Application</a></li>
                    <li><a className="dropdown-item" href="https://chrisjmckeown.github.io/BandEaR_Discover_live_artists/" target="_blank">Bandear</a></li>
                    <li><a className="dropdown-item" href="https://vast-crag-85624.herokuapp.com/" target="_blank"> Meal Budgeter </a></li>
                    <li><a className="dropdown-item" href="https://serene-ridge-61562.herokuapp.com/" target="_blank">React Employee Directory</a></li>
                    <li><a className="dropdown-item" href="https://agile-badlands-15879.herokuapp.com/" target="_blank">Eat Da Burger</a></li>
                    <li><a className="dropdown-item" href="https://willwoodburn1.github.io/Week3-Homework" target="_blank">Random Password Generator</a></li>
                </ul>
            </div>
            <div className="dropdown" id="two">
                <a className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    GitHub Repo Links </a>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/BetHub-Odds-Application" target="_blank">BetHub: Odds Application</a></li>
                    <li><a className="dropdown-item" href="https://github.com/chrisjmckeown/BandEaR_Discover_live_artists" target="_blank">Bandear Repo</a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/Group-Project-2" target="_blank"> Meal Budgeter Repo </a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/React-Employee-Directory" target="_blank">React Employee Directory Repo </a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/eatDatBurger" target="_blank">Eat Da Burger</a></li>
                    <li><a className="dropdown-item" href="https://github.com/willwoodburn1/Week3-Homework" target="_blank">Random Password Generator</a></li>
                </ul>
            </div>

        </span>
    )
}
export default Dropdowns;