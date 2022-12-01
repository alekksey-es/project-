import React from 'react';
import "./style.css"
import pen from "./img/oen.png"
import ux from "./img/UI.png"
import icon from "./img/nav-icon-list.png"
import logo from "./img/delicious.png"
import front from "./img/display.png"
import back from "./img/fronend.png"
import motion from "./img/layouts.png"
import me from "./img/me.jpg"
import withCat from "./img/withCat.jpg"
import sun from "./img/sun.jpg"

const AboutBlock = () => {
    return (
        <div className="mainAbout">
            <div className="productBlock">
                <img className="imageBlockProduct" src={pen}/>
                <p className="textProduct">Product Design</p>
            </div>
            <div className="uxBlock">
                <img className="imageBlockUx" src={ux}/>
                <p className="textUx">UX/UI Design</p>
            </div>
            <div className="iconBlock">
                <img className="imageBlockIcon" src={icon}/>
                <p className="textIcon">Icon Design</p>
            </div>
            <div className="logoBlock">
                <img className="imageBlockLogo" src={logo}/>
                <p className="textLogo">Logo Design</p>
            </div>
            <br/>
            <div className="backBlock">
                <img className="imageBlockBack" src={back}/>
                <p className="textBack">Backend</p>
            </div>
            <div className="frontBlock">
                <img className="imageBlockFront" src={front}/>
                <p className="textFront">Frontend</p>
            </div>
            <div className="motionBlock">
                <img className="imageBlockMotion" src={motion}/>
                <p className="textMotion">Motion</p>
            </div>
            <div className="elipseTwo"> </div>
            <div className="elipseThree"> </div>
            <div className="elipseFour"> </div>

            <div className="boxWithPhoto"><img className="withCat" src={withCat}/></div>
            <div className="textAboutMe">
                <p className="textAboutMeP">Hello again everyone! So, you already<br/>
                    know that my name is Alexey. A little<br/>
                    about myself: student, 19 y.o.,<br/>
                    hockey player, I love creativity<br/>
                    since childhood, I live in Minsk,<br/>
                    Belarus. Why programming?<br/>
                    Everything is elementary - I like it, the<br/>
                    profession of the future, thanks to<br/>
                    which I can provide myself and fulfill my<br/>
                    dream - travel, at the moment I<br/>
                    specialize in web design, front-end<br/>
                    and back-end development, turnkey<br/>
                    websites. Why should you choose me? I<br/>
                    approach each order with great<br/>
                    responsibility and love, as I want to<br/>
                    make a name for myself, exclude<br/>
                    plagiarism and negligence, fully study<br/>
                    the project, the client and its target<br/>
                    audience, work for quality, trying to<br/>
                    make an order as quickly and uniquely<br/>
                    as possible, taking into account all the<br/>
                    edits and wishes.<br/>
                    By trusting me, you will get the
                    <br/>maximum return for your project, save<br/>
                    your nerves and time.<br/>
                    If you are interested in me , you want<br/>
                    to know something more or use my<br/>
                    services, then I will provide all my
                    <br/>contacts below.</p>
            </div>
            <div className="AboutH">ABOUT ME</div>
            <div className="photoTwo"><img className="me" src={me}/></div>
            <div className="photoThree"><img className="sun" src={sun}/></div>
        </div>
    );
};

export default AboutBlock;