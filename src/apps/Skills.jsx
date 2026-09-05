import React, { useState, useEffect } from 'react';
import skills from '../config/skills';

const Skills = () => {
  const [renderTime, setRenderTime] = useState(0);

  useEffect(() => {
    // Generate a random render time between 2 and 12ms to simulate the terminal output
    setRenderTime(Math.floor(Math.random() * 11) + 2);
  }, []);

  return (
    <div className="h-full w-full bg-[#0d1117] text-gray-300 font-mono text-[13px] sm:text-sm overflow-hidden flex flex-col">

      {/* Terminal Content */}
      <div className="flex-1 p-5 sm:p-6 overflow-y-auto">
        <div className="mb-8 flex items-center">
          <span className="text-white font-bold">@lokesh</span>
          <span className="text-[#8b949e] mx-2">%</span>
          <span className="text-gray-200">show tech stack</span>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 mb-4 text-[#8b949e] px-2 font-medium">
          <div className="col-span-5 lg:col-span-4">Category</div>
          <div className="col-span-7 lg:col-span-8">Technologies</div>
        </div>

        {/* Dashed Separator */}
        <div className="border-t border-dashed border-[#30363d] mb-5"></div>

        {/* Table Body */}
        <div className="space-y-4 mb-5">
          {skills.map((skill, index) => (
            <div key={index} className="grid grid-cols-12 gap-4 px-2 items-start">
              <div className="col-span-5 lg:col-span-4 flex items-start text-[#3fb950]">
                <span className="mr-3 font-bold select-none">✓</span>
                <span className="font-semibold">{skill.name}</span>
              </div>
              <div className="col-span-7 lg:col-span-8 text-[#e6edf3]">
                {skill.tools}
              </div>
            </div>
          ))}
        </div>

        {/* Dashed Separator */}
        <div className="border-t border-dashed border-[#30363d] mb-5"></div>

        {/* Footer Status */}
        <div className="space-y-3 px-2">
          <div className="flex items-center text-[#3fb950]">
            <span className="mr-3 font-bold select-none">✓</span>
            <span>{skills.length} of {skills.length} stacks loaded successfully (100%)</span>
          </div>
          <div className="flex items-center text-[#8b949e]">
            <span className="mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
              </svg>
            </span>
            <span>Render time: {renderTime}ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
