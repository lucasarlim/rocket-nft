import React, { useContext } from "react";
import { SidebarContext } from "../../App";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { Container } from "./styles";

const Marketplace: React.FC = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <>
      {sidebar ? (
        <Container>
          <Sidebar />
        </Container>
      ) : (
        <Container>
          <Header />
        </Container>
      )}
    </>
  );
};

export default Marketplace;
