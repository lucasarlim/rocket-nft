import React from "react";

import { Container, Title, DescriptionContent, ArtistsContent } from "./styles";
import Avatars from "./../../assets/images/group-avarts.png";
import Badge from "./../../assets/svg/badge.svg";

const MainHeadline: React.FC = () => {
  return (
    <Container>
      <DescriptionContent>
        <p>
          Mercado digital para colecionáveis em criptos e tokens não fungível
          (NFT). Compre, venda e descubra ativos digitais exclusivos para você.
        </p>

        <ArtistsContent>
          <img src={Avatars} alt="Artistas" />
          <div>
            <span>+10</span>
            <p>Artistas selecionados</p>
          </div>
        </ArtistsContent>
      </DescriptionContent>

      <Title>
        Descubra a verdadeira arte digital e colecione diversas{" "}
        <strong>NFTs</strong>
      </Title>

      <img src={Badge} alt="Badge" />
    </Container>
  );
};

export default MainHeadline;
