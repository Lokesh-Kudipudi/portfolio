import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TopBar from "./TopBar";
import Dock from "./Dock";
import Window from "../ui/Window";
import { useOS } from "../../context/OSContext";
import appConfig from "../../config/apps";

const Desktop = () => {
  const { openApps } = useOS();

  return (
    <motion.div
      className="w-screen h-[100dvh] bg-cover bg-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=3270&auto=format&fit=crop)",
      }}
    >
      <TopBar />

      {/* Window Area */}
      <div className="absolute top-[30px] left-0 right-0 bottom-[80px] pointer-events-none">
        <AnimatePresence>
          {openApps.map((appId) => {
            const app = appConfig[appId];
            if (!app) return null;
            const Component = app.component;
            return (
              <div key={appId} style={{ pointerEvents: "auto" }}>
                <Window
                  id={appId}
                  title={app.title}
                  minWidth={app.width}
                  minHeight={app.height}
                >
                  <Component appId={appId} />
                </Window>
              </div>
            );
          })}
        </AnimatePresence>
      </div>

      <Dock />
    </motion.div>
  );
};

export default Desktop;
