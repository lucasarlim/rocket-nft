import React, { useContext } from "react";
import { SidebarContext } from "../../App";
import BestArtists from "../../components/BestArtist";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import Header from "../../components/Header";
import MainHeadline from "../../components/MainHeadline";
import PopularOfTheWeek from "../../components/PopularOfTheWeek";
import SocialProof from "../../components/SocialProof";

import { Container, BackgroundWrapper, Content } from "./styles";
import Sidebar from "../../components/Sidebar";

const Home: React.FC = () => {
  const { sidebar } = useContext(SidebarContext);

  return (
    <>
      {sidebar ? (
        <Container>
          <Sidebar />
        </Container>
      ) : (
        <Container>
          <BackgroundWrapper>
            
            <Header />
            
            <Content>
              <MainHeadline />
              <Gallery />
            </Content>

          </BackgroundWrapper>

          <Content>
            <SocialProof />
            <PopularOfTheWeek />
            <BestArtists />
          </Content>

          <Footer />
        </Container>
      )}
    </>
  );
};

export default Home;
