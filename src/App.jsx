import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import ContactMe from "./Pages/ContactMe";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./AppLayout";
import DarkModeProvider from "./context/DarkModeProvider";
import AboutMe from "./Pages/AboutMe";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout></AppLayout>}>
            <Route index element={<Homepage></Homepage>}></Route>
            <Route path="/skills" element={<Skills></Skills>}></Route>
            <Route path="/projects" element={<Projects></Projects>}></Route>
            <Route path="/contactme" element={<ContactMe></ContactMe>}></Route>
            <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
