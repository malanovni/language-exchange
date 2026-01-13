import { GoogleGenAI, Type } from "@google/genai";
import { IcebreakerResponse } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateIcebreaker = async (): Promise<IcebreakerResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate a fun, interesting, and culturally relevant conversation starter question suitable for a language exchange meetup. Provide the question in both English and Spanish.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            english: {
              type: Type.STRING,
              description: "The conversation starter question in English",
            },
            spanish: {
              type: Type.STRING,
              description: "The conversation starter question translated to Spanish",
            },
          },
          required: ["english", "spanish"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from AI");
    }

    return JSON.parse(text) as IcebreakerResponse;
  } catch (error) {
    console.error("Error generating icebreaker:", error);
    // Fallback in case of API error
    return {
      english: "If you could travel anywhere in the world right now, where would you go and why?",
      spanish: "Si pudieras viajar a cualquier lugar del mundo ahora mismo, ¿a dónde irías y por qué?"
    };
  }
};
