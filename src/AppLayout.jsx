import { Outlet } from "react-router-dom";
import Header from "./Components/Header";

function AppLayout() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default AppLayout;