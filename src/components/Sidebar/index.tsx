import React, { useContext } from "react";
import { SidebarContext } from "../../App";

import { Container, Pages, NavLink, IconWrapper } from "./styles";
import close from "./../../assets/svg/menu-buguer-close.svg";
import ButtonMetamask from "../ButtonMetamask";

const Sidebar: React.FC = () => {
  const { sidebar, setSidebar } = useContext(SidebarContext);

  return (
    <Container>
      <div>
        <IconWrapper>
          <img src={close} alt="" onClick={() => setSidebar(!sidebar)} />
        </IconWrapper>

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
      </div>

      <ButtonMetamask />
    </Container>
  );
};

export default Sidebar;
