import React from "react";

import { Container, News, NumbersSection, NewsSection } from "./styles";
import Banner from "./../../assets/images/banner.png"

const SocialProof: React.FC = () => {
  return (
    <Container>
      <NumbersSection>
        <div>
          <strong>10K+</strong>
          <p>Artes</p>
        </div>
        <div>
          <strong>200+</strong>
          <p>Vendas</p>
        </div>
        <div>
          <strong>20</strong>
          <p>Artistas</p>
        </div>
      </NumbersSection>

      <NewsSection>
        <News>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id <a href="">potenti diam</a> et cras
            odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
            nunc semper.
          </p>

          <a href="">Lorem Ipsum</a>
        </News>
        <News>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue
            malesuada amet pretium lacus. Id <a href="">potenti diam</a> et cras
            odio viverra. Amet, velit ut hac sit. Enim ultricies mauris mattis
            nunc semper.
          </p>

          <a href="">Lorem Ipsum</a>
        </News>
      </NewsSection>

      <img src={Banner} alt="" />

    </Container>
  );
};

export default SocialProof;
