import React from 'react';
import Navbar from "../Components/navBar";
import "../Styles/landingPage.css"
import gym from "../assets/gym.jpg"
import { Link } from 'react-router-dom';


const Gallery = () => {
    const images = [
        gym,
        gym,
        gym,
        gym,
        gym,
        gym,
        gym,
        gym
    ];

    return (  
    <div>
        <div className="banner">
            <Navbar /> 
            <div className="text">
                <h1>Gallery</h1>
            </div>  
        </div>
        
        <div className="gallery-grid">
            {images.map((image, index) => (
                <div key={index} className="gallery-item">
                    <img src={image} alt={`Gallery ${index}`} />
                </div>
            ))}
        </div>
    </div>);
}

export default Gallery;
