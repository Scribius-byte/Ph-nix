import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import Leaders from './pages/Leaders';
import Family from './pages/Family';
import Gallery from './pages/Gallery';
import Thanks from './pages/Thanks';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/leaders" element={<Leaders />} />
            <Route path="/family" element={<Family />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
