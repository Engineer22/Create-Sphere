import { RunwareService } from "../services/runware";

export interface GenerateImageParams {
  positivePrompt: string;
  model?: string;
  numberResults?: number;
  outputFormat?: string;
  CFGScale?: number;
  scheduler?: string;
  strength?: number;
  steps?: number;
  promptWeighting?: "compel" | "sdEmbeds";
  seed?: number | null;
  lora?: string[];
}

const generateDrSriRamImage = async (apiKey: string) => {
  const runware = new RunwareService(apiKey);
  
  try {
    const result = await runware.generateImage({
      positivePrompt: "A realistic portrait of Dr. Sri Ram, a distinguished researcher and CTO, with extensive expertise in AI and machine learning. A visionary leader focused on advancing technological innovation. Depict him as confident and thoughtful, wearing a formal business outfit (e.g., blazer and tie), with a modern tech lab or innovation hub in the background. Include subtle elements representing machine learning and AI, such as neural network diagrams or futuristic tech interfaces, to emphasize his role as a co-founder and technology pioneer",
      model: "runware:100@1",
      numberResults: 1,
      outputFormat: "WEBP",
      CFGScale: 1,
      scheduler: "FlowMatchEulerDiscreteScheduler",
      strength: 0.8,
    });
    
    return result.imageURL;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

const generateDrSheelaImage = async (apiKey: string) => {
  const runware = new RunwareService(apiKey);
  
  try {
    const result = await runware.generateImage({
      positivePrompt: "A professional portrait of Dr. Sheela Kumari, Head of Product at a leading AI company. She is wearing a sophisticated dark blazer with a white blouse, appearing confident and approachable. The background features modern tech elements, AI visualization graphics, and product development charts. Her expression conveys expertise and leadership in AI product development.",
      model: "runware:100@1",
      numberResults: 1,
      outputFormat: "WEBP",
      CFGScale: 1,
      scheduler: "FlowMatchEulerDiscreteScheduler",
      strength: 0.8,
    });
    
    return result.imageURL;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

export { generateDrSriRamImage, generateDrSheelaImage };