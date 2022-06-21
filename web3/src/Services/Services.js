import React, { Component } from 'react';
import './Services.css'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';


class Services extends Component {

    render() {
        return (
            <div className='services' id="services">
                <h1 className='services_title'>Development Services</h1>
                <ScrollAnimation  animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                    <img src="./images/services_image.png" className='service_showcase_img'/>
                </ScrollAnimation>
                <ScrollAnimation  animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                    <div className='services_smart_contract'>
                        <p className='services_smart_contract_title'>Smart Contracts</p>
                        <p className='services_smart_contract_content'>Smart contracts are the building blocks of the Ethereum blockchain. By ensuring security and optimization, your decentralized applications will elevate to the next level.</p>    
                    </div>
                </ScrollAnimation>
                <ScrollAnimation  animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                    <div className='services_web3_integration'>
                        <p className='services_web3_integration_title'>Web3 Integration</p>
                        <p className='services_web3_integration_content'>The web is evolving and we are here to create or transform your company by integrating Web3 in the most efficient process tailored to your ambitions.</p>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation  animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                    <div className='services_frontend_development'>
                        <p className='services_frontend_development_title'>Front-end</p>
                        <p className='services_frontend_development_content'>We develop and optimize front-end platforms with a priority on usability and a sleek user interface. At the end of the day, an application is only as satisfactory as the interface.</p>
                    </div>
                </ScrollAnimation>
                <div className='management_title'>Management Services
                    <ScrollAnimation  animateIn='animate__fadeInLeft' animateOnce='true' duration='1.5'>
                        <img src="./images/services_image_2.png" className='management_showcase_img'/>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                        <div className='community_management'>
                            <p className='community_management_title'>Community Management</p>
                            <p className='community_management_content'>Community building and engagement is a must for every project. We help to build and grow an organic and engaging community.</p>    
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation  animateIn='animate__fadeInRight' animateOnce='true' duration='1.5'>
                        <div className='growth_management'>
                            <p className='growth_management_title'>Growth Services</p>
                            <p className='growth_management_content'>We create content and offer its continuous placement on trending crypto and fintech media outlets.</p>    
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        );
    }
}

export default Services;