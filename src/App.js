import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing the different page js files
import Home from './pages/Home';
import ProjectGallery from './pages/Project Gallery/index';
import Contact from './pages/Contact/index';

// importing the different component js files
import Body from './components/Main/index';
import Header from './components/Header/Header';
import Footer from './components/Footer/index';

function App() {
  return (
    <Router>
        <Header />
        <Body >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ProjectGallery" element={<ProjectGallery />} />
            <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </Body >
        <Footer />
    </Router >
  );
}

export default App;
