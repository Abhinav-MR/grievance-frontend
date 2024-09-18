// src/pages/AboutUsPage.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUsPage = () => {
    return (
        <div className="bg-light text-dark py-5" style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/780/341/142/anime-sharingan-red-eyes-naruto-shippuuden-wallpaper-thumb.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height:"100vh"}}>
            <div className="container py-5 my-5 bg-white bg-opacity-75 rounded shadow-lg">
                <h2 className="display-4 mb-4 text-center">About Our Superhero</h2>
                <p className="lead text-center">
                    Our superhero, known for their incredible powers and unwavering commitment, is here to listen and act upon your concerns. 
                    Learn about their mission, background, and their vision for a better world.
                </p>
            </div>
        </div>
    );
};

export default AboutUsPage;
