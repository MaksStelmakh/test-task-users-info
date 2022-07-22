import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";

const Layout = () => {
  return (
    <>
      <div>
        <SideBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
