import React, { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useOS } from "../../context/OSContext";
import dockApps from "../../config/dockApps";
import projects from "../../config/projects";

const Dock = () => {
  const mouseX = useMotionValue(Infinity);
  const { openApps } = useOS();

  const projectByAppId = useMemo(() => {
    return new Map(
      projects.map((project) => [project.appId, project]),
    );
  }, []);

  const dockItems = useMemo(() => {
    const baseIds = new Set(dockApps.map((app) => app.id));
    const extraItems = openApps
      .filter((appId) => !baseIds.has(appId))
      .map((appId) => {
        if (appId === "notes") {
          return {
            id: "notes",
            name: "Notes",
            icon: "/icons/readme.png",
            color: "#10b981",
          };
        }
        if (appId === "preview") {
          return {
            id: "preview",
            name: "Preview",
            icon: "/icons/eog.svg",
            color: "#f59e0b",
          };
        }

        const project = projectByAppId.get(appId);
        if (project) {
          return {
            id: appId,
            name: project.title,
            icon: "/icons/folder.png",
            color: "#60a5fa",
          };
        }

        return {
          id: appId,
          name: appId,
          icon: "/icons/folder.png",
          color: "#6b7280",
        };
      });

    return [...dockApps, ...extraItems];
  }, [openApps, projectByAppId]);

  return (
    <div
      className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-end gap-3 p-3 bg-white/20 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-lg z-[1000]"
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
    >
      {dockItems.map((app) => (
        <DockIcon key={app.id} app={app} mouseX={mouseX} />
      ))}
    </div>
  );
};

const DockIcon = ({ app, mouseX }) => {
  const ref = useRef(null);
  const { openApp, openApps } = useOS();
  const [isHovered, setIsHovered] = React.useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: 0,
    };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distance,
    [-150, 0, 150],
    [60, 100, 60],
  );
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const isOpen = openApps.includes(app.id);

  return (
    <div className="flex flex-col items-center gap-2 relative">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-12 left-1/2 px-3 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white text-xs border border-white/10 shadow-xl whitespace-nowrap z-50 pointer-events-none"
          >
            {app.name}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        ref={ref}
        style={{ width, height: width }}
        className="dock-icon-wrapper"
        onClick={() => openApp(app.id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="w-full h-full rounded-xl flex justify-center items-center cursor-pointer relative transition-all duration-200"
          style={{ backgroundColor: "transparent" }}
        >
          <img
            src={app.icon}
            alt={app.name}
            className="w-full h-full object-contain"
          />
          {isOpen && (
            <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-white/80" />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Dock;
