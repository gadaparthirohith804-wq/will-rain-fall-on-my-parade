
import React, { useState, useCallback } from 'react';
import { getRainPrediction } from './services/geminiService';
import type { WeatherForecast } from './types';
import LocationInput from './components/LocationInput';
import DateSelector from './components/DateSelector';
import ResultDisplay from './components/ResultDisplay';
import Loader from './components/Loader';
import Hero from './components/Hero';

const App: React.FC = () => {
  const [location, setLocation] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!location || !date) {
      setError('Please select both a location and a date.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setForecast(null);

    try {
      const result = await getRainPrediction(location, date);
      setForecast(result);
    } catch (err) {
      console.error(err);
      setError('Failed to get prediction. The AI may be busy, please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [location, date]);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900 to-slate-900 z-0"></div>
        <main className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
            <Hero />
            
            <div className="w-full max-w-xl bg-slate-800/60 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <LocationInput value={location} onChange={setLocation} />
                        <DateSelector value={date} onChange={setDate} />
                    </div>
                    <button 
                        type="submit" 
                        disabled={isLoading || !location || !date}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-400/50 flex items-center justify-center"
                    >
                        {isLoading ? <Loader/> : 'Predict Weather'}
                    </button>
                </form>
            </div>

            <div className="w-full max-w-xl mt-8">
                {isLoading && (
                    <div className="flex justify-center items-center p-8 bg-slate-800/60 rounded-2xl">
                         <p className="text-lg text-slate-300">Analyzing historical data...</p>
                    </div>
                )}
                {error && (
                    <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg text-center">
                        <p className="font-semibold">Error</p>
                        <p>{error}</p>
                    </div>
                )}
                {forecast && !isLoading && (
                    <ResultDisplay forecast={forecast} />
                )}
            </div>
        </main>
    </div>
  );
};

export default App;
