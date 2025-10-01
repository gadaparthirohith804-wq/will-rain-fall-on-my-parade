
import React, { useMemo } from 'react';

interface DateSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ value, onChange }) => {
  const today = useMemo(() => {
    const d = new Date();
    // Adjust for timezone offset to get local 'YYYY-MM-DD'
    d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
    return d.toISOString().split('T')[0];
  }, []);

  return (
    <div>
      <label htmlFor="date" className="block text-sm font-medium text-slate-300 mb-2">
        Date
      </label>
      <div className="relative">
         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M-4.5 12h22.5" />
          </svg>
        </div>
        <input
          type="date"
          id="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={today}
          required
          className="w-full bg-slate-700/50 border border-slate-600 rounded-lg py-3 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 placeholder-slate-400 appearance-none"
          style={{ colorScheme: 'dark' }}
        />
      </div>
    </div>
  );
};

export default DateSelector;
