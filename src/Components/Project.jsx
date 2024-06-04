import { Link } from "react-router-dom";
import Label from "./Label";

function Project({
  imagePath,
  projectName,
  projectDescription,
  labels,
  liveLink,
  colors,
}) {
  return (
    <div className="flex items-center gap-8 border-4 border-dashed border-black p-4">
      <img className="h-[180px]" src={`${imagePath}`} alt="none" />
      <div>
        <h1 className="mb-3 text-[24px]">{projectName}</h1>

        <p className="mb-[4px] flex items-center text-[18px]">
          Tech Stack Used:
          {labels.map((label, i) => (
            <Label key={i} color={colors[i]} text={label}></Label>
          ))}
        </p>
        <p className="mb-[4px] leading-[1.15]">{projectDescription}</p>
        <Link to={liveLink} className="ml-1 text-sky-500">
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default Project;
