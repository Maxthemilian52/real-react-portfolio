import React from 'react';
import '../../styling/Home.css';

function Home({ currentPage, changePage }){
    
    return(
        <div className="background">
                <div className="column">
                    <h3>Hello There!</h3>
                        <div className="home-container">
                            <h1>My Name is Maximilian.</h1>
                            <p>I'm a full-stack developer based out of Columbus, Ohio passionate about team work and creating problem-solving solutions.</p>
                        </div>
                    <a href="#Portfolio" onClick={()=> changePage('Portfolio')}><button className="button">My Projects</button></a>
                </div>
        </div>
    )
}

export default Home;