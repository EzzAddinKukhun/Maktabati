import React, { Component } from 'react';
import Maktabati from '../../../imgs/Maktabati.png';
import '../Stylesheet/Navbar.css';
import {Link} from 'react-router-dom'; 
import { useState } from 'react';


export default function Navbar() {
  let [boolVal,setBackground] = useState(false); 

  const changeBackground = () =>{
    if (window.scrollY >= 50){
      setBackground(true); 
    } 
    else{
      setBackground(false); 
    }
  }

  window.addEventListener('scroll', changeBackground); 
  return (
    <>
        <div  id="navBar" className={boolVal? 'nav-active animated  fadeInDown nav-bar position-fixed w-100 pt-3':'animated  fadeInDown nav-bar position-fixed w-100 pt-3'}>
          <div className="container header-display">
            <img className='logo-img' src={Maktabati}></img>
            <div className="navigations">
              <Link to="/">Home</Link>
              <Link to="About">About</Link>
              <Link to="/">Contact</Link>
              <Link className='nav-link' to="Search">SEARCH</Link>

              
            </div>
           

          </div>
        </div>
    
      </>
  )
}
