import { Video, Mic, Image, Bot, Globe, Clock, Youtube, Instagram, Podcast, Presentation } from "lucide-react";

export const featuresData = [
  {
    icon: <Video className="w-6 h-6" />,
    title: "Text-to-Video",
    description: "Transform your ideas into stunning videos with AI-generated visuals and avatars.",
    details: [
      "Create videos in 5 minutes",
      "AI avatars with expressions",
      "Automatic subtitles"
    ],
    examples: [
      { icon: <Youtube className="w-4 h-4" />, text: "YouTube tutorials" },
      { icon: <Instagram className="w-4 h-4" />, text: "Instagram Reels" }
    ],
    demoUrl: "https://example.com/demo-video.mp4",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      after: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  },
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Text-to-Voice",
    description: "Generate realistic voiceovers in multiple languages and accents.",
    details: [
      "Professional voiceovers in minutes",
      "40+ languages supported",
      "Natural expressions"
    ],
    examples: [
      { icon: <Podcast className="w-4 h-4" />, text: "Podcast narration" },
      { icon: <Presentation className="w-4 h-4" />, text: "Video presentations" }
    ],
    demoUrl: "https://example.com/demo-audio.mp3",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      after: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    }
  },
  {
    icon: <Image className="w-6 h-6" />,
    title: "Text-to-Image",
    description: "Create captivating visuals from text prompts in various styles.",
    details: [
      "Multiple style options",
      "Custom resolutions",
      "Batch processing"
    ],
    examples: [
      { icon: <Image className="w-4 h-4" />, text: "Marketing visuals" },
      { icon: <Presentation className="w-4 h-4" />, text: "Social media posts" }
    ],
    demoUrl: "https://example.com/demo-image.mp4",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    }
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Speaking Agents",
    description: "Automate your content creation and publishing with AI assistants that understand your needs.",
    details: ["Voice commands", "Task automation", "Smart scheduling"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-Platform Publishing",
    description: "Publish your content directly to multiple platforms with just one click.",
    details: ["Social media integration", "Schedule posts", "Analytics tracking"],
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Time-Saving Automation",
    description: "Streamline your workflow with intelligent automation tools that save hours of work.",
    details: ["Batch processing", "Custom workflows", "Template library"],
  }
];