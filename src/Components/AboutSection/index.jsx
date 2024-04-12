import React from 'react';
import "./app.css";

function AboutSection() {
    return (
        <div className='AboutSection mt-5' id='about'>
            <h2>About Ronaldo:</h2><br></br>
            <div className='image' id='image'>
                <div className="img-container">
                    <img src="https://cdn.pixabay.com/photo/2023/04/05/20/07/player-7902240_640.jpg" alt="" />
                </div>
                <div className="img-overlay"></div>
                <div className="info-container">
                    <h1>Cristiano Ronaldo</h1>
                    
                    <p>A name that instills fear in the hearts of defenders and goalkeepers alike. The ultimate goal machine, Ronaldo has been breaking records and making history ever since he stepped onto the pitch.</p>
                </div>
            </div>
            <br></br><br></br>
            <h3>Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al Nassr and the Portugal national team.</h3>
            <br></br>
            <div className="subAbout mt-5">
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Born:</span>
                    <span className='SecondSubLineOfSA'>February 5, 1985 (age 39 years), Hospital Dr. Nélio Mendonça, Funchal, Portugal.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Current teams:</span>
                    <span className='SecondSubLineOfSA'>Al-Nassr FC (#7 / Forward), Portugal national football team (#7 / Forward).</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Children:</span>
                    <span className='SecondSubLineOfSA'>Angel dos Santos Aveiro.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Height:</span>
                    <span className='SecondSubLineOfSA'>1.87 m.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Parents:</span>
                    <span className='SecondSubLineOfSA'>José Dinis Aveiro, Maria Dolores dos Santos Viveiros da Aveiro.</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Salary:</span>
                    <span className='SecondSubLineOfSA'>200 million EUR (2024).</span>
                </div>
                <div className="subLineOfSubAbout">
                    <span className='FirstSubLineOfSA'>Partner:</span>
                    <span className='SecondSubLineOfSA'>Georgina Rodríguez (2016-ongoing).</span>
                </div>
            </div>

            
                
           
        </div>
    )
}

export default AboutSection;
