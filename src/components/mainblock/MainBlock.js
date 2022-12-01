import React from 'react';
import "./style.css"
import man from "./man.png"
import head from "./head.png"
import AboutBlock from "../aboutblock/AboutBlock";
import LastBlock from "../lastblock/LastBlock";
const MainBlock = () => {
    return (
        <div className="main">
            <div className="header">
                <a hover={<MainBlock/>} className="homePage">Home</a>
                <a hover={<AboutBlock/>} className="aboutPage">About me</a>
                <a hover={<LastBlock/>} className="portfolioPage">Portfolio</a>
                <a hover={<MainBlock/>} className="contactPage">Contact</a>
            </div>
            <div className="textContent">
                <h1>HELLO</h1><br/>
                <h2>I'M Alexey<br/>
                    Guk</h2><br/>
                <p>I've been doing web design, front-end and<br/>
                    back-end development for a year now. Do you<br/>
                    need a website design, site layout, or maybe a <br/>
                    full website? Then contact me</p>
            </div>
            <button>CONTACT ME</button>
            <div className="elipse"></div>
            <img className="man" src={man}/>
            <img className="head" src={head}/>
            <div className="ui"><p>UI</p></div>
            <div className="front"><p>&#128736;</p></div>
            <div className="ux"><p>UX</p></div>
            <div className="ps"><p>PS</p></div>
        </div>
    );
};

export default MainBlock;