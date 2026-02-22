import React, { useState } from "react";
import projects from "../config/projects";
import { useOS } from "../context/OSContext";

import { LayoutGrid, Globe, BrainCircuit, MessageSquare, Terminal, Lightbulb } from "lucide-react";

const Projects = () => {
  const { openApp } = useOS();
  const [selectedDomain, setSelectedDomain] = useState("All Projects");

  // Extract unique domains (types) safely
  const allDomains = Array.from(
    new Set(projects.map((p) => p.type || "Other"))
  ).sort();

  const filteredProjects =
    selectedDomain === "All Projects"
      ? projects
      : projects.filter((p) => (p.type || "Other") === selectedDomain);

  const getDomainIcon = (domain) => {
    switch (domain) {
      case "Agentic AI":
        return <BrainCircuit size={14} />;
      case "Web Development":
        return <Globe size={14} />;
      case "NLP":
        return <MessageSquare size={14} />;
      case "All Projects":
        return <LayoutGrid size={14} />;
      default:
        return <Lightbulb size={14} />;
    }
  };

  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-[180px] bg-[#282828]/80 p-[10px] flex flex-row md:flex-col gap-[5px] backdrop-blur-md shrink-0 border-b md:border-b-0 md:border-r border-white/10 overflow-x-auto no-scrollbar">
        <div className="hidden md:block px-[10px] py-[5px] text-[11px] font-bold text-[#888] shrink-0 uppercase tracking-wider">
          Domains
        </div>
        <div
          className={`px-[10px] py-[6px] rounded-md text-[13px] flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
            selectedDomain === "All Projects"
              ? "bg-white/10 opacity-100"
              : "opacity-70 hover:bg-white/5"
          }`}
          onClick={() => setSelectedDomain("All Projects")}
        >
          <div className="text-blue-400 flex items-center justify-center">
            {getDomainIcon("All Projects")}
          </div>
          All Projects
        </div>
        
        {allDomains.map((domain, idx) => {
          const colors = [
            "text-purple-400",
            "text-green-400",
            "text-yellow-400",
            "text-red-400",
            "text-pink-400",
          ];
          return (
            <div
              key={domain}
              className={`px-[10px] py-[6px] rounded-md text-[13px] flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0 transition-colors ${
                selectedDomain === domain
                  ? "bg-white/10 opacity-100"
                  : "opacity-70 hover:bg-white/5"
              }`}
              onClick={() => setSelectedDomain(domain)}
            >
              <div className={`flex items-center justify-center ${colors[idx % colors.length]}`}>
                {getDomainIcon(domain)}
              </div>
              {domain}
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#1e1e1e]/90 p-5 overflow-y-auto">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center gap-2.5 p-2.5 rounded-lg cursor-pointer transition-colors hover:bg-white/10 group"
              onClick={() => openApp(project.appId)}
            >
              <img
                src="/icons/folder.png"
                alt="Folder"
                className="w-16 h-16 object-contain drop-shadow-md group-hover:drop-shadow-lg transition-all"
              />
              <div className="text-center">
                <div className="text-[13px] font-medium text-white/90 group-hover:text-white">
                  {project.title}
                </div>
                <div className="text-[11px] opacity-70">
                  {project.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
