import React from 'react';
import Navbar from '../HomePage/PageComponent/Navbar';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import bookview from '../../imgs/bookview.jpg';
import './headers.css';
import BookDetails from './BookDetails';
import Fade from 'react-reveal/Fade';
import Scroll from '../HomePage/PageComponent/Scroll';
import Footer from '../HomePage/PageComponent/Footer';


export default function BookView() {
    let [searchParams, setSearchParams] = useSearchParams();
    let [dataArrive, setDataArrive] = useState(false);
    let curr_id = searchParams.get('id');
    let [bookElement, setBookElement] = useState([]);

    async function getBookElement() {
        let { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes/${curr_id}?key=AIzaSyAWU6ZLZ7MM1y0Yum5Dmb3OJd_jN4exScs`);
        setDataArrive(true);
        console.log(data)
        setBookElement(data);

        // THE VALUE OF THE HOOK WILL ASSIGN AFTER THE END OF THE USEEFFECT HOOK 

    }

    useEffect(() => {
        getBookElement();
    }, []);

    return (
        dataArrive ?
            <>

                <Navbar />
                <Scroll/>
                <Fade>
                    <div className="headerb d-flex justify-content-center align-items-center">
                        <Fade delay={700}>
                            <div className="bookname text-light">
                                <h2 className='bookname'>{bookElement.volumeInfo.title}</h2>
                                <h2>{bookElement.volumeInfo.subtitle}</h2>
                            </div>
                        </Fade>

                    </div>
                </Fade>

                <div className="container d-flex">
                    <div className="book-img ">
                        <Fade delay={1000}>
                        <div className="book-thumbnail">
                            <img className='thumb' src={bookElement.volumeInfo.imageLinks.thumbnail}  ></img>
                        </div>
                        </Fade>
                        <Fade delay={1000}>
                        <div className="small-info-book text-center mt-3">
                            <h6>Pages Number: {bookElement.volumeInfo.pageCount}</h6>
                        </div>
                        </Fade>
                        <Fade delay={1000}>
                        <a className='downlaod-book' href={bookElement.volumeInfo.previewLink}>
                            Google Library
                        </a>
                        </Fade>

                    </div>
                    <div className="book-att   ">
                        <table class="table  table-hover">

                            <Fade delay={1000}>

                                <tr >
                                    <td>Authors</td>
                                    <td>{bookElement.volumeInfo.authors}</td>

                                </tr>
                            </Fade>

                            <Fade delay={1700}>
                                <tr>
                                    <td>Publisher</td>
                                    <td>{bookElement.volumeInfo.publisher}</td>
                                </tr>
                            </Fade>


                            <Fade delay={2400}>
                                <tr>
                                    <td>Publish Date</td>
                                    <td>{bookElement.volumeInfo.publishedDate}</td>
                                </tr>
                            </Fade>


                            <Fade delay={3100}>
                                <tr>
                                    <td>Language</td>
                                    <td>{bookElement.volumeInfo.language}</td>
                                </tr>
                            </Fade>


                            <Fade delay={3800}>
                                <tr>
                                    <td>Content Version</td>
                                    <td>{bookElement.volumeInfo.contentVersion}</td>

                                </tr>
                            </Fade>


                            <Fade delay={4500}>
                                <tr>
                                    <td>Description</td>
                                    <td className='desc'>{bookElement.volumeInfo.description}</td>
                                </tr>
                            </Fade>

                        </table>

                    </div>
                </div>
                <Footer/>
            </> : ""
    )
}
