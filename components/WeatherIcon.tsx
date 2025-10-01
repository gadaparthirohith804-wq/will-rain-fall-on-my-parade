
import React from 'react';
import type { WeatherCondition } from '../types';

interface WeatherIconProps {
    condition: WeatherCondition;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ condition }) => {
    switch (condition) {
        case 'Sunny':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
            );
        case 'Cloudy':
        case 'Foggy':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.43-2.242 4.5 4.5 0 0 0-8.23 3.99z" />
                </svg>
            );
        case 'Partly Cloudy':
             return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.625c0-1.02.195-2.004.546-2.925 1.252-2.483 3.522-4.2 6.254-4.2 2.534 0 4.816 1.48 6.08 3.752.69-1.22 1.956-2.052 3.42-2.052 2.21 0 4 1.79 4 4 0 .888-.286 1.705-.783 2.395M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
             );
        case 'Rainy':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l-.924-4.622a1.5 1.5 0 0 1 .74-1.637l3-1.732a1.5 1.5 0 0 1 2.086 1.637L14.25 21m-3.75 0h3.75m-3.75 0a.75.75 0 0 1-.75-.75V18a3 3 0 0 1 3-3h1.5a3 3 0 0 1 3 3v2.25a.75.75 0 0 1-.75.75M12 9.75a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V10.5a.75.75 0 0 1 .75-.75Zm4.515 1.015a.75.75 0 0 1 .37.635v.01a.75.75 0 0 1-1.498.067l-.002-.017a.75.75 0 0 1 .63-.732.75.75 0 0 1 .499.037ZM7.485 10.765a.75.75 0 0 1 .499-.037.75.75 0 0 1 .63.732l-.002.017a.75.75 0 0 1-1.498-.067v-.01a.75.75 0 0 1 .37-.635Z" />
                </svg>
            );
        case 'Stormy':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                </svg>
            );
        case 'Snowy':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm-6.364-3.636a.75.75 0 0 1-.53-1.28l1.06-1.061a.75.75 0 0 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-.53.221Zm12.728 0a.75.75 0 0 1-.53-.221l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 0 1-.53 1.28Zm-15.75-6a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm2.624-3.626a.75.75 0 0 1-.53-1.28l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-.53.22Zm10.102 0a.75.75 0 0 1-.53-.22l-1.06-1.06a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1-.53 1.28ZM12 6a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5A.75.75 0 0 1 12 6Zm-2.625 7.5a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm5.25 0a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Zm2.626 3.626a.75.75 0 0 1-.53-.22l-1.06-1.061a.75.75 0 1 1 1.06-1.06l1.06 1.06a.75.75 0 0 1-.53 1.28Zm-10.102 0a.75.75 0 0 1-.53-1.28l1.06-1.06a.75.75 0 1 1 1.06 1.06l-1.06 1.06a.75.75 0 0 1-.53.22ZM21 11.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Zm-18 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 .75.75Z" />
                </svg>
            );
        case 'Windy':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
                </svg>
            );
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m-4.5-3h9" />
                </svg>
            );
    }
};

export default WeatherIcon;
