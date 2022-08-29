import React from 'react';
import AboutMePic from '../../assets/aboutMeNew2.jpg'
import '../../styling/AboutMe.css'

function AboutMe() {
    return(
        <div className="aboutme-container">
                <img src={AboutMePic} className="img"></img>
                
                <div className="aboutme-content">
                    <h2 className="aboutme-title">About Me</h2>
                        <p className="aboutme-p">
                                Hello! My name is Maximilian Shaw, you can call me Max.  I am a full-stack developer from Columbus, Ohio.
                        I just completed The Ohio State's 12 week Full Stack Web-Development Bootcamp and am working towards becoming a Jr. Developer.
                        </p>
                        <p className="aboutme-p">
                                Having just switched career paths and after completing Ohio State's Bootcamp, computer science is an open world of learning
                        which I find very exciting. There is nothing better than discovering new and more efficient ways to tackle problems.  The idea of constantly learning
                        throughout the progression of your career is something that pushes me to pursue this profession.  I am always ready and willing to learn!
                        </p>
                        <p className="aboutme-p">
                                Passing The Ohio State's 12 week Full Stack Web-Development Bootcamp with an A has definitely been my biggest accomplishment so far. 
                         As I look for possible job prospects, I am also working on personal projects to further my knowledge and gain more experience.
                        </p>
                </div>
        </div>
    )
}

export default AboutMe;