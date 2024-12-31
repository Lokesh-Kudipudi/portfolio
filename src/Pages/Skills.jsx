import Skill from "../Components/Skill";
import handleHover from "../utils/index";

function Skills() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center gap-8">
      <h1 className="underline-container text-4xl font-bold italic after:bg-black dark:text-white dark:after:bg-white">
        These are my Skills!
      </h1>
      <div
        onMouseOver={(e) => handleHover(e, 0.5)}
        onMouseOut={(e) => handleHover(e, 1)}
        className="skills grid h-[65vh] grid-cols-2 gap-x-4 gap-y-3 overflow-scroll p-6 sm:grid-cols-3 md:grid-cols-4 md:gap-x-12 md:gap-y-6"
      >
        <Skill imagePath="nextjs.svg" text="NextJs" invert={true}></Skill>
        <Skill imagePath="react.svg" text="ReactJS" invert={false}></Skill>
        <Skill
          imagePath="tailwind-css.svg"
          text="Tailwind"
          invert={false}
        ></Skill>
        <Skill
          imagePath="socketio.svg"
          className="h-[150px]"
          text="SocketIO"
          invert={true}
        ></Skill>
        <Skill imagePath="nodejs.svg" text="NodeJS" invert={false}></Skill>
        <Skill imagePath="mongodb.svg" text="MongoDB" invert={false}></Skill>
        <Skill
          imagePath="supabase.svg"
          className="h-[240px]"
          text="Supabase"
          invert={false}
        ></Skill>
        <Skill imagePath="html.svg" text="HTML" invert={false}></Skill>
        <Skill imagePath="css.svg" text="CSS" invert={false}></Skill>
        <Skill imagePath="js.svg" text="Javascript" invert={false}></Skill>
      </div>
    </section>
  );
}

export default Skills;
