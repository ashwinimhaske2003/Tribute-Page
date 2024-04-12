import React from 'react';
import "./app.css"

function HeroSection() {

    return (
        <div className='mb-5 mt-1'>
            <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade border rounded p-3" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://assets.goal.com/images/v3/blt846618a81c710bb0/Cristiano-Ronaldo.jpeg?auto=webp&format=pjpg&width=3840&quality=60" className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2018%2F0320%2Fr344016_1296x729_16%2D9.jpg" className="d-block w-100 img-fluid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://staticg.sportskeeda.com/Football+wallpapers/CR7/cr7.jpg" className="d-block w-100 img-fluid" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default HeroSection;
