import React from 'react';
import Navbar from './components/Navbar';
import Homevideo from './components/Homevideo';
import Homecontent from './components/Homecontent';
import SlidingCards from './components/SlidingCards';
import Contact from './components/Contact';
import BottomBar from './components/BottomBar';
import OnlinePresence from './components/OnlinePresence';
import FeaturesGrid from './components/ FeaturesGrid';
import Teammember from './components/Teammember';
import Abhisek from './components/Abhisek';
import About from './components/About';
import Agency from './components/Agency';



function App() {
  return (
    <div>
      <section id='Homepage' className='h-[100vh] '>
        <Navbar/>
        <Homevideo/>
        <Homecontent/>
      </section>
      <section id='webdesign' className='h-[100vh] '>
        <OnlinePresence/>
        <FeaturesGrid/>
      </section>
      <section  id='uiux' className='h-[100vh] '>
        <SlidingCards/>
      </section>
      <section id='digitalmarketing' className='h-[70vh]  '>
        <Agency/>
      </section>
      <section id='aboutus' className='h-[33vh]  '>
        <About/>
      </section>
      <section id='caseStudy' className='h-[100vh]'>
        <Abhisek/>
       < Teammember/>
      </section>
      <section id="contact" className="h-[100vh]">
        <Contact />
      </section>
      <section id="contact" className="h-[19vh]">
        <BottomBar/>
      </section>
    </div>
  );
}

export default App;