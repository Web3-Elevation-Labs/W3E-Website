import React, { Component } from 'react';
import './Management.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';

class Management extends Component {

    render() {
        return (
            <div className='management' id='management'>
                <div className='management_title'>Management
                    <ScrollAnimation animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                        <div className='community_management'>
                            <p className='community_management_title'>Community Management</p>
                            <p className='community_management_content'>Community building and engagement is a must for every project. We help to build and grow an organic and engaging community.</p>    
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                        <div className='growth_management'>
                            <p className='growth_management_title'>Growth Services</p>
                            <p className='growth_management_content'>We create content and offer its continuous placement on trending crypto and fintech media outlets.</p>    
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn='animate__fadeIn' animateOnce='true' offset='800' duration='3'>
                        <img src="./images/computer.png" className='management_img'/>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default Management;