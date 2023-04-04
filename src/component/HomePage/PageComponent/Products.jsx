import React from 'react';
import '../Stylesheet/Products.css';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';

import Book from './Book';


export default function Products() {

    return (
        <>

            <div className="products">
                <Fade delay={1000}>
                    <h2>Our Products</h2>
                </Fade>
                <Fade delay={1500}>
                    <h6>Try to view our various products, log in and buy new books from us</h6>
                </Fade>
                <div className="navs d-flex">
                    <Fade delay={2000}>
                        <button onClick={
                            function () {
                                document.getElementById("B1").style.display = "block";
                                document.getElementById("B2").style.display = "none";
                                document.getElementById("B3").style.display = "none";
                                document.getElementById("B4").style.display = "none";

                            }
                        }>Children</button></Fade>
                    <Fade delay={2500}>
                        <button onClick={
                            function () {
                                document.getElementById("B1").style.display = "none";
                                document.getElementById("B2").style.display = "block";
                                document.getElementById("B3").style.display = "none";
                                document.getElementById("B4").style.display = "none";


                            }
                        }>Programming</button></Fade>
                    <Fade delay={3000}> <button
                        onClick={
                            function () {
                                document.getElementById("B1").style.display = "none";
                                document.getElementById("B2").style.display = "none";
                                document.getElementById("B3").style.display = "block";
                                document.getElementById("B4").style.display = "none";
                            }
                        }
                    >Adventure</button></Fade>
                    <Fade delay={3500}> <button
                        onClick={
                            function () {
                                document.getElementById("B1").style.display = "none";
                                document.getElementById("B2").style.display = "none";
                                document.getElementById("B3").style.display = "none";
                                document.getElementById("B4").style.display = "block";
                            }
                        }
                    >Music</button></Fade>
                </div>


                <Fade delay={3500}>
                    <div className="contt">
                        <Fade>
                            <div id="B1" className="products-item">
                                <Book x={"children"} />
                            </div>
                        </Fade>

                        <Fade>
                            <div id="B2" className="products-item">
                                <Book x={"programming"} />
                            </div>
                        </Fade>

                        <Fade>
                            <div id="B3" className="products-item">
                                <Book x={"adventure"} />
                            </div>
                        </Fade>

                        <Fade>
                            <div id="B4" className="products-item">
                                <Book x={"music"} />
                            </div>
                        </Fade>

                    </div>

                </Fade>


            </div>
        </>
    )
}
