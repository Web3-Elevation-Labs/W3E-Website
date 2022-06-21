import React, { Component } from 'react';
import './Faq.css';

class Faq extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selected: 'none'
        }
    }
    
    toggleSelected(id) {
        if (this.state.selected === id) {
            this.setState({selected: 'none'});
        } else {
            this.setState({selected: id})
        }
    }

    isSelected(id) {
        if (this.state.selected === id) {
            return 'faq_question_answer_active'
        } else {
            return 'faq_question_answer';
        }
    }

    isSelectedSquare(id) {
        if (this.state.selected === id) {
            return 'faq_question_selection_active'
        } else {
            return 'faq_question_selection';
        }
    }

    render() {
        return (
            <div className='faq' id="faq">
                <h1 className='faq_title'>FAQ</h1>
                <div className='faq_questions_wrapper'>
                <div className='faq_question'>
                        <h1 onClick={() => {this.toggleSelected(0)}} className='faq_question_title'>WHAT IS THE POPULATION OF THUGCITY?</h1>
                        <img alt="" onClick={() => {this.toggleSelected(0)}} className={this.isSelectedSquare(0)} src="./purple-rectangle.png"/>
                        <p className={this.isSelected(0)}>10,000. 90% of the population consists of Thugs, and 10% Cops.</p>
                    </div>
                    <div className='faq_question_divider'></div>
                    <div className='faq_question'>
                        <h1 onClick={() => {this.toggleSelected(1)}} className='faq_question_title'>HOW CAN I GET ON THE WHITELIST?</h1>
                        <img alt="" onClick={() => {this.toggleSelected(1)}} className={this.isSelectedSquare(1)} src="./purple-rectangle.png"/>
                        <p className={this.isSelected(1)}>We will be rewarding 2000 whitelist spots to members with the most contribution and dedication in the community, through weekly giveaways, contests and much more. Join the discord and keep an eye out!</p>
                    </div>
                    <div className='faq_question_divider'></div>
                    <div className='faq_question'>
                        <h1 onClick={() => {this.toggleSelected(2)}} className='faq_question_title'>WHEN IS THE RELEASE DATE?</h1>
                        <img alt="" onClick={() => {this.toggleSelected(2)}} className={this.isSelectedSquare(2)} src="./purple-rectangle.png"/>
                        <p className={this.isSelected(2)}>We are on track to publicly release in the middle to end of July. Whitelist release will occur in the days leading up. Reveal will happen a couple days after release, followed by the game within the same week.</p>
                    </div>
                    <div className='faq_question_divider'></div>
                    <div className='faq_question'>
                        <h1 onClick={() => {this.toggleSelected(3)}} className='faq_question_title'>WHAT IS THE MINT COST FOR NFTS?</h1>
                        <img alt="" onClick={() => {this.toggleSelected(3)}} className={this.isSelectedSquare(3)} src="./purple-rectangle.png"/>
                        <p className={this.isSelected(3)}>Mint price will be released at a date closer to release.</p>
                    </div>
                    
                    <div className='faq_question_divider'></div>
                    <div className='faq_question'>
                        <h1 onClick={() => {this.toggleSelected(5)}} className='faq_question_title'>HOW IS EACH NFT CREATED?</h1>
                        <img alt="" onClick={() => {this.toggleSelected(5)}} className={this.isSelectedSquare(5)} src="./purple-rectangle.png"/>
                        <p className={this.isSelected(5)}>Every characters DNA is uniquely and randomly generated through an algorithm combining a variety of properties including their shirt, hair, background, eyes, face, glasses, hat, chain and more.</p>
                    </div>
                    <div className='faq_question_divider'></div>
                    <div className='faq_question'>
                        <h1 onClick={() => {this.toggleSelected(6)}} className='faq_question_title'>HOW CAN I APPLY TO JOIN THE THUGCITY TEAM?</h1>
                        <img alt="" onClick={() => {this.toggleSelected(6)}} className={this.isSelectedSquare(6)} src="./purple-rectangle.png"/>
                        <p className={this.isSelected(6)}>We will be hiring a couple of positions nearing the second half of 2022 and will always give the community a chance before we share job listings with the public. More info will be announced in the near future.</p>
                    </div>
                    <div className='faq_question_divider'></div>
                </div>
            </div>
        );
    }
}

export default Faq;