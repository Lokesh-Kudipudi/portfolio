import React from "react";
import { useOS } from "../context/OSContext";

const NotesApp = () => {
  const { notesData } = useOS();
  const title = notesData?.title ?? "Notes";
  const lines = notesData?.lines ?? ["No note selected."];

  return (
    <div className="h-full w-full bg-[#0f172a]/30">
      <div className="px-4 pt-4 text-[12px] text-white/60 tracking-[0.2em] uppercase">
        {title}
      </div>
      <div className="h-[calc(100%-32px)] p-4 text-[12px] leading-relaxed font-mono text-white/80 overflow-auto">
        {lines.map((line) => (
          <p className="mb-4" key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default NotesApp;
