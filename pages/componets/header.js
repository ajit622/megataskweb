import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Link from 'next/link';
const Header = () => {
    return (
        <>
            <header>
                <div className="header-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 right_info">
                                <p>
                                    <i className="fa fa-map-marker" /> 10 Praed Street / Abc road Xyz
                                </p>
                            </div>
                            <div className="col-md-7 col-sm-12 left_info">
                                <ul>
                                    <li>
                                        <i className="fa fa-mobile-alt" />
                                        <a href="#">+123456789 0987</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <a href="#">Testexample@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-main">
                    <div className="container">
                        <nav id="cssmenu">
                            <div className="logo">
                                <a href="https://codepen.io/anupkumar92/">
                                    <img src="https://i.ibb.co/QDy827D/ak-logo.png" />
                                </a>
                            </div>
                            <div id="head-mobile" />
                            <div className="button" />
                            <ul>
                                <li className="active">
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                    <ul>
                                        <li>
                                            <a href="#">Services 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Services 2</a>
                                            <ul>
                                                <li>
                                                    <a href="#">Services 21</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Services 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Services 4</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                                <li>
                                    <a href="#">Special Offers</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                                <li>
                                    <a href="#">Book Online</a>
                                </li>
                                <li>
                                    <Link href={'/login'} title='Login'>   
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header