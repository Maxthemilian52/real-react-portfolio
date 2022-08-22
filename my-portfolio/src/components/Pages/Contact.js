import React from 'react';
import LinkedIn from '../../assets/LinkedInBW.png';
import GitHub from '../../assets/GitHubLogoBW.png';
import Gmail from '../../assets/GmailBW.png';
import '../../styling/Contact.css';

function Contact(){
    return(
    <div className="contact-background">
        <div className="contact-title">
            <h1>Contact Me!</h1>
                <h3>Phone: (740)-279-8089</h3>
                <h3>Email: maximilianyoung52@gmail.com</h3>
                <h3>Github: Maxthemilian52</h3>
            <div className="img-position">
                <a href="https://www.linkedin.com/in/maximilian-shaw-9b91b5236/"><img src={LinkedIn} className="contact-img" alt="linkedIn logo"></img></a>
                <a href="mailto:maximilianyoung52@gmail.com"><img src={Gmail} className="contact-img" alt="linkedIn logo"></img></a>
                <a href="https://github.com/Maxthemilian52"><img src={GitHub} className="contact-img" alt="linkedIn logo"></img></a>
            </div>
        </div>
    </div>
    )
}

export default Contact;