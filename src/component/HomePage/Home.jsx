import React, { Component } from 'react';
import Navbar from './PageComponent/Navbar';
import Header from './PageComponent/Header';
import CardType from '../Carousel/CardType';
import Products from './PageComponent/Products';
import Mission from './PageComponent/Mission';
import Scroll from './PageComponent/Scroll';
import Icons from './PageComponent/Icons';
import Footer from './PageComponent/Footer';

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Header />
        <Mission />
        <CardType />
        <Products />
        <Icons />
        <Scroll />
        <Footer />
      </>
    )
  }
}
