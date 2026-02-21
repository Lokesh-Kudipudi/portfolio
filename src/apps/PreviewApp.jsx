import React from "react";
import { useOS } from "../context/OSContext";

const PreviewApp = () => {
  const { previewData } = useOS();
  const title = previewData?.title ?? "Preview";
  const image = previewData?.image ?? null;

  return (
    <div className="h-full w-full bg-black/40 flex items-center justify-center">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      ) : (
        <div className="text-sm text-white/60">
          No image selected.
        </div>
      )}
    </div>
  );
};

export default PreviewApp;
