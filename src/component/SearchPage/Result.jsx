import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import './Search.css';
import {useNavigate} from 'react-router-dom'; 

export default function Result({ bookItem }) {

    let navi = useNavigate(); 

    function goToBookView (id){
          navi (
            {
                pathname: '/BookView',
                search : `?id=${id}`
            }
          )
    }

    return (
        <>
            <div className="container ">
                <h2 className='mt-3'>SEARCHES RESULT</h2>
                <div className="row g-1 mt-4">
                    {
                        bookItem.map((book, index) =>
                            <Fade delay={500 * index}>
                                <div key={index} className="items col-md-3">
                                    <div className="themes">
                                        <img src={book.volumeInfo.imageLinks.thumbnail
                                        ?book.volumeInfo.imageLinks.thumbnail:""
                                        } />
                                        <div className="overlay">
                                            <button
                                            onClick={
                                                function (e) {
                                                    goToBookView(book.id)
                                                }
                                            }
                                            >View Book</button>
                                        </div>
                                    </div>
                                    <div className="item-infos">
                                        <h4>{book.volumeInfo.title}</h4>
                                        <h5>{book.volumeInfo.publisher}</h5>
                                        <h6>{book.volumeInfo.publishedDate}</h6>
                                    </div>

                                </div>
                            </Fade>
                        )
                    }

                </div>
            </div>
        </>
    )
}
