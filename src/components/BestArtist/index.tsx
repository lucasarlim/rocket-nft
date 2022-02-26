import React from 'react';

import { Container, Title, CardsArtists, ExploreButton, Artist } from './styles';
import Arrow from './../../assets/svg/arrow-orange.svg'
import Artist1 from './../../assets/images/artista-1.png'
import Artist2 from './../../assets/images/artista-2.png'
import Artist3 from './../../assets/images/artista-3.png'
import Artist4 from './../../assets/images/artista-4.png'
import Artist5 from './../../assets/images/artista-5.png'
import Artist6 from './../../assets/images/artista-6.png'

const BestArtists: React.FC = () => {
  return(
    <Container>
      <Title>Melhores <strong>artistas</strong></Title>

      <CardsArtists>
        <Artist>
          <img src={Artist1} />
          <div>
            <span>Mayk Brito</span>
            <p>80 Fotografias</p>
          </div>
        </Artist>
        <Artist>
          <img src={Artist2} />
          <div>
            <span>Jakeliny G.</span>
            <p>99 Fotografias</p>
          </div>
        </Artist>
        <Artist>
          <img src={Artist3} />
          <div>
            <span>João I. (Biro)</span>
            <p>50 Fotografias</p>
          </div>
        </Artist>
        <Artist>
          <img src={Artist4} />
          <div>
            <span>Tamires Santos</span>
            <p>43 Fotografias</p>
          </div>
        </Artist>
        <Artist>
          <img src={Artist5} />
          <div>
            <span>Ana Silva</span>
            <p>28 Fotografias</p>
          </div>
        </Artist>
        <Artist>
          <img src={Artist6} />
          <div>
            <span>Diego F.</span>
            <p>20 Fotografias</p>
          </div>
        </Artist>
      </CardsArtists>

      <ExploreButton>
        <span>Ver todos os artistas</span>
        <img src={Arrow} />
      </ExploreButton>
    </Container>
  );
}

export default BestArtists;