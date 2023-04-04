import React, { Component } from 'react'
import im1 from '../../imgs/im1.jpg';
import im2 from '../../imgs/im2.jpg';
import im3 from '../../imgs/im3.jpg';
import "./Carousel.css";

export default class Carousel extends Component {

    render() {
        var counter = 0;
        return (
            <>
                <div className="header position-relative">
                    <div className="carousel-content">
                        <img id="im1"  className='carousel-img animated fadeIn' src={im1}></img>
                        <img id="im2"  className='carousel-img animated fadeIn' src={im2}></img>
                        <img id="im3"  className='carousel-img animated fadeIn' src={im3}></img>

                        <div id="caption_content" className="carousel-caption">
                            <div id="idc1" className="idc1">
                                <h6 className='animated bounceInLeft d-none d-md-block'>NEW ARRIVALS</h6>
                                <h1 className='animated bounceInRight'>Awesome Books</h1>
                                <p className='animated bounceInLeft   m-auto paragraph'>
                                    Try to find new books through our store, if you don't have an account 
                                    please sign up, then log in, and view awesome books, awesome time
                                </p>
                                <button className='shop-now animated bounceInRight'>Shop Now</button>
                            </div>

                            <div id="idc2" className="idc2 ">
                                <h6  className='animated fadeInUp d-none d-md-block'>NEW ARRIVALS</h6>
                                <h1  className='animated fadeInDown'>MUSICAL BOOKS</h1>
                                <p  className='animated fadeInUp paragraph'>
                                Try to find new books through our store, if you don't have an account 
                                    please sign up, then log in
                                </p>
                                <button  className='shop-now animated fadeInDown'>Shop Now</button>
                            </div>

                            <div id="idc3" className="idc3 ">
                                <h6 className='animated bounceInLeft d-none d-md-block '>NEW ARRIVALS</h6>
                                <h1  className='animated bounceInRight'>Documentary Books</h1>
                                <p  className='animated bounceInLeft '>
                                Try to find new books through our store, 
                                <br></br>
                                if you don't have an account 
                                    please sign up, then log in
                                </p>
                                <button  className='shop-now animated bounceInRight'>Shop Now</button>
                            </div>

                        </div>
                    </div>
                    <div className="next-btn position-absolute">
                        <button
                            onClick={
                                function () {
                                    var caption_container0 = document.getElementById("idc1");
                                    var caption_container1 = document.getElementById("idc2");
                                    var caption_container2 = document.getElementById("idc3");

                                    var image1 = document.getElementById("im1");
                                    var image2 = document.getElementById("im2");
                                    var image3 = document.getElementById("im3");


                                    console.log(counter);
                                    counter++;
                                    if (counter == 3) {
                                        counter = 0;
                                        caption_container0.style.display = "block"; 
                                        caption_container1.style.display = "none"; 
                                        caption_container2.style.display = "none";
                                        
                                        image1.style.display = "inline"; 
                                        image2.style.display = "none"; 
                                        image3.style.display = "none"; 

                                    }
                                    else if (counter == 0) {

                                        caption_container0.style.display = "block"; 
                                        caption_container1.style.display = "none"; 
                                        caption_container2.style.display = "none"; 
                                        image1.style.display = "inline"; 
                                        image2.style.display = "none"; 
                                        image3.style.display = "none"; 

                                    }
                                    else if (counter == 1) {

                                        caption_container0.style.display = "none"; 
                                        caption_container1.style.display = "block"; 
                                        caption_container2.style.display = "none"; 

                                        image1.style.display = "none"; 
                                        image2.style.display = "inline"; 
                                        image3.style.display = "none"; 


                                    }
                                    else if (counter == 2) {

                                        caption_container0.style.display = "none"; 
                                        caption_container1.style.display = "none"; 
                                        caption_container2.style.display = "block"; 
                                        image1.style.display = "none"; 
                                        image2.style.display = "none"; 
                                        image3.style.display = "inline"; 
                                    }
                                }
                            }
                        ><i className="fa-solid fa-chevron-right"></i></button>

                    </div>
                    <div className="prev-btn position-absolute">
                        <button><i className="fa-solid fa-chevron-left"></i></button>

                    </div>
                </div>
            </>
        )
    }
}

