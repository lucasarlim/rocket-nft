import React, { useContext } from "react";

import { Container, Pages, NavLink } from "./styles";
import Logo from "./../../assets/svg/logo.svg";
import menu from "./../../assets/svg/menu-buguer-open.svg";

import ButtonMetamask from "../ButtonMetamask";
import { SidebarContext } from "../../App";

const Header: React.FC = () => {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <Container id="#">
      <img src={Logo} className='logo' alt="Rocket NFTs Logo" />

      <Pages>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Inicio{" "}
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Comprar NFT
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Sobre
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          FAQ
        </NavLink>
      </Pages>

      <img src={menu} className="sidebarIcon" alt="" onClick={() => setSidebar(!sidebar)}/>
      <ButtonMetamask />
    </Container>
  );
};

export default Header;
