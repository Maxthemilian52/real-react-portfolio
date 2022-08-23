import React from 'react';
import FakeResume from '../../assets/FakeResume.jpg'
import '../../styling/Resume.css'

function Resume(){
    return(
        <div className="resume-container">
            <div className="resume-text">
                <h1>My Resume</h1>
                <p>Download Here!</p>
            </div>
            <img src={FakeResume} className="resume" alt="max's resume"></img>
            <img src={FakeResume} className="resume" alt="max's resume"></img>
            <img src={FakeResume} className="resume" alt="max's resume"></img>
        </div>
    )
}

export default Resume;