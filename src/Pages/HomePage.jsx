// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="text-center bg-dark text-light">
                <div className="bg-dark text-light rounded shadow-lg" style={{ backgroundImage: 'url("https://c4.wallpaperflare.com/wallpaper/780/341/142/anime-sharingan-red-eyes-naruto-shippuuden-wallpaper-thumb.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h1 className="display-4 mb-4">Welcome to the Superhero Grievance Portal</h1>
                    <p className="lead mb-4">
                        Meet your superhero, dedicated to solving all your concerns and complaints. 
                        Share your grievances and watch as they take action!
                    </p>
                    <div className="d-flex justify-content-center mb-4">
                        <img 
                            src="https://img.freepik.com/premium-photo/shadow-superhero-dark-background-illustration-generative-ai_115919-7717.jpg" 
                            alt="Superhero" 
                            className="img-fluid rounded shadow-lg" 
                            style={{ maxWidth: '50%', height: 'auto' }} 
                        />
                    </div>
                    <Link to="/submit" className="btn btn-danger btn-lg">Submit a Grievance</Link>
                </div>
            </div>
       
    );
};
export default HomePage;