import { Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
import { NavBar, ContentContainer } from "./Layout.styled";
import Logo from "../Logo/Logo";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <NavBar>
        <Logo />
        <SideBar />
      </NavBar>
      <ContentContainer>
        <Header />
        <Outlet />
      </ContentContainer>
    </>
  );
};

export default Layout;
