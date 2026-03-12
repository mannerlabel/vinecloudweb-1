import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function generateGymImage() {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          text: 'A high-quality, realistic photo of 3-4 diverse men and women in a modern, bright gym. They are standing together, each holding a different smartphone (iPhone and Samsung Galaxy styles). They are looking at the screens of their phones, which display a vibrant health and fitness app dashboard with charts, activity rings, and the text "HealthPangPang". They are smiling and looking happy, showing a sense of community and achievement. The lighting is natural and energetic.',
        },
      ],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  for (const part of response.candidates![0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
}
