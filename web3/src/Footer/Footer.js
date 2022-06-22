import React, { Component } from 'react';
import './Footer.css'
import {emailRedirect, twitterRedirect, linkedinRedirect, w3eofficeRedirect} from '../Utils/Redirects'

class Footer extends Component {

    render() {
        return (
            <div className='footer' id='footer'>
                
                <div className='column_2'>
                        <h1> Follow us </h1>
                        <ul className='list-unstyled_2'>
                            <li onClick={() => {twitterRedirect()}}> Twitter </li> 
                            <li> Facebook </li>
                            <li onClick={() => {linkedinRedirect()}}> Linkedin </li>
                        </ul>
                 </div>  
                    <div className='column_3'>
                        <h1> Contact Us </h1>
                        <ul className='list-unstyled_3'>
                            <li className='footer_email' onClick={() => {emailRedirect()}}> admin@w3elabs.com </li>
                            <li className='footer_address' onClick={() => {w3eofficeRedirect()}}> 1988 Triumph Street<br></br>Vancouver, British Columbia<br></br>Canada </li>
                        </ul>
                    </div>
                <img src="./images/logo.png" className='footer_logo'/>
                <div className='footer_copyright_text' >
                        <h2> © 2022 Web3 Elevation Labs Inc. </h2>
                </div>
            </div> 
 
                    
        );
    }
}

export default Footer;