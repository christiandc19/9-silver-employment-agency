import React from 'react'

// import Hero2 from './components/hero/Hero2';
// import BasicSlider from './components/basicSlider/BasicSlider'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Hero from './components/hero/hero';

function App() {
  return (
    <>
      <Navbar />
      {/* <BasicSlider /> */}
      <Hero />
      <Home />
      <Footer />
    </>
  );
}

export default App;

