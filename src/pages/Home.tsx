import React from 'react';
import { Play, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative h-screen bg-black">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=2069&auto=format&fit=crop"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />
      </div>

      <div className="relative z-10 h-screen flex items-center px-4 md:px-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Películas y series ilimitadas y mucho más</h1>
          <p className="text-xl md:text-2xl mb-8">Disfruta donde quieras. Cancela cuando quieras.</p>
          <div className="flex space-x-4">
            <Link to="/browse" className="flex items-center bg-white text-black px-8 py-3 rounded font-semibold hover:bg-white/90 transition">
              <Play className="w-6 h-6 mr-2" />
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;