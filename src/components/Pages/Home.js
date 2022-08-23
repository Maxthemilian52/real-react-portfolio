import React from 'react';
import '../../styling/Home.css'

function Home(){
    
    return(
        <div className="background">
                <div className="column">
                    <h3>Hello There!</h3>
                        <div className="home-container">
                            <h1>My Name is Maximilian.</h1>
                            <p>I'm a full-stack developer based out of Columbus, Ohio passionate about team work and creating problem-solving solutions.</p>
                        </div>
                    <a href="/portfolio"><button className="button">My Projects</button></a>
                </div>
        </div>
    )
}

export default Home;