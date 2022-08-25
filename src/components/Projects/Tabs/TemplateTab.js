import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../../../styling/Tab.css';


class TemplateTab extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="tab-background">
                <div className="template-title">
                    <h1>{this.props.title}</h1>
                    <h3>{this.props.description}</h3>
                </div>
                <div className="populate">
                    <div className="tab-container">
                        <Tabs
                            defaultActiveKey="overview"
                            id="uncontrolled-tab-example"
                            className="mb-3 tab-background"
                            >
                            <Tab eventKey="overview" title="Project Overview">
                            <div className="tab tab-button-position">
                                <a href={this.props.github} target="blank">
                                    <button className="tab-button tab-button-glow">View Project Code!</button>
                                </a>
                                <p className='tab-content'>{this.props.overview}</p>
                            </div>
                            </Tab>
                            <Tab eventKey="profile" title="Technologies">
                            <div className="tab">
                                <p className='tab-content'>{this.props.technologies}</p>
                            </div>
                            </Tab>
                            <Tab eventKey="contact" title="Team Work and Challenges">
                            <div className="tab">
                                <p className='tab-content'>{this.props.challenges}</p>
                            </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
            )
    }
}

export default TemplateTab;