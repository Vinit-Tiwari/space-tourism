import React from "react";
import { ReactDOM } from "react";
import { Route } from "react-router-dom";
import Navbar from "./pages/navbar";
import Home from "./pages/home";
import { Routes } from "react-router-dom";
function Layout(){
    return(
        <>
            <Navbar/>
            
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </>
    );

}

export default Layout;