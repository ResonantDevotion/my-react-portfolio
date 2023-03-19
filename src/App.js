import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing the different page js files
import Homepage from './pages/Homepage/index';
import ProjectGallery from './pages/Project Gallery/index';
import Contact from './pages/Contact/index';

// importing the different component js files
import Header from './components/Header/Header';
import Footer from './components/Footer/index';

function App() {
  return (
    <Router>
      <Header />
      <body>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/ProjectGallery" element={<ProjectGallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </body >
      <Footer />
    </Router >
  );
}

export default App;
