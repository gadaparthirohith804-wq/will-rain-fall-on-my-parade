
export type WeatherCondition = 'Sunny' | 'Cloudy' | 'Rainy' | 'Stormy' | 'Snowy' | 'Windy' | 'Partly Cloudy' | 'Foggy';

export interface WeatherForecast {
  location: string;
  date: string;
  rainProbability: number;
  weatherCondition: WeatherCondition;
  temperature: number; // in Celsius
  summary: string;
}
