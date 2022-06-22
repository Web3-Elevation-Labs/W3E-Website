import React, { Component } from 'react';
import './Landing.css'
import { Link, animateScroll as scroll } from 'react-scroll';

class Landing extends Component {
    render() {
        return (
            <div className='landing' id='landing'>
                <div className='header'>
                    <p><Link to="landing" spy={true} smooth={true} offset={0} className='landing_header_title' onClick={scroll.scrollToTop()}>Web3 Elevation Labs</Link></p>
                    <p className='landing_header_subtitle'>The future is here.</p>
                    <div className='landing_header_menu'>
                        <li><Link to="landing" activeClass="active" spy={true} smooth={true} offset={0}>Home</Link></li>
                        <li><Link to="services" spy={true} smooth={true} offset={-85} >Development</Link></li>
                        <li><Link to="management" spy={true} smooth={true} offset={-100} >Management</Link></li>
                        <li><Link to="projects" spy={true} smooth={true} offset={-140} >Projects</Link></li>
                        <li><Link to="footer" spy={true} smooth={true} offset={0} >Contact Us</Link></li>
                    </div>
                </div>
                <div className='landing_showcase_wrapper'>
                    <img src="./images/logo.png" className='landing_showcase_logo'/>
                    <p className='landing_showcase_title'>Blockchain development. Elevated and redefined.</p>
                    <p className='landing_showcase_content'>Our high-level team thrives off building innovative new projects with passionate individuals and organizations. We help develop and deploy your dream Web3 project with the highest level of customization and security.</p>
                </div>
            </div>
        );
    }
}

export default Landing;