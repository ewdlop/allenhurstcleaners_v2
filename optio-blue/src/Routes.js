// Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Sandbox from './pages/Sandbox';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                {process.env.NODE_ENV === 'development' && (
                    <>
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/sandbox" element={<Sandbox />} />
                    </>
                )}
            </Routes>
        </>
    );
};

export default AppRoutes;