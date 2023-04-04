import React, { Component } from 'react';
import Navbar from './Navbar';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import bookview from '../../../imgs/bookview.jpg';
import '../../SearchPage/headers.css';
import Fade from 'react-reveal/Fade';
import Scroll from './Scroll';
import background from '../../../imgs/bookview2.jpg';
import background2 from '../../../imgs/about.jpg';
import '../Stylesheet/about.css';
import Footer from './Footer';
import Zoom from 'react-reveal/Zoom';




export default class About extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Scroll />

                <Fade>
                    <div className="headerb d-flex justify-content-center align-items-center">
                        <Fade delay={700}>
                            <div className="bookname text-light">
                                <h2 className='bookname'>About Us</h2>
                                <h2>Simple overview about our library</h2>
                            </div>

                        </Fade>

                    </div>
                </Fade>

                <div className="container mt-5">
                    <div className="row ">
                        <Zoom delay={1500} left>
                            <div className="aboutthumb col-md-6 ">
                                <img src={background2}></img>

                            </div>
                        </Zoom>

                        <Zoom delay={1500} right>
                            <div className="about-para col-md-6 ">
                                <h1>WELCOME TO <span>MAKTABATI</span></h1>
                                <p className='about-paragraph-1 mt-4'>Our library consists of many of books in different fields,
                                    we collected available books in this website, so the user
                                    can search on any book he like it, and then he can view
                                    it in one click. We have to get more and more of various types of books
                                    to make it available to users, and to make them feel comfortably
                                </p>
                                <h3 className='mt-4'>WIN BEST ONLINE SHOP AT 2022</h3>
                                <p className='about-paragraph-1 mt-4'>
                                    We have to make a good trust with our customers, and make our prices suit to
                                    all customers, so we won as the best online shop at this year 2022.
                                </p>

                            </div>
                        </Zoom>
                    </div>


                </div>


                <div className="container cont-time">
                    <div className="time-line position-relative">
                        <Fade>
                            <span className='line'></span>
                        </Fade>


                        <div className="line-circle-1"></div>
                        <div className="line-circle-2"></div>
                        <div className="line-circle-3"></div>
                        <div className="line-circle-4"></div>

                        <Fade left delay={500} >
                            <div className="line-div-1">
                                <h3>Our Mission</h3>
                                <p className='our-time-line'>
                                    Encourage the people on reading books more and more
                                    in easy way, so they may like the reading, and require
                                    the books more and more.
                                </p>

                            </div>
                        </Fade>

                        <Fade right delay={700}>
                            <div className="line-div-2">
                                <h3>Our Vision</h3>
                                <p className='our-time-line'>
                                    We have to make us in the head with our competitors, especially
                                    in bring new books, and sell them to the customers in low cost
                                    as much as possible.
                                </p>

                            </div>
                        </Fade>

                        <Fade left delay={900}>
                            <div className="line-div-3">
                                <h3>Our Message</h3>
                                <p className='our-time-line'>
                                    The reading is the mosth thing that will make the person more attractive
                                    and cultured, so when the person read various books, he will have a wide knowledge
                                    in his life.
                                </p>
                            </div>
                        </Fade>

                        <Fade right delay={1100}>
                            <div className="line-div-4">
                                <h3>Our Goal</h3>
                                <p className='our-time-line'>
                                    We aim to build a wide base of customers from different cultures and countries,
                                    and bring new books continuously, so we will build a good relations with our customers.
                                </p>
                            </div>
                        </Fade>


                    </div>
                </div>



                <Footer />
            </>
        )
    }
}
