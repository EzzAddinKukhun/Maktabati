import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import '../Stylesheet/Products.css';
import axios from 'axios';
import test from '../../../imgs/test.jpg';
import Fade from 'react-reveal/Fade';


export default function Book({ x }) {
    let [bookItem, setBookItem] = useState([]);

    async function getBookItems() {
        let { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${x}&key=AIzaSyAWU6ZLZ7MM1y0Yum5Dmb3OJd_jN4exScs`);
        setBookItem(data.items);
    }

    // here when the array brackets are blanks, it represents the componentDidMount
    // we can use useEffect for three functions (Mount,DidMount,Unmount)
    useEffect(() => {
        getBookItems();
    }, []);

    return (
        <>
            <div className="container-products">
                <div className=" row g-1  justify-content-around">

                    {   
                                  
                        bookItem.map((book,index) =>
                         index<8? 
                            <Fade delay={(500*index)}>       
                            <div key={index} className="item col-md-3">
                                <div className="theme">
                                    <img src={book.volumeInfo.imageLinks.thumbnail}/> 
                                </div>
                                <div className="item-info">
                                    <h4>{book.volumeInfo.title}</h4>
                                    <h5>{book.volumeInfo.publisher}</h5>
                                    <h6>{book.volumeInfo.publishedDate}</h6>
                                </div>
                            </div>
                            </Fade>   
                        :'')
                    }








                </div>
            </div>
        </>
    )
}
