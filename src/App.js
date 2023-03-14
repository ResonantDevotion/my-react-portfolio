import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// importing the different page js files
import Home from './pages/Home';
import ProjectGallery from './components/ProjectGallery/index';
import Contact from './components/Contact/index';
// importing the different component js files
// import Header from './components/Header/Navbar/index';
import Footer from './components/Footer/index';
import Wrapper from './components/Wrapper/index';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Wrapper>
          <Routes>
            {/* <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> {<Home />} </div>
              <div class="tab-pane fade" id="nav-project-gallery" role="tabpanel" aria-labelledby="nav-project-gallery-tab"> {<ProjectGallery />} </div>
              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> {<Contact />} </div>
            </div> */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/ProjectGallery" element={<ProjectGallery />} />
            {/* <Route path="/contact" element={<Contact />} />  */}
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
