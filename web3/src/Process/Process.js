import React, { Component } from 'react';
import './Process.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

class Process extends Component {

    render() {
        return (
            <div className='process' id="process">
                
                <div className='process_title'>Development Process
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' duration='1.5'>
                        <div className='process_blockchain'>
                            <p className='process_blockchain_title'>1. Understanding Your Needs</p>
                            <p className='process_blockchain_content'>After assessing your project, we gather your initial requirements and provide you with a variety of strategies and budgets depending on what route best suits you.</p>    
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' duration='1.5'>
                        <div className='process_flexible'>
                            <p className='process_flexible_title'>2. Strategy & Design Planning</p>
                            <p className='process_flexible_content'>A team of blockchain developers, business analysts, tech and product managers create a strategy built around your desires along with assessing the risks and limitations.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' duration='1.5'>
                        <div className='process_transparency'>
                            <p className='process_transparency_title'>3. Development</p>
                            <p className='process_transparency_content'>Upon approval of our strategy, a development team is assigned. All of our work is transparent, allowing you to track progress and make changes.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' offset='700' duration='1.5'>
                        <div className='process_security'>
                            <p className='process_security_title'>4. Launch and Support</p>
                            <p className='process_security_content'>Thriving on integrity and longevity, we outline support and maintenance projections for your Web3 project to ensure its continuous operation.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' offset='600' duration='3'>
                        {/*<img src="./images/services_image.png" className='process_img'/>*/}
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default Process;