import React, { useRef, useState, useEffect } from 'react';
import { motion, useDragControls } from 'framer-motion';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useOS } from '../../context/OSContext';

const Window = ({ id, title, children, minWidth = 600, minHeight = 400 }) => {
  const { activeApp, focusApp, closeApp, minimizeApp, getZIndex, minimizedApps } = useOS();
  const isActive = activeApp === id;
  const isMinimized = minimizedApps.includes(id);
  const zIndex = getZIndex(id);
  const constraintsRef = useRef(null);
  
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [windowSize, setWindowSize] = useState({ 
    width: typeof window !== 'undefined' ? window.innerWidth : 1024, 
    height: typeof window !== 'undefined' ? window.innerHeight : 768 
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive sizing
  const isMobile = windowSize.width < 768;
  const initWidth = isMobile ? windowSize.width * 0.9 : minWidth;
  const initHeight = isMobile ? windowSize.height * 0.8 : minHeight;
    
  // Initial random position slightly offset to avoid stacking perfectly
  const initialX = isMobile ? 0 : Math.random() * 50 + 100;
  const initialY = isMobile ? 0 : Math.random() * 50 + 50;

  const toggleFullScreen = (e) => {
    e.stopPropagation();
    setIsFullScreen(!isFullScreen);
  };

  return (
    <motion.div
    drag={!isFullScreen && !isMobile}
    dragConstraints={{ left: 0, top: 30, right: isMobile ? 0 : windowSize.width - minWidth, bottom: isMobile ? 0 : windowSize.height - minHeight }}
    dragMomentum={false}
    initial={{ scale: 0.9, opacity: 0, x: initialX, y: initialY }}
    animate={{ 
        scale: isMinimized ? 0 : 1, 
        opacity: isMinimized ? 0 : 1,
        y: isMinimized ? 500 : (isFullScreen || isMobile ? 0 : undefined),
        x: isFullScreen || isMobile ? 0 : undefined,
        width: isFullScreen ? "100%" : (isMobile ? "100%" : initWidth),
        height: isFullScreen ? "100%" : (isMobile ? "calc(100% - 80px)" : initHeight),
        borderRadius: isFullScreen ? 0 : (isMobile ? 16 : 10)
    }}
    exit={{ scale: 0.9, opacity: 0 }}
    transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
    style={{
        width: isFullScreen ? "100%" : (isMobile ? "100%" : initWidth),
        height: isFullScreen ? "100%" : (isMobile ? "calc(100% - 80px)" : initHeight),
        zIndex: zIndex,
    }}
    className={`absolute bg-[#1e1e1e]/65 backdrop-blur-3xl border border-white/10 shadow-2xl flex flex-col ${isFullScreen || isMobile ? 'top-0 left-0' : ''}`}
    onPointerDown={() => focusApp(id)}
    >
      {/* Window Header */}
      <div 
        className="h-9 bg-gradient-to-b from-[#3a3a3a] to-[#2b2b2b] border-b border-black/50 rounded-t-[10px] flex items-center px-3 cursor-default"
        onDoubleClick={toggleFullScreen}
      >
        <div 
            className="flex gap-2 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div onClick={(e) => { e.stopPropagation(); closeApp(id); }} className="w-3 h-3 rounded-full bg-[#ff5f56] border border-[#e0443e] cursor-pointer flex items-center justify-center">
                {isHovered && <X size={8} color="black" fill="black" strokeWidth={3} />}
            </div>
            <div onClick={(e) => { e.stopPropagation(); minimizeApp(id); }} className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123] cursor-pointer flex items-center justify-center">
                {isHovered && <Minus size={8} color="black" fill="black" strokeWidth={3} />}
            </div>
            <div onClick={toggleFullScreen} className="w-3 h-3 rounded-full bg-[#27c93f] border border-[#1aab29] cursor-pointer flex items-center justify-center">
                {isHovered && <Maximize2 size={8} color="black" fill="black" strokeWidth={3} />}
            </div>
        </div>
        <div className="flex-1 text-center text-[#ccc] text-[13px] font-medium">
            {title}
        </div>
        <div className="w-[52px]"></div> {/* Spacer to center title */}
      </div>

      {/* Window Content */}
      <div className="flex-1 overflow-auto p-0 text-white">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
