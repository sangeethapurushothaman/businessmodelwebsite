import React from 'react';
import HeroSection from '../components/Home';
import About from "../components/About"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import Contact from "../components/contact"
const Singlepage = () => {
    return (
        <main>
            <HeroSection />
            <About/>
            <Services/>
            <WhyChooseUs/>
            <Testimonials/>
            <Contact/>
        </main>
    );
};

export default Singlepage;