import React, { Component } from 'react';
import './Process.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

class Process extends Component {

    render() {
        return (
            <div className='process' id="process">
                
                <div className='process_title'>Development Process
                    <ScrollAnimation animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                        <div className='about_diagram_wrapper'>
                            <img src='./images/about-blue.png' className='about_blue_img'></img>
                            <div className='about_blue_wrapper'>
                                <p className='about_diagram_title'>Understanding Your Needs</p>
                                <p className='about_diagram_content'>After assessing your project, we gather your initial requirements and provide you with a variety of strategies and budgets depending on what route best suits you.</p>
                                <p className='about_diagram_label'>01</p>
                            </div>
                            <img src='./images/about-orange.png' className='about_orange_img'></img>
                            <div className='about_orange_wrapper'>
                                <p className='about_diagram_title'>Strategy &<br></br>Design Planning</p>
                                <p className='about_diagram_content'>A team of blockchain developers, business analysts, tech and product managers create a strategy built around your desires along with assessing the risks and limitations.</p>
                                <p className='about_diagram_label'>02</p>
                            </div>
                            <img src='./images/about-green.png' className='about_green_img'></img>
                            <div className='about_green_wrapper'>
                                <p className='about_diagram_title'>Developing<br></br>& Testing</p>
                                <p className='about_diagram_content'>Upon approval of our strategy, a development team is assigned. All of our work is transparent, allowing you to track progress and make changes.</p>
                                <p className='about_diagram_label'>03</p>
                            </div>
                            <img src='./images/about-red.png' className='about_red_img'></img>
                            <div className='about_red_wrapper'>
                                <p className='about_diagram_title'>Launch<br></br>& Support</p>
                                <p className='about_diagram_content'>Thriving on integrity and longevity, we outline support and maintenance projections for your Web3 project to ensure its continuous operation.</p>
                                <p className='about_diagram_label'>04</p>
                            </div>
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