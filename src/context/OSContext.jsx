import React, {
  createContext,
  useContext,
  useState,
} from "react";

const OSContext = createContext();

export const OSProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openApps, setOpenApps] = useState([]); // Array of app IDs
  const [activeApp, setActiveApp] = useState(null); // ID of the currently focused app
  const [minimizedApps, setMinimizedApps] = useState([]); // Array of app IDs
  const [appStack, setAppStack] = useState([]); // Order of apps for z-index
  const [notesData, setNotesData] = useState({
    title: "Notes",
    lines: ["No note selected."],
  });
  const [previewData, setPreviewData] = useState({
    title: "Preview",
    image: null,
  });

  const openApp = (appId) => {
    if (!openApps.includes(appId)) {
      setOpenApps([...openApps, appId]);
      setAppStack([...appStack, appId]);
    } else {
      // Bring to front if already open
      bringToFront(appId);
    }
    setActiveApp(appId);
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(
        minimizedApps.filter((id) => id !== appId),
      );
    }
  };

  const closeApp = (appId) => {
    setOpenApps(openApps.filter((id) => id !== appId));
    setAppStack(appStack.filter((id) => id !== appId));
    if (activeApp === appId) {
      // Focus the next top-most app
      const remainingStack = appStack.filter(
        (id) => id !== appId,
      );
      setActiveApp(
        remainingStack.length > 0
          ? remainingStack[remainingStack.length - 1]
          : null,
      );
    }
  };

  const minimizeApp = (appId) => {
    if (!minimizedApps.includes(appId)) {
      setMinimizedApps([...minimizedApps, appId]);
    }
    setActiveApp(null);
  };

  const bringToFront = (appId) => {
    setAppStack((prevStack) => {
      const newStack = prevStack.filter((id) => id !== appId);
      newStack.push(appId);
      return newStack;
    });
  };

  const focusApp = (appId) => {
    setActiveApp(appId);
    bringToFront(appId);
    if (minimizedApps.includes(appId)) {
      setMinimizedApps(
        minimizedApps.filter((id) => id !== appId),
      );
    }
  };

  const getZIndex = (appId) => {
    const index = appStack.indexOf(appId);
    return index === -1 ? 1 : 10 + index;
  };

  return (
    <OSContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        openApps,
        activeApp,
        minimizedApps,
        openApp,
        closeApp,
        minimizeApp,
        focusApp,
        getZIndex,
        notesData,
        setNotesData,
        previewData,
        setPreviewData,
      }}
    >
      {children}
    </OSContext.Provider>
  );
};

export const useOS = () => useContext(OSContext);
