
import React from 'react';

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="location" className="block text-sm font-medium text-slate-300 mb-2">
        Location
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </div>
        <input
          type="text"
          id="location"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="e.g., New York, USA"
          required
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-slate-400"
        />
      </div>
    </div>
  );
};

export default LocationInput;
