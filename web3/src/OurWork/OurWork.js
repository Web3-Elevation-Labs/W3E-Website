import React, {Component} from 'react'
import './OurWork.css'

class OurWork extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            slideIndex: 1
        }
    }


    render() {
        return (
            <div className='ourwork' id='ourwork'>
                <div className='ourwork_display_wrapper'>
                    <p className='ourwork_title'>Need help with a project?</p>
                </div>
                <div className='ourwork_help_wrapper'>
                    <p className='ourwork_help_title'></p>
                    <p className='ourwork_help_subtitle'></p>
                    <div className='ourwork_help_button'>
                        <span>Contact Us</span>
                    </div>
                    <img className='ourwork_help_img'></img>
                </div>
            </div>
        )
    }
}

export default OurWork