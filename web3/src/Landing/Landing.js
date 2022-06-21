import React, { Component } from 'react';
import './Landing.css'

class Landing extends Component {
    render() {
        return (
            <div className='landing'>
                <div className='header'>
                    <img src="./images/logo.png" className='landing_header_logo'/>
                    <p className='landing_header_title'>W3E Labs Inc. <br></br>
                    <span className='landing_header_subtitle_span'>Blockhain Consulting & Development</span></p>
                    <div className='landing_header_menu'>
                        <p>Services</p>
                        <p>About</p>
                        <p>Our Work</p>
                        <p>Contact Us</p>
                    </div>
                </div>
                <div className='landing_showcase_wrapper'>
                    <img src="./images/changeme.png" className='landing_showcase_img'/>
                    <p className='landing_showcase_title'>NFT Development & Consulting</p>
                </div>
            </div>
        );
    }
}

export default Landing;