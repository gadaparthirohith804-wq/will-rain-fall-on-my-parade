
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center mb-8 md:mb-10">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
        Will It Rain On My Parade?
      </h1>
      <p className="mt-3 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
        AI-powered rain prediction based on historical weather data. Plan your day with confidence.
      </p>
    </div>
  );
};

export default Hero;
