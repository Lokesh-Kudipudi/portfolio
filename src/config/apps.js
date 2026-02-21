import About from "../apps/About";
import Projects from "../apps/Projects";
import Skills from "../apps/Skills";
import Contact from "../apps/Contact";
import Resume from "../apps/Resume";
import Gallery from "../apps/Gallery";
import ProjectWindow from "../apps/ProjectWindow";
import NotesApp from "../apps/NotesApp";
import PreviewApp from "../apps/PreviewApp";
import projects from "./projects";

const apps = {
  about: {
    id: "about",
    title: "About Me",
    component: About,
    width: 600,
    height: 500,
  },
  projects: {
    id: "projects",
    title: "Overview",
    component: Projects,
    width: 800,
    height: 600,
  },
  skills: {
    id: "skills",
    title: "Skills",
    component: Skills,
    width: 800,
    height: 500,
  },
  contact: {
    id: "contact",
    title: "Contact",
    component: Contact,
    width: 1000,
    height: 500,
  },
  resume: {
    id: "resume",
    title: "Resume",
    component: Resume,
    width: 700,
    height: 500,
  },
  gallery: {
    id: "gallery",
    title: "Gallery",
    component: Gallery,
    width: 800,
    height: 600,
  },
  notes: {
    id: "notes",
    title: "Notes",
    component: NotesApp,
    width: 520,
    height: 420,
  },
  preview: {
    id: "preview",
    title: "Preview",
    component: PreviewApp,
    width: 640,
    height: 480,
  },
};

projects.forEach((project) => {
  apps[project.appId] = {
    id: project.appId,
    title: project.title,
    component: ProjectWindow,
    width: project.window?.width ?? 860,
    height: project.window?.height ?? 620,
  };
});

export default apps;
