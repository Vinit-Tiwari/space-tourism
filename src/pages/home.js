import React from "react";
import ReactDOM from 'react-dom/client'; 
import '../css/home.css';
import Navbar from "./navbar";

function Home(){
    return(
        <>
            <span>
                <span className="data row">
                    <span className="column">
                        <p>So, you want to travel to</p>

                        <p>Space</p>

                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!</p>
                    </span>
                
                    <span>
                        <p>Explore</p>
                    </span>
                </span>
            </span>
        </>
    );
}

export default Home;