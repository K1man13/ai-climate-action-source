import { useEffect } from 'react';
import './App.css';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import Hero from './components/sections/Hero';
import AboutSDG from './components/sections/AboutSDG';
import AIApplications from './components/sections/AIApplications';
import EnergyOptimization from './components/sections/EnergyOptimization';
import WeatherPrediction from './components/sections/WeatherPrediction';
import RenewableEnergy from './components/sections/RenewableEnergy';
import Resources from './components/sections/Resources';
import Contact from './components/sections/Contact';

function App() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <AboutSDG />
        <AIApplications />
        <EnergyOptimization />
        <WeatherPrediction />
        <RenewableEnergy />
        <Resources />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

