import React, { Component } from 'react';
import './About.css'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

class About extends Component {

    render() {
        return (
            <div className='about' id="about">
                
                <div className='about_title'>Why Us?
                    <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                        <div className='about_blockchain'>
                            <p className='about_blockchain_title'>Blockchain Expertise</p>
                            <p className='about_blockchain_content'>We have a large team of developers specializing in blockchain, smart contracts and website development.</p>    
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                        <div className='about_flexible'>
                            <p className='about_flexible_title'>Flexible Team</p>
                            <p className='about_flexible_content'>Our diverse team works with you to create a fine tuned plan allowing you to be comfortable with the current and future state of your project.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                        <div className='about_transparency'>
                            <p className='about_transparency_title'>Transparency</p>
                            <p className='about_transparency_content'>We pride ourselves on being completely transparent. We enable our clients to keep track of their project progress through regular reports.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeInLeft' animateOnce='true' offset='400' duration='1.5'>
                        <div className='about_security'>
                            <p className='about_security_title'>Security</p>
                            <p className='about_security_content'>We provide the highest levels of security when creating and maintaining your project to protect against malicious attacks.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' offset='600' duration='3'>
                        <div className='management_showcase_glow_img1'></div>
                        {/*<img src="./images/services_image.png" className='service_showcase_img'/>*/}
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default About;