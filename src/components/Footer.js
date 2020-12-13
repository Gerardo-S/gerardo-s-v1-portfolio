import React from "react";
import "../styles/Footer.css"
function Portfolio() {
    return (
        <div className="row ">
            <footer className="bg-dark fixed-bottom col-lg-12 iconPosition ">

                <a href="https://github.com/" className="active text-light fa fa-github largeFont"  rel="noreferrer" target="_blank"> <span>
                    |</span></a> <span></span>


                <a href="https://www.linkedin.com/in/gerardo-a-solis/" className="active text=light fa fa-linkedin"
                    rel="noreferrer" target="_blank"> <span className="bg-dark"> | </span> </a> <span></span>

                <a href="https://stackoverflow.com/users/14185229/gerardo-solis"
                    className="active text=light fa fa-stack-overflow" rel="noreferrer" target="_blank"> <span> 
                |</span></a>

           </footer>
        </div>
    )
};

export default Portfolio;