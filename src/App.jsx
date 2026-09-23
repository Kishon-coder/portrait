import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Categories from './components/Categories.jsx';
import Gallery from './components/Gallery.jsx';
import Services from './components/Services.jsx';
import Process from './components/Process.jsx';
import Stats from './components/Stats.jsx';
import WhatsAppCTA from './components/WhatsAppCTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <div className="grain-overlay bg-grain" />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Categories />
            <Gallery />
            <Services />
            <Process />
            <Stats />
            <WhatsAppCTA />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}