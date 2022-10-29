import React from "react";
import ReactDOM from 'react-dom/client'; 
import { Link } from "react-router-dom";
import '../css/home.css';

function Navbar(){
    return(
        <>
            <span className="container">
                <span className="header row">
                    <span className="logo">

                    </span>

                    <span className="menu row">
                        <Link to={'/'}>
                            <span className="row options selected-option">
                                <p>00</p>
                                <p>Home</p>
                            </span>
                        </Link>

                        <Link to={'destination'}>
                            <span className="row options">
                                <p>01</p>
                                <p>Destination</p>
                            </span>
                        </Link>

                        <Link to={'crew'}>
                            <span className="row options">
                                <p>02</p>
                                <p>Crew</p>
                            </span>
                        </Link>

                        <Link to={'technology'}>
                            <span className="row options">
                                <p>03</p>
                                <p>Technology</p>
                            </span>
                        </Link>
                    </span>
                </span>
            </span>
        </>
    );
    }

export default Navbar;