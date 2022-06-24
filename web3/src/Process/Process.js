import React, { Component } from 'react';
import './Process.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

class Process extends Component {

    render() {
        return (
            <div className='process' id="process">
                
                <div className='process_title'>Development Process
                    <ScrollAnimation animateIn='animate__fadeInRight' animateOnce='true' duration='1'>
                        <div className='process_diagram_wrapper'>
                            <div className='process_blue_wrapper'>
                                <img src='./images/process-blue.png' className='process_diagram_img'></img>
                                <p className='process_diagram_title'>Understanding Your Needs</p>
                                <p className='process_diagram_content'>After assessing your project, we gather your initial requirements and provide you with a variety of strategies and budgets depending on what route best suits you.</p>
                                <p className='process_diagram_label'>01</p>
                            </div>
                            <div className='process_orange_wrapper'>
                                <img src='./images/process-orange.png' className='process_diagram_img'></img>
                                <p className='process_diagram_title'>Strategy &<br></br>Design Planning</p>
                                <p className='process_diagram_content'>A team of blockchain developers, business analysts, tech and product managers create a strategy built around your desires along with assessing the risks and limitations.</p>
                                <p className='process_diagram_label'>02</p>
                            </div>
                            <div className='process_green_wrapper'>
                                <img src='./images/process-green.png' className='process_diagram_img'></img>
                                <p className='process_diagram_title'>Developing<br></br>& Testing</p>
                                <p className='process_diagram_content'>Upon approval of our strategy, a development team is assigned. All of our work is transparent, allowing you to track progress and make changes.</p>
                                <p className='process_diagram_label'>03</p>
                            </div>
                            <div className='process_red_wrapper'>
                                <img src='./images/process-red.png' className='process_diagram_img'></img>
                                <p className='process_diagram_title'>Launch<br></br>& Support</p>
                                <p className='process_diagram_content'>Thriving on integrity and longevity, we outline support and maintenance projections for your Web3 project to ensure its continuous operation.</p>
                                <p className='process_diagram_label'>04</p>
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