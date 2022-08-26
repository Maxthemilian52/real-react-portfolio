import React from 'react';
import RealResume from '../../assets/ResumeJpg.jpg';
import DownloadResume from "../../assets/Resume.pdf";
import '../../styling/Resume.css'

function Resume(){
    return(
        <div className="resume-container">
            <div className="resume-text">
                <h1>My Resume</h1>
                <a href={DownloadResume} download="Max Shaw Resume" className="resume-download"><p>Download</p></a>
            </div>
            <img src={RealResume} className="resume" alt="max's resume"></img>
        </div>
    )
}

export default Resume;