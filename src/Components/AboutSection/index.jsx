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
            </div><br></br>
            <section class="timeline" id="life-info">
            <h2>Timeline of Ronaldo's life</h2>
            <ul>
                <li><strong> 1985</strong>: Cristiano Ronaldo dos Santos Aveiro is born on February 5, in Funchal, Madeira, Portugal.</li>
                <li><strong>1997</strong>: Joins the youth academy of Sporting Lisbon at the age of 12.</li>
                <li><strong>2002</strong>: Makes his professional debut for Sporting Lisbon at the age of 17.</li>
                <li><strong>2003</strong>: Signed by Manchester United for £12.24 million, becoming the most expensive teenager in English football history at the time.</li>
                <li><strong>2004</strong>: Scores his first goal for Portugal in a friendly match against Greece.</li>
                <li><strong>2006</strong>: Helps Portugal reach the final of the FIFA World Cup, finishing as runners-up.</li>
                <li><strong>2008</strong>: Wins the UEFA Champions League with Manchester United, scoring in the final against Chelsea.</li>
                <li><strong>2009</strong>: Transfers to Real Madrid for a then-world record transfer fee of £80 million..</li>
                <li><strong>2010</strong>: Wins his first Ballon d'Or award, given to the world's best player.</li>
                <li><strong>2016</strong>: Leads Portugal to victory in the UEFA European Championship, Portugal's first major international trophy.</li>
                 
                <li><strong>2018</strong> Moves to Juventus from Real Madrid for €100 million, becoming one of the highest-paid athletes in the world..</li>
                 <li><strong>2021</strong>Becomes the all-time leading goal scorer in men's international football.</li>
            </ul>
        </section>

            
                
           
        </div>
    )
}

export default AboutSection;

