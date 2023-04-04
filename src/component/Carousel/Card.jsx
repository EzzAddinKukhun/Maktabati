import React, { Component } from 'react'
import "./card.css";
import WOW from 'wowjs';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';



export default class Card extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <>

                <div className="card-design col-md-4  ">
                    <Fade left delay={this.props.x * 1000}>
                        <img src={this.props.cover} ></img>
                    </Fade>
                    <button className='btn-card'>Show Now!</button>
                    <div className='overLay-card'>
                    </div>

                </div>


            </>
        )
    }
}
