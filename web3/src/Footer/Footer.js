import React, { Component } from 'react';
import './Footer.css'
import {twitterRedirect} from '../Utils/Redirects'
import {linkedinRedirect} from '../Utils/Redirects'
import {thugcitywebsiteRedirect} from '../Utils/Redirects'
import {w3eofficeRedirect} from '../Utils/Redirects'

class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <div className='container'>
                 <div className='column_1'>
                        <h1> Work </h1>
                        <ul className='list-unstyled_1'>
                            <li onClick={() => {thugcitywebsiteRedirect()}}> ThugCity </li>
                            <li> Careers </li>
                        </ul>
                    </div>
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
                            <li> Admin@w3elabs.com </li>
                            <li onClick={() => {w3eofficeRedirect()}}> 1988 Triumph St, B.C, Canada </li>
                        </ul>
                    </div>
                </div> 
                <div className='footer_copyright_text'>
                        <h2> © 2022 Web3 Elevation labs, Inc. </h2>
                    </div>
            </div> 
 
                    
        );
    }
}

export default Footer;