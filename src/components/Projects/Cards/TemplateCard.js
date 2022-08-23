import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../styling/Card.css'
import '../../../styling/Tab.css'

class TemplateCard extends React.Component{
    
    constructor(props){
        super(props); 
        this.displayContent=this.displayContent.bind(this);
    }

    displayContent(){
        var description= "";
        var overview= "";
        var technologies= "";
        var challenges= "";
        var github= "";

        if(this.props.title==="E-Commerce Back End"){
            github="https://github.com/Maxthemilian52/module-13-ecommerce";
            description="E-Commerce Back End with Object-Relational Mapping";
            overview="This project provides the server-side functionality to an ecommerce website.  I took a working Express.js API and configured it to use Sequelize to inteact with a MySql database.  Functioanly includes using GET, PUT, and POST routes to interact with the database.";
            technologies="This project used Express.js, Sequelize, and MySql alongside Insomnia in order to test routes.";
            challenges="One of the biggest challenges for this project was getting each individual route to work.  When two of the ten routes aren't working, even if they had been coded correctly, it gets frustrating.  This project really taught me a lesson in keeping a very sharp eye on proper syntax.";
        } else if(this.props.title==="CMA"){
            github="https://github.com/Maxthemilian52/batarang";
            description="A blog-style web page developed for the Columbus Museum of Art with login, posting, and commenting capabilities";
            overview="This webpage was designed for the Columbus Museume of Art Docents(board members) in order to allow a clearer form of communication between members.  Functionality of this site includes the ability to add events, post, and comment on other user's posts. ";
            technologies="This application was built with REACT, using Apolloql for our database and Jest for testing.";
            challenges="As a member of a four man team, myself and my partner were in charge of the back-end of this project.  One of the main challenges was maintaining clear communication between our front=end developers to allow for efficient creation of the site.";
        } else if(this.props.title==="Note Taker"){
            github="https://github.com/Maxthemilian52/note-taking-application";
            description="Note Taking with Express.js";
            overview="The purpose of this project was to create a note taking application that could be used to write and save notes. This application used an Express.js back end and saved and retrieved note data from a JSON file.";
            technologies="Express.js was the main technology for this application.";
            challenges="The biggest challenge while working on this project was struggling in order to get the information from the database to populate the right fields.";
        } else if(this.props.title==="Social Media API"){
            github="https://github.com/Maxthemilian52/no-sql-media";
            description="NoSQL Social Media Api";
            overview="In this project, I built an API for a social network application where users can share their thoughts, react to friends' thoughts, and create a friend list.  This application was not deployed but serves as a functioning backend with POST, PUT, and DELETE routes.  The goal was to create this functionality using a non-relational database.";
            technologies="This project used Express.js for routing, a MongoDB database, and the Mongoose ODM.";
            challenges="This project was a big challenge when it came to creating IDs for Users and Comments to provide the ability to comment on specific posts.  It was very interesting and fun working out all the kinks in order to get the routing to work correctly.";
        } else if(this.props.title==="Employee CMS"){
            github="https://github.com/Maxthemilian52/employer-tracking";
            description="A SQL Content Management System";
            overview="The purpose of this project was to create a command-line application from scratch in order to manage a company's employee database, using Node.js, Inquirer and MySql.";
            technologies="MySql2 was used to connect my MySql database and perform queries, while Inquirer was used to interact with the user via the command line.";
            challenges="I thought that this project was very interesting, especially the use of Inquirer.  Being able to interact with the database in a clean format while accepting prompts within the command line was very satisfying to get working.";
        };
        this.props.callBack(true, this.props.title, description, github, overview, technologies, challenges);
    }

    render(){
        return(
            <div>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" className="card-image" src={this.props.imageSrc}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                         {this.props.description}
                        </Card.Text>
                        <Button onClick={this.displayContent}>View</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    };
};

export default TemplateCard;

