import Skill from "../Components/Skill";
import handleHover from "../utils/index";

function Skills() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-8">
      <h1 className="underline-container text-2xl font-bold">
        These are my Skills!
      </h1>
      <div
        onMouseOver={(e) => handleHover(e, 0.5)}
        onMouseOut={(e) => handleHover(e, 1)}
        className="skills grid h-[65vh] grid-cols-2 gap-x-4 gap-y-3 overflow-scroll p-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-12 md:gap-y-6"
      >
        <Skill imagePath="react.svg" text="ReactJS"></Skill>
        <Skill imagePath="tailwind-css.svg" text="Tailwind"></Skill>
        <Skill
          imagePath="socketio.svg"
          className="h-[150px]"
          text="SocketIO"
        ></Skill>
        <Skill imagePath="nodejs.svg" text="NodeJS"></Skill>
        <Skill imagePath="mongodb.svg" text="MongoDB"></Skill>
        <Skill
          imagePath="supabase.svg"
          className="h-[240px]"
          text="Supabase"
        ></Skill>
        <Skill imagePath="html.svg" text="HTML"></Skill>
        <Skill imagePath="css.svg" text="CSS"></Skill>
        <Skill imagePath="js.svg" text="Javascript"></Skill>
      </div>
    </section>
  );
}

export default Skills;
