import React from 'react';
import "./style.css"
import projectOne from "./img/projectone.jpg"
const LastBlock = () => {
    return (
        <div className="lastMain">
            <h1 className="portfolio">PORTFOLIO</h1>
            <div className="contentPortfolio">
                <div className="projectOne"><img className="photoProjectOne" src={projectOne}/><a className="krypto" href="#">Krypto</a></div>

                <div className="projectTwo">

                </div>
            </div>
            <div className="footer">
                <ul className="informationOnHeader">
                    <li> <a>Home</a></li>
                    <li><a>About me</a></li>
                    <li> <a>Portfolio</a></li>
                    <li> <a>Contact</a></li>
                </ul>
                <div className="contactWithMe">
                    <p>Contact:</p>
                    <p>Email: guk.oficial@gmail.com</p>
                    <p>Inst: alekksey___</p>
                    <p>Calls: +375 (29) 505-36-27</p>
                </div>
                <h1 className="copy">Copyright © 2021, Alekksey</h1>
            </div>

        </div>
    );
};

export default LastBlock;