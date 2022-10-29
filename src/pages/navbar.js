import React from "react";
import ReactDOM from 'react-dom/client'; 
import '../css/home.css';

function Navbar(){
    return(
        <>
            <span className="container">
                <span className="header row">
                    <span className="logo">

                    </span>

                    <span className="menu row">
                            <span className="row options selected-option">
                                <p>00</p>
                                <p>Home</p>
                            </span>

                            <span className="row options">
                                <p>01</p>
                                <p>Destination</p>
                            </span>

                            <span className="row options">
                                <p>02</p>
                                <p>Crew</p>
                            </span>

                            <span className="row options">
                                <p>03</p>
                                <p>Technology</p>
                            </span>
                    </span>
                </span>
            </span>
        </>
    );
    }

export default Navbar;