import React, { Component } from 'react'
import './card.css';
import Card from './Card';
import im1 from '../../../src/imgs/C1.jpg';
import im2 from '../../../src/imgs/C2.jpg';
import im3 from '../../../src/imgs/C3.jpg';
import Fade from 'react-reveal/Fade';
import Reveal from 'react-reveal/Reveal';

import WOW from 'wowjs';

export default class CardType extends Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <>

                <div className="top-level-module-card">
                    <div className="container ">
                        <div className="row g-3 ">  
                            <Card x={0} cover={im1} />
                            <Card x={1} cover={im2} />
                            <Card x={2} cover={im3} />
                        </div>
                    </div>
                </div>





            </>
        )
    }
}
