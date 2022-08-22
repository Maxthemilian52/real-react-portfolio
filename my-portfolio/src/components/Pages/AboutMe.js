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
                                Hello! My name is Maximilian Shaw, you can call me Max!  I am a full-stack developer from Columbus, Ohio.
                        I just completed The Ohio State's 12 week Full Stack Web-Development Bootcamp and am working to become a Jr. Developer!
                        </p>
                        <p className="aboutme-p">
                                Having just switched career paths, computer science is still new to me which is an aspect that I find very exciting!
                        There is nothing better than discovering new and more efficient ways to tackle problems.  The idea of constantly learning throughout
                        the progression of your career is something that pushes me to pursue this profession.  I am always ready and willing to learn!
                        </p>
                        <p className="aboutme-p">
                                Passing The Ohio State's 12 week Full Stack Web-Development Bootcamp with an A has definitely been my biggest accomplishment so far. 
                         I am also currently working on a webpage for the Columbus Museum of art alongside a couple of classmates.
                        </p>
                </div>
        </div>
    )
}

export default AboutMe;