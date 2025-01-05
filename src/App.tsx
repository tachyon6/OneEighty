import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Safety from "./components/Safety";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-rose-50 to-white'>
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <FAQ />
            <Safety />
            <CTA />
            <Footer />
        </div>
    );
}

export default App;
