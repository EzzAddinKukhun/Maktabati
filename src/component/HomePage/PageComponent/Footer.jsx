import React, { Component } from 'react';
import mak from "../../../imgs/Maktabati.png";
import '../Stylesheet/footer.css';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';


export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="container footer">
                    <div className="top-content d-flex">
                        <Fade left>
                            <div className="right-side">
                                <div className="logo-footer">
                                    <img src={mak}></img>
                                </div>
                                <div className="address">
                                    <p>if you need any help, don't hesitate try to contact with our team</p>
                                    <p>Address: Palestine/ Nablus / Aseera Street</p>
                                    <p>Phone: +970 599836899</p>
                                    <p>Email: ezkukhun2000@gmail.com</p>

                                </div>
                            </div>
                        </Fade>

                        <div className="left-side d-flex justify-content-between ">
                            <Fade right>
                                <div className="business-hours d-flex flex-column text-left">
                                    <h4  >Business Hours</h4>
                                    <h6 className='text-secondary'>Mon - Fri: 8AM - 10PM</h6>
                                    <h6 className='text-secondary'>Sat: 9AM-8PM</h6>
                                    <h6 className='text-secondary'>Sun: Closed</h6>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="footer-menu">
                                    <h4 >Footer Menu</h4>
                                    <h6 className='text-secondary'>Home</h6>
                                    <h6 className='text-secondary'>Shop</h6>
                                    <h6 className='text-secondary'>Blog</h6>
                                    <h6 className='text-secondary'>About</h6>
                                    <h6 className='text-secondary'>Contact</h6>
                                </div>
                            </Fade>

                            <Fade right>
                                <div className="extras-menu">
                                    <h4 >Extras Menu</h4>
                                    <h6 className='text-secondary'>About US</h6>
                                    <h6 className='text-secondary'>Our Office</h6>
                                    <h6 className='text-secondary'>Delivery</h6>
                                    <h6 className='text-secondary'>Guarantee</h6>
                                    <h6 className='text-secondary'>Our Store</h6>
                                </div>
                            </Fade>

                        </div>

                    </div>
                    <div className="bottom-content d-flex justify-content-between ">
                        <div className="copy-right">
                            <h6>Copyright & Copy Susan All Rights Reserved</h6>

                        </div>
                        <div className="social-media">
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-google"></i>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}
