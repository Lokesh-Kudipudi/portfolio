import React from "react";
import projects from "../config/projects";
import { useOS } from "../context/OSContext";

const Projects = () => {
  const { openApp } = useOS();

  return (
    <div className="h-full flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-[180px] bg-[#282828]/80 p-[10px] flex flex-row md:flex-col gap-[5px] backdrop-blur-md shrink-0 border-b md:border-b-0 md:border-r border-white/10 overflow-x-auto no-scrollbar">
        <div className="hidden md:block px-[10px] py-[5px] text-[11px] font-bold text-[#888] shrink-0">
          Favorites
        </div>
        <div className="px-[10px] py-[6px] rounded-md bg-white/10 text-[13px] flex items-center gap-2 whitespace-nowrap shrink-0">
          <div className="w-3.5 h-3.5 bg-blue-500 rounded-full"></div>{" "}
          All Projects
        </div>
        <div className="px-[10px] py-[6px] rounded-md text-[13px] flex items-center gap-2 opacity-70 hover:bg-white/5 cursor-pointer whitespace-nowrap shrink-0">
          <div className="w-3.5 h-3.5 bg-purple-500 rounded-full"></div>{" "}
          Web Apps
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#1e1e1e]/90 p-5 overflow-y-auto">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-5">
          {projects.map((project) => (
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
