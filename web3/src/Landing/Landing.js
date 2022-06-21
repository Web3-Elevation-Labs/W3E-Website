import React, { Component } from 'react';
import './Landing.css'
import { Link } from 'react-scroll';

class Landing extends Component {
    render() {
        return (
            <div className='landing' id='landing'>
                <div className='header'>
                    
                    <p className='landing_header_title'>Web3 Elevation Labs</p>
                    <div className='landing_header_menu'>
                        <li><Link to="landing" activeClass="active" spy={true} smooth={true} offset={0}>Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true} offset={-125} >Services</Link></li>
                        <li>About</li>
                        <li>Our Work</li>
                        <li>Contact Us</li>
                    </div>
                </div>
                <div className='landing_showcase_wrapper'>
                    <img src="./images/logo.png" className='landing_showcase_logo'/>
                    <p className='landing_showcase_title'>Gaming on the blockchain. Redesigned.</p>
                    <p className='landing_showcase_content'>Our high-level team thrives off building innovative new projects with passionate individuals and organizations. We help develop and deploy your dream Web3 project with the highest level of customization and security.</p>
                </div>
            </div>
        );
    }
}

export default Landing;