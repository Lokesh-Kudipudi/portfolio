import React from "react";
import projects from "../config/projects";
import { useOS } from "../context/OSContext";
import {
  SiNextdotjs,
  SiPython,
  SiGoogle,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHuggingface,
} from "react-icons/si";
import {
  AudioLines,
  CodeSquare,
  Network,
  Wand2,
  Database,
  Lock,
  Layers,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

// Helper to map skill names to appropriate icons
const getSkillIcon = (skillName) => {
  const name = skillName.toLowerCase();
  
  if (name.includes("next.js")) return <SiNextdotjs size={14} className="text-white" />;
  if (name.includes("python")) return <SiPython size={14} className="text-blue-400" />;
  if (name.includes("react") || name.includes("react.js")) return <SiReact size={14} className="text-cyan-400" />;
  if (name.includes("node.js") || name.includes("nodejs")) return <SiNodedotjs size={14} className="text-green-500" />;
  if (name.includes("express") || name.includes("express.js")) return <SiExpress size={14} className="text-gray-300" />;
  if (name.includes("mongodb") || name.includes("mongo")) return <SiMongodb size={14} className="text-green-400" />;
  if (name.includes("tailwind")) return <SiTailwindcss size={14} className="text-teal-400" />;
  if (name.includes("gemini")) return <SiGoogle size={14} className="text-blue-500" />;
  if (name.includes("hugging face") || name.includes("huggingface")) return <SiHuggingface size={14} className="text-yellow-400" />;
  
  // Audio/Speech mapping
  if (name.includes("whisper") || name.includes("audio processing") || name.includes("speech") || name.includes("tts")) 
    return <AudioLines size={14} className="text-purple-400" />;
  
  // NLP mapping
  if (name.includes("nlp") || name.includes("indictrans2") || name.includes("translation")) 
    return <MessageSquare size={14} className="text-emerald-400" />;
  
  // Auth mapping
  if (name.includes("oauth") || name.includes("auth")) 
    return <Lock size={14} className="text-violet-400" />;

  // Default fallback icons based on index
  return <CheckCircle2 size={14} className="text-indigo-400" />;
};

const ProjectWindow = ({ appId }) => {
  const project = projects.find((item) => item.appId === appId);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const { openApp, setNotesData, setPreviewData } = useOS();

  if (!project) {
    return (
      <div className="h-full p-6 text-white/80">
        Project not found.
      </div>
    );
  }

  const getImageName = (image, index) => {
    const parts = image.split("/");
    return (
      parts[parts.length - 1] || `screenshot-${index + 1}.png`
    );
  };

  const files = [
    project.url !== "NA" && {
      id: "brave-link",
      name: "Brave.url",
      type: "link",
      icon: "/icons/brave.svg",
      url: project.url,
    },
    project.github !== "NA" && {
      id: "github-link",
      name: "GitHub.url",
      type: "link",
      icon: "/icons/github.png",
      url: project.github,
    },
    {
      id: "readme",
      name: "README.md",
      type: "readme",
      icon: "/icons/readme.png",
      content: project.readme,
    },
    ...project.images.map((image, index) => ({
      id: `image-${index + 1}`,
      name: getImageName(image, index),
      type: "image",
      icon: image,
      image,
    })),
  ].filter(Boolean);

  const handleFileOpen = (file) => {
    if (file.type === "link") {
      window.open(file.url, "_blank", "noopener,noreferrer");
      return;
    }

    setSelectedItem(file);
    if (file.type === "readme") {
      setNotesData({
        title: `${project.title} / README.md`,
        lines: file.content,
      });
      openApp("notes");
      return;
    }

    if (file.type === "image") {
      setPreviewData({
        title: file.name,
        image: file.image,
      });
      openApp("preview");
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row text-white relative">
      <div className="w-full md:w-[200px] bg-[#282828]/80 p-[10px] flex flex-row md:flex-col gap-[6px] backdrop-blur-md shrink-0 border-b md:border-b-0 md:border-r border-white/10 overflow-x-auto no-scrollbar">
        <div className="hidden md:block px-[10px] py-[5px] text-[11px] font-bold text-[#888] shrink-0 uppercase tracking-wider">
          Skills
        </div>
        {project.skills?.map((skill, index) => {
          return (
            <div
              key={index}
              className="px-[10px] py-[6px] rounded-md text-[13px] flex items-center gap-2.5 opacity-80 hover:opacity-100 whitespace-nowrap shrink-0 transition-opacity"
            >
              <div className="flex items-center justify-center">
                {getSkillIcon(skill)}
              </div>
              {skill}
            </div>
          );
        })}
      </div>

      <div className="flex-1 bg-[#1e1e1e]/90 p-5 overflow-y-auto">
        <div className="text-[13px] text-white/70 mb-4">
          {project.description}
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-5">
          {files.map((file) => (
            <button
              key={file.id}
              type="button"
              onClick={() => handleFileOpen(file)}
              className={`flex flex-col items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors group ${
                selectedItem?.id === file.id
                  ? "bg-white/10"
                  : "hover:bg-white/10"
              }`}
            >
              <div className="w-16 h-16 rounded-lg  flex items-center justify-center overflow-hidden">
                <img
                  src={file.icon}
                  alt={file.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="text-[12px] font-medium text-white/90 group-hover:text-white">
                  {file.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectWindow;
