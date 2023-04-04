import React, { Component } from 'react';
import Navbar from '../HomePage/PageComponent/Navbar';
import SearchHeader from './SearchHeader'; 
import Footer from '../HomePage/PageComponent/Footer';

export default class Search extends Component {
    render() {
        return (
            <>
                <Navbar />
                <SearchHeader/>
            </>
        )
    }
}
