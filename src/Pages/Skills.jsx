import Skill from "../Components/Skill";
import handleHover from "../utils/index";

function Skills() {
  return (
    <section className="mx-auto flex h-[70vh] max-w-[1200px] flex-col items-center gap-8">
      <h1 className="underline-container text-4xl font-bold">
        These are my Skills!
      </h1>
      <div
        onMouseOver={(e) => handleHover(e, 0.5)}
        onMouseOut={(e) => handleHover(e, 1)}
        className="skills grid grid-cols-4 gap-x-12 gap-y-6 overflow-scroll p-14"
      >
        <Skill imagePath="html.svg" text="HTML"></Skill>
        <Skill imagePath="css.svg" text="CSS"></Skill>
        <Skill imagePath="js.svg" text="Javascript"></Skill>
        <Skill imagePath="react.svg" text="ReactJS"></Skill>
        <Skill imagePath="nodejs.svg" text="NodeJS"></Skill>
        <Skill imagePath="tailwind-css.svg" text="Tailwind"></Skill>
        <Skill imagePath="mongodb.svg" text="MongoDB"></Skill>
        <Skill
          imagePath="supabase.svg"
          className="h-[240px]"
          text="Supabase"
        ></Skill>
      </div>
    </section>
  );
}

export default Skills;
