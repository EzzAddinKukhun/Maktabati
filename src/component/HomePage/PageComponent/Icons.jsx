import React, { Component } from 'react';
import icon1 from '../../../imgs/icon1.jpg';
import icon2 from '../../../imgs/icon2.jpg'
import icon3 from '../../../imgs/icon3.jpg'
import Fade from 'react-reveal/Fade';
import blog1 from '../../../imgs/blog1.jpg';
import blog2 from '../../../imgs/blog2.jpg'
import blog3 from '../../../imgs/blog3.jpg';
import "../Stylesheet/icon.css";


export default class Icons extends Component {
    render() {
        return (
            <>
                <div className="container mt-5 mb-5">
                    <Fade delay={1000}>
                        <h2>Our Services </h2>
                    </Fade>
                    <div className="row">
                        <Fade delay={1500}>
                            <div className="col-md-4 text-center p-4">
                                <img className='mt-4' src={icon1}></img>
                                <div className="icon-info p-4 ">
                                    <h5 className='mb-3'>FREE SHIPPING WORLDWIDE</h5>
                                    <p>We offer free shipping via Standard Shipping on orders over $200.00</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={2000}>
                            <div className="col-md-4 text-center p-4">
                                <img className='mt-4' src={icon2}></img>
                                <div className="icon-info p-4 ">
                                    <h5 className='mb-3'>FREE SHIPPING WORLDWIDE</h5>
                                    <p>We offer free shipping via Standard Shipping on orders over $200.00</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={2500}>
                            <div className="col-md-4 text-center p-4">
                                <img className='mt-4' src={icon3}></img>
                                <div className="icon-info p-4 ">
                                    <h5 className='mb-3'>FREE SHIPPING WORLDWIDE</h5>
                                    <p>We offer free shipping via Standard Shipping on orders over $200.00</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                <div className="container mt-5 mb-5">
                    <Fade delay={1000}>
                        <h2>Latest Blog</h2>
                    </Fade>
                    <div className="row">
                        <Fade delay={2000}>
                            <div className="col-md-4 overflow-hidden  ">
                                <img className='blog-img mt-4' src={blog1}></img>
                                <div className="icon-info p-1 mt-2 ">
                                    <h5 className='blog-title mb-3'>Reading has a siginficant info number of benefits</h5>
                                    <h6 className='author'>by: Ezz Addin Kukhun</h6>
                                    <p className='start-blog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis adipisci tempore recusandae eos debitis!</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={2500}>
                            <div className="col-md-4 text-center overflow-hidden ">
                                <img className='blog-img mt-4' src={blog2}></img>
                                <div className="icon-info p-1 mt-2 ">
                                    <h5 className='blog-title mb-3'>Reading has a siginficant info number of benefits</h5>
                                    <h6 className='author'>by: Ezz Addin Kukhun</h6>
                                    <p className='start-blog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis adipisci tempore recusandae eos debitis!</p>
                                </div>
                            </div>
                        </Fade>
                        <Fade delay={3000}>
                            <div className="col-md-4 text-center p-4 overflow-hidden ">
                                <img className='blog-img mt-2' src={blog3}></img>
                                <div className="icon-info p-1 mt-2 ">
                                    <h5 className='blog-title mb-3'>Reading has a siginficant info number of benefits</h5>
                                    <h6 className='author'>by: Ezz Addin Kukhun</h6>
                                    <p className='start-blog'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero officiis adipisci tempore recusandae eos debitis!</p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </>
        )
    }
}
