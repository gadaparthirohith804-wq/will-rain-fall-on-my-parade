
import React from 'react';
import type { WeatherForecast } from '../types';
import WeatherIcon from './WeatherIcon';

interface ResultDisplayProps {
  forecast: WeatherForecast;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ forecast }) => {
    const { location, date, rainProbability, weatherCondition, temperature, summary } = forecast;
    
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    });

    const circumference = 2 * Math.PI * 54; // 2 * pi * radius
    const strokeDashoffset = circumference - (rainProbability / 100) * circumference;
    
    const getProbabilityColor = (prob: number): string => {
        if (prob > 75) return 'stroke-red-400';
        if (prob > 50) return 'stroke-orange-400';
        if (prob > 25) return 'stroke-yellow-400';
        return 'stroke-cyan-400';
    };

    return (
        <div className="animate-fade-in bg-slate-800/60 p-6 md:p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-slate-700">
            <div className="text-center mb-6 border-b border-slate-700 pb-4">
                <h2 className="text-2xl font-bold text-white">{location}</h2>
                <p className="text-slate-400">{formattedDate}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-slate-300 mb-4">Chance of Rain</h3>
                    <div className="relative w-36 h-36">
                        <svg className="w-full h-full" viewBox="0 0 120 120">
                            <circle
                                className="stroke-slate-700"
                                cx="60"
                                cy="60"
                                r="54"
                                strokeWidth="12"
                                fill="transparent"
                            />
                            <circle
                                className={`transform -rotate-90 origin-center transition-all duration-1000 ease-out ${getProbabilityColor(rainProbability)}`}
                                cx="60"
                                cy="60"
                                r="54"
                                strokeWidth="12"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                fill="transparent"
                            />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-bold text-white">{rainProbability}%</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <div className="flex items-center gap-4">
                       <div className="w-20 h-20 text-cyan-300">
                         <WeatherIcon condition={weatherCondition} />
                       </div>
                       <div>
                         <p className="text-5xl font-bold">{temperature}°C</p>
                         <p className="text-lg text-slate-300 capitalize">{weatherCondition}</p>
                       </div>
                    </div>
                     <p className="text-slate-400 mt-4 text-center md:text-left">{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default ResultDisplay;
