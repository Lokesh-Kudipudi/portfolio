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
    <div className="flex flex-col items-center gap-4 border-4 border-dashed border-black p-4 md:flex-row md:gap-8">
      <img className="w-[200px]" src={`${imagePath}`} alt="none" />
      <div>
        <h1 className="underline-container text-xl md:text-2xl">
          {projectName}
        </h1>
        <div className="mb-2 p-1">
          {labels.map((label, i) => (
            <Label key={i} color={colors[i]} text={label}></Label>
          ))}
        </div>
        <p className="mb-2 md:text-lg">{projectDescription}</p>
        <Link to={liveLink} className="ml-1 text-sky-500">
          Live Demo
        </Link>
      </div>
    </div>
  );
}

export default Project;
