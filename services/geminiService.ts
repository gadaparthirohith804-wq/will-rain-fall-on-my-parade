
import { GoogleGenAI, Type } from "@google/genai";
import type { WeatherForecast } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    location: { type: Type.STRING },
    date: { type: Type.STRING },
    rainProbability: { 
      type: Type.NUMBER,
      description: "A numerical percentage from 0 to 100 representing the probability of rain."
    },
    weatherCondition: { 
        type: Type.STRING,
        enum: ['Sunny', 'Cloudy', 'Rainy', 'Stormy', 'Snowy', 'Windy', 'Partly Cloudy', 'Foggy'],
        description: "A single descriptive word for the weather condition."
    },
    temperature: { 
      type: Type.NUMBER,
      description: "The forecasted temperature in Celsius."
    },
    summary: { 
      type: Type.STRING,
      description: "A brief, one-sentence summary of the weather forecast."
    },
  },
  required: ['location', 'date', 'rainProbability', 'weatherCondition', 'temperature', 'summary'],
};


export const getRainPrediction = async (location: string, date: string): Promise<WeatherForecast> => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const prompt = `
    You are an expert meteorologist with access to extensive historical weather data, equivalent to NASA's archives.
    For the location "${location}" and the date "${formattedDate}", analyze the weather patterns over the past 5 years for that specific day of the year.
    Based on this historical analysis, provide a detailed weather forecast.
    
    Your response must be a single, valid JSON object that conforms to the provided schema.

    - The 'rainProbability' must be a numerical percentage based on how many times it rained on or around that calendar day in the past 5 years in that location.
    - The 'temperature' should be the average expected temperature in Celsius.
    - The 'summary' must be a brief, one-sentence forecast.
    - The 'weatherCondition' must be one of the allowed enum values.
  `;
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonString = response.text;
    const parsedJson = JSON.parse(jsonString);
    
    // Basic validation to ensure the object structure is as expected.
    if (
        typeof parsedJson.rainProbability !== 'number' || 
        typeof parsedJson.temperature !== 'number' || 
        typeof parsedJson.weatherCondition !== 'string'
    ) {
        throw new Error("Received malformed data from AI.");
    }
    
    return parsedJson as WeatherForecast;

  } catch (error) {
    console.error("Error fetching rain prediction:", error);
    throw new Error("Could not retrieve weather prediction from the AI service.");
  }
};
