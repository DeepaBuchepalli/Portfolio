import React from 'react';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Education from './components/education/Education';
import Projects from './components/Projects/Project';
import Achievements from './components/Achievements/Achievements'

const App = () => {
  return (
    <>
        <Header />
        <Intro />
        <Experience />
        <Education />
        <Projects/>
        <Achievements/>
        <Contact />
        <Footer />

    </>
  );
};

export default App;
