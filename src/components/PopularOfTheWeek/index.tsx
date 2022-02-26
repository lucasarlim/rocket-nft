import React from "react";

import {
  Container,
  Title,
  Name,
  CardsWrapper,
  NFTCard,
  ArtistName,
  Divider,
  Infos,
} from "./styles";
import Arrow from "./../../assets/svg/arrow-white.svg";
import Astronauta1 from "./../../assets/images/astronauta-1.png";
import Astronauta2 from "./../../assets/images/astronauta-2.png";
import Astronauta3 from "./../../assets/images/astronauta-3.png";
import Astronauta4 from "./../../assets/images/astronauta-4.png";

const PopularOfTheWeek: React.FC = () => {
  return (
    <Container>
      <Title>
        <span>Populares</span> da semana
      </Title>

      <div>
        <CardsWrapper>
          <NFTCard>
            <Infos>
              <div>
                <Name>Astronauta 1</Name>
                <img src={Arrow} />
              </div>

              <div>
                <ArtistName>Mayk Brito</ArtistName>
                <span>1.50 RKT</span>
              </div>
            </Infos>

            <img src={Astronauta1} alt="Astrounauta 1" />
          </NFTCard>
          <Divider />
          <NFTCard>
            <Infos>
              <div>
                <Name>Astronauta 2</Name>
                <img src={Arrow} />
              </div>

              <div>
                <ArtistName>Jakeliny Gracielly</ArtistName>
                <span>2.0 RKT</span>
              </div>
            </Infos>

            <img src={Astronauta2} alt="Astrounauta 2" />
          </NFTCard>
        </CardsWrapper>
        <CardsWrapper>
          <NFTCard>
            <Infos>
              <div>
                <Name>Astronauta 3</Name>
                <img src={Arrow} />
              </div>

              <div>
                <ArtistName>João Inácio (Biro)</ArtistName>
                <span>3.75 RKT</span>
              </div>
            </Infos>

            <img src={Astronauta3} alt="Astrounauta 3" />
          </NFTCard>
          <Divider />
          <NFTCard>
            <Infos>
              <div>
                <Name>Astronauta 4</Name>
                <img src={Arrow} />
              </div>

              <div>
                <ArtistName>Tamires Santos</ArtistName>
                <span>4.30 RKT</span>
              </div>
            </Infos>

            <img src={Astronauta4} alt="Astrounauta 4" />
          </NFTCard>
        </CardsWrapper>
      </div>
    </Container>
  );
};

export default PopularOfTheWeek;
