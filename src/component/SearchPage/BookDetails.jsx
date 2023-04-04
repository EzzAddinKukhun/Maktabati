import React from 'react';
import Navbar from '../HomePage/PageComponent/Navbar';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import bookview from '../../imgs/bookview.jpg'; 
import './headers.css'; 

export default function BookDetails({x}) {
   
    console.log(x); 
    return (
        <>
            <div className="container d-flex">
                <div className="book-img w-25">
                    <div className="book-thumbnail">
                        <img className='thumb'  src={x.volumeInfo.imageLinks.thumbnail}></img>
                    </div>
                    <div className="small-info-book text-center">

                    </div>

                </div>
                <div className="book-att w-75 ">

                </div>
            </div>
        </>
    )
}
