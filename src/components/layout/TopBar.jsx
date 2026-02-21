import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Wifi, Battery } from "lucide-react";
import { useOS } from "../../context/OSContext";

const TopBar = () => {
  const [time, setTime] = useState(new Date());
  const { activeApp } = useOS();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[30px] w-full bg-black/20 backdrop-blur-md flex justify-between items-center px-3 text-[13px] font-medium text-white absolute top-0 z-[1001] select-none">
      <div className="flex items-center gap-4">
        <span className="font-bold text-[15px]"></span>
        <span className="font-bold">Lokesh Kudipudi</span>
        {/* <span className="font-semibold">{activeApp ? activeApp.charAt(0).toUpperCase() + activeApp.slice(1) : 'Finder'}</span> */}
        {/* <div className="flex gap-4 font-normal">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Go</span>
          <span>Window</span>
          <span>Help</span>
        </div> */}
      </div>

      <div className="flex items-center gap-4">
        <Wifi size={16} />
        <Battery size={16} />
        <span>{format(time, "EEE MMM d h:mm aa")}</span>
      </div>
    </div>
  );
};

export default TopBar;
