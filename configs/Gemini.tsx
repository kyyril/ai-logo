const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const AiDesignIdea = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: 'Based on Logo of type mascot logos Generate a text prompt to create Logo for Logo title/Brand name : indian spice with decription: indian restaurant and refering to prompt: Design a collection of vintage-inspired logos with a hand-drawn, artistic style. Incorporate a variety of themes, including food, animals, characters, and unique brand elements. Each logo should feature bold typography, intricate details, and a retro aesthetic that is versatile and suitable for diverse brands or businesses.. Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format {"ideas":["",""]}, with ideas field.',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n"ideas": [\n    "Spice Merchant Elephant",\n    "Chef Tiger with Turban",\n     "Royal Peacock Curry",\n     "Hand-Drawn Spice Pot",\n     "Vibrant Cobra Cook"\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
