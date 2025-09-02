import React from 'react';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import About from './components/About';
import Services from './components/Services';
import LeadGeneration from './components/LeadGeneration';
import Development from './components/Development';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <LeadGeneration />
      <Development />
      <Testimonials />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;