import React, { Component } from 'react';
import Home from './component/HomePage/Home';
import Search from './component/SearchPage/Search';
import { Route, Routes } from 'react-router-dom';
import BookView from './component/SearchPage/BookView';
import BookDetails from './component/SearchPage/BookDetails';
import About from './component/HomePage/PageComponent/About';

export default class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='Home' element={<Home />}></Route>
                    <Route path='Search' element={<Search />}></Route>
                    <Route path='About' element={<About />}></Route>
                    <Route path='BookView' element={<BookView />}></Route>
                    <Route path='BookDetails' element={<BookDetails />}></Route>
                </Routes>
            </>
        )
    }
}
