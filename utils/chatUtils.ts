export const visionaryInfo = {
  about: "VisionaryAI is a cutting-edge platform that empowers creators with AI-powered tools for content creation. We offer text-to-video, text-to-voice, and text-to-image capabilities.",
  features: "Our key features include:\n- AI-powered video generation\n- Realistic voiceovers in 40+ languages\n- High-quality image generation\n- Speaking AI agents\n- Multi-platform publishing",
  pricing: "We offer flexible pricing plans to suit your needs. Visit our pricing page for detailed information.",
};

export const handleUserQuery = (query: string): { response: string; shouldCollectDetails: boolean } => {
  const lowerQuery = query.toLowerCase();

  if (lowerQuery.includes("about") || lowerQuery.includes("what") || lowerQuery.includes("company")) {
    return { response: visionaryInfo.about, shouldCollectDetails: false };
  } else if (lowerQuery.includes("feature") || lowerQuery.includes("offer") || lowerQuery.includes("service")) {
    return { response: visionaryInfo.features, shouldCollectDetails: false };
  } else if (lowerQuery.includes("price") || lowerQuery.includes("cost") || lowerQuery.includes("plan")) {
    return { response: visionaryInfo.pricing, shouldCollectDetails: false };
  }

  return {
    response: "I don't have specific information about that. Would you like to leave your contact details so our team can reach out to you?",
    shouldCollectDetails: true,
  };
};