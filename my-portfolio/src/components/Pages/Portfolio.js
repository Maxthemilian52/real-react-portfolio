import React from 'react';
import TemplateCard from '../Projects/Cards/TemplateCard';
import ORM from '../../assets/ORM.png'
import ReactLogo from '../../assets/react-logo-1.png';
import Mongo from '../../assets/mongo-logo-1.png';
import SQL from '../../assets/sql-logo.png';
import Express from '../../assets/express-logo.png';
import '../../styling/Portfolio.css';
import TemplateTab from '../Projects/Tabs/TemplateTab';

class Portfolio extends React.Component{
    
    constructor(props){
        super(props);
        this.state={buttonClicked: false, activeTab: "", title: "", description: "", overview: "", technologies: "", challenges: ""};
        this.handleCallback=this.handleCallback.bind(this);
    }

    handleCallback = (buttonData, tabData, description, github, overview, technologies,challenges) => {
        this.setState({buttonClicked: buttonData, activeTab: tabData, title: tabData, description: description, github: github, overview: overview, technologies: technologies, challenges: challenges});
    }

    render(){
        var description = null;
        var title = null;

        if(this.state.buttonClicked){
            description =
                <div>
                    <TemplateTab title={this.state.title} description={this.state.description} github={this.state.github} overview={this.state.overview} technologies={this.state.technologies} challenges={this.state.challenges}></TemplateTab>
                </div>;
        } else{
            title =
            <div className="portfolio-title">
                <h1 >Welcome to My Portfolio!</h1>
                <h3>The Cards below are some of the projects I completed during my Web Development Bootcamp</h3>
            </div>
        }

        return(
            <div className="page">
                <div className="portfolio">
                    {title}
                    <div className="contain">
                        <div className="grow"><TemplateCard callBack={this.handleCallback} title="CMA" description="React Application" imageSrc={ReactLogo}></TemplateCard></div> 
                        <div className="grow"><TemplateCard callBack={this.handleCallback} title="Note Taker" description="Express.js Application" imageSrc={Express}></TemplateCard></div> 
                        <div className="grow"><TemplateCard callBack={this.handleCallback} title="Social Media API" description="NoSQL Backend" imageSrc={Mongo}></TemplateCard></div> 
                        <div className="grow"><TemplateCard callBack={this.handleCallback} title="E-Commerce Back End" description="E-Commerce Backend (ORM)" imageSrc={ORM}></TemplateCard></div> 
                        <div className="grow"><TemplateCard callBack={this.handleCallback} title="Employee CMS" description="Content Management System" imageSrc={SQL}></TemplateCard></div>  
                    </div>
                </div> 
                    {description}
            </div>
        );
    };
};

export default Portfolio;