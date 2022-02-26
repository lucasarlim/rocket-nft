import React from "react";
import BestArtists from "../BestArtist";
import Footer from "../Footer";
import Gallery from "../Gallery";
import Header from "../Header";
import MainHeadline from "../MainHeadline";
import PopularOfTheWeek from "../PopularOfTheWeek";
import SocialProof from "../SocialProof";

import { Container, Content, BackgroundWrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container> 
      <BackgroundWrapper>
        <Content>
          <Header />
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
  );
};

export default Layout;
