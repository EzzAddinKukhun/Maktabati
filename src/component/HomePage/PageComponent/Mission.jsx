import React, { Component } from 'react';
import '../Stylesheet/Mission.css';
import Fade from 'react-reveal/Fade';
import personal from '../../../imgs/personal.jpg';
import Slide from 'react-reveal/Slide';
import Banner1 from '../../../imgs/Banner.jpg';
import Banner2 from '../../../imgs/Banner-2.jpg';



export default class Mission extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="mission d-flex " >
                        <div className="mission-img ">
                            <Slide left delay={1000}>
                                <div className="circular-photo mt-5 ">
                                    <img className='profilePic' src={personal}></img>
                                </div>
                            </Slide>
                            <Fade left delay={1500}>
                                <div className="info text-center">
                                    <h2>Ezz Addin H. Kukhun</h2>
                                    <h5>Website Admin</h5>
                                </div>
                            </Fade>
                        </div>

                        <div className="mission-text">
                            <Fade right delay={2000}>
                                <h2>About Us</h2>
                            </Fade>
                            <Fade right delay={2500}>
                                {/* <p>'We aim to sell the large amount of books in order to increase the level
                                    of culture between the people, because it has a low level between people
                                    nowadays, so if you interest in reading different types of books or stories
                                    , register in our website, and then log in to it, we hope that you will have
                                    awesome time with our books.' */}
                                    <p>
                                        'We started in small team for collection the electronic editions
                                        of some books inorder to create an electronic library to encourgae the users
                                        on reading books even in electronic form, so if you enter to our website, we can Search
                                        about any book, then you can view the book and its details, we hope that you will 
                                        find an awesome time with us ..  
                                        '
                                </p>
                                <h6><i>Ezz Addin H. Kukhun</i></h6>
                            </Fade>

                        </div>
                    </div>
                </div>

                {/* <div className="container sell">
                    <Fade>
                        <h2>Our Sales</h2>
                    </Fade>
                    <div className="row g-4 justify-content-between">
                        <Fade Right>
                            <div className="cimg1 col-md-6">
                                <img className='img1' src={Banner1}></img>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className=" cimg2 col-md-6">
                                <img className='img2' src={Banner2}></img>
                            </div>
                        </Fade>
                    </div>

                </div> */}
            </>

        )
    }
}
