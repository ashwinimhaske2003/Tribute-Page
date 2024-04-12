import React from 'react';
import "./app.css";

import firstImg from "../../Assets/ronaldo-1.jpg";
import secondImg from "../../Assets/ronaldo-2.jpg";
import thirdImg from "../../Assets/ronaldo-3.jpg";
import forthImg from "../../Assets/ronaldo-4.jpg";
import fifthImg from "../../Assets/ronaldo-5.jpg";
import sixthImg from "../../Assets/ronaldo-6.jpg";
import seventhImg from "../../Assets/ronaldo-7.jpg"; // Add this import
import eighthImg from "../../Assets/ronaldo-8.jpeg"; // Add this import
import ninthImg from "../../Assets/ronaldo-9.jpg"; // Add this import
import tenthImg from "../../Assets/ronaldo-10.jpg"; // Add this import



function PictureSection() {
    return (
        <div className='PictureSection' id="pictures">
            <h2 className='h2OfPictureSection'>Pictures:</h2>
            <div className="picturesDiv">
                <img src={firstImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" />
                <img src={secondImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" />
                <img src={thirdImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" />
                <img src={forthImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" />
                <img src={fifthImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" />
                <img src={sixthImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" />
                <img src={seventhImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" /> {/* Add this line */}
                <img src={eighthImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" /> {/* Add this line */}
                <img src={ninthImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" /> {/* Add this line */}
                <img src={tenthImg} className='imgOfRonaldo mx-4 my-3' alt="Ronaldo Img" /> {/* Add this line */}
                
            </div>
            <a className='showMoreBtn px-5 py-2 mt-5' target='blank' href="https://www.pinterest.com/search/pins/?q=ronaldo">Show More</a>
        </div>
    );
}

export default PictureSection;