// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import GrievanceForm from './Pages/GrievanceForm';
import Navbar from './Navbar';



function App() {
    return (
      <Router>
      <Navbar/>
      <div>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/submit" element={<GrievanceForm />} />
          </Routes>
      </div>
  </Router>
    );
}

export default App;
