import React, { Component } from 'react';


import '../Stylesheet/header.css';
// import Fade from 'react-reveal/Fade';
// import Roll from 'react-reveal/Roll';
import WOW from 'wowjs';
import Carousel from '../../Carousel/Carousel'; 




export default class Header extends Component {

    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
      
        return (
            <>
                <div id='slider' className="slider">
                 <Carousel/>
                    
                </div>


            </>
        )
    }
}
