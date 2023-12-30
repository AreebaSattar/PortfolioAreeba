import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Education from './Education'; // Import Education component
import Skills from './Skills'; // Import Skills component
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Education /> {/* Add Education component */}
      <Skills /> {/* Add Skills component */}
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
