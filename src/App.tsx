import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Profiles from './pages/Profiles';
import Browse from './pages/Browse';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import Popular from './pages/Popular';
import Watch from './pages/Watch';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main>
                  <Routes>
                    <Route path="/profiles" element={<Profiles />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/tv-shows" element={<TVShows />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/popular" element={<Popular />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;