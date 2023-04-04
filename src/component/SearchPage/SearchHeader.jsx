import React, { Component } from 'react';
import { useState } from 'react';
import './headers.css';
import Result from './Result';
import axios from 'axios';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Footer from '../HomePage/PageComponent/Footer';



export default function SearchHeader() {
    let [key, setKeyValue] = useState("");
    let [bookItem, setBookItem] = useState([]);
    let [localStorageItems, setLocalStorageItems] = useState (""); 

    let search = async (e) => {
        console.log(key);
        if (e.key === "Enter") {
            let { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${key}&key=AIzaSyAWU6ZLZ7MM1y0Yum5Dmb3OJd_jN4exScs`);
            let stringofObj = JSON.stringify(data);
            setLocalStorageItems(stringofObj);
            console.log(localStorageItems);  
            setBookItem(data.items);
            console.log(data.items);
        }
    }

    return (
        <>
            <Fade>
                <div id="hh" className="headers position-relative">

                    <div id="searchfield" className="input-group mb-3 position-absolute">
                        <input
                            onChange={(e) => setKeyValue(e.target.value)}
                            onKeyUp={search}
                            id="search" type="text" className="form-control" placeholder="Enter Book Name" aria-label="Book Name" aria-describedby="button-addon2"></input>
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </div>
            </Fade>

            <div id="bigContainer" className="big-cont">
                {
                    <Result bookItem={bookItem} />
                }

            </div>
           

        </>
    )
}
