import Project from "../Components/Project";

function Projects() {
  return (
    <section className="mx-auto flex max-w-[1200px] flex-col items-center">
      <h1 className="underline-container mb-6 w-[fit] text-2xl font-bold">
        Here are my Projects!
      </h1>
      <div className="flex h-[65vh] flex-col gap-4 overflow-scroll p-6">
        <Project
          imagePath="project1.png"
          projectName="My Portifolio"
          projectDescription="In this Project, I used ReactJs along with tailwindCSS and implemented a simple minialistic webpage to showcase my skills and projects. "
          labels={["ReactJS", "Tailwind"]}
          colors={["#58c4dc", "#68c7f0"]}
          liveLink="/"
        ></Project>
        <Project
          imagePath="project2.png"
          projectName="Tic-Tac-Toe"
          projectDescription="In this project, I used only HTML, CSS and Javasript to make a simple tic-tac-toe game. I will also try to integrate an AI based computer move soon!"
          labels={["HTML", "CSS", "Javascript"]}
          colors={["#dd4b25", "#254bdd", "#efd81d"]}
          liveLink="https://lokesh-kudipudi.github.io/Tic-Tac-Toe-Js-Game/"
        ></Project>
      </div>
    </section>
  );
}

export default Projects;
