import React, { Component } from 'react';
import './Projects.css'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
import {thugcitywebsiteRedirect} from '../Utils/Redirects'

class Projects extends Component {

    thugcityRedirect() {
        thugcitywebsiteRedirect();
    }
    render() {
        return (
            <div className='projects' id="projects">
                <h1 className='projects_title'>Projects</h1>
                
                    <div className='projects_thugcity'>
                        <ScrollAnimation  animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                            <p className='projects_thugcity_title'>ThugCity</p>
                            <p className='projects_thugcity_content'>A Play-To-Earn staking game on the Ethereum blockchain where Cops and Thugs compete to earn $BILLS.</p>
                            <button className='projects_thugcity_website_button' onClick= {() =>this.thugcityRedirect()}>Visit Website</button>
                        </ScrollAnimation>
                            <img src="./images/thugcity_logo.png" className='projects_thugcity_city_img'/>
                    </div>
                    <div className='projects_w3gp'>
                        <ScrollAnimation  animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                            <p className='projects_w3gp_title'>Web3 Grand Prix</p>
                            <p className='projects_w3gp_content'>The first ever racing game being brought to the Ethereum blockchain. Build a team and compete in races to earn rewards.</p>
                            <button className='projects_w3gp_website_button' >Coming soon...</button>
                        </ScrollAnimation>
                            <img src="./images/thugcity_logo.png" className='projects_w3gp_img'/>
                     
                    </div>
                
            </div>
        );
    }
}

export default Projects;