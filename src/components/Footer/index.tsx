import React from "react";

import {
  Container,
  MiddleInfo,
  SocialMidias,
  InputWrapper,
  Input,
  SubmitButton,
  NavSection,
  NavLinks,
  TopInfo,
  BottomInfo,
  NewsletterSection,
} from "./styles";
import Logo from "./../../assets/svg/logo.svg";
import Arrow from "./../../assets/svg/arrow-black.svg";
import Instagram from "./../../assets/svg/instagram.svg";
import Youtube from "./../../assets/svg/youtube.svg";
import Twitter from "./../../assets/svg/twitter.svg";
import Email from "./../../assets/svg/email.svg";

const Footer: React.FC = () => {
  return (
    <Container>
      <TopInfo>
        <img src={Logo} alt="Rocket NFTs Logo" />

        <a>
          <img src={Arrow} alt="" />
        </a>
      </TopInfo>

      <MiddleInfo>
        <NewsletterSection>
          <p>
            Fique por dentro de <span>todas as novidades</span>
          </p>

          <InputWrapper>
            <Input placeholder="nft@rocketseat.com.br" />
            <SubmitButton>Enviar</SubmitButton>
          </InputWrapper>
        </NewsletterSection>

        <NavSection>
          <div>
            <strong>Empresa</strong>
            <NavLinks>
              <a href="">Sobre</a>
              <a href="">Serviços</a>
              <a href="">Time</a>
              <a href="">Carreira</a>
            </NavLinks>
          </div>
          <div>
            <strong>Mapa</strong>
            <NavLinks>
              <a href="">Galeria</a>
              <a href="">Populares</a>
              <a href="">Vendas</a>
              <a href="">Contato</a>
            </NavLinks>
          </div>
          <div>
            <strong>Links</strong>
            <NavLinks>
              <a href="">FAQs</a>
              <a href="">Termos</a>
              <a href="">Política</a>
              <a href="">Ajuda</a>
            </NavLinks>
          </div>
        </NavSection>
      </MiddleInfo>

      <BottomInfo>
        <p>www.rocketseat.com.br</p>
        <SocialMidias>
          <img src={Instagram} alt="Instagram" />
          <img src={Youtube} alt="Youtube" />
          <img src={Twitter} alt="Twitter" />
          <img src={Email} alt="Email" />
        </SocialMidias>
      </BottomInfo>
    </Container>
  );
};

export default Footer;
