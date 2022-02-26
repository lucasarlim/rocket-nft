import React from 'react';

import { Container } from './styles';
import Astronauta1 from './../../assets/images/galeria-1.png'
import Astronauta2 from './../../assets/images/galeria-2.png'
import Astronauta3 from './../../assets/images/galeria-3.png'
import Astronauta4 from './../../assets/images/galeria-4.png'
import Astronauta5 from './../../assets/images/galeria-5.png'
import Astronauta6 from './../../assets/images/galeria-6.png'
import Astronauta7 from './../../assets/images/galeria-7.png'
import Astronauta8 from './../../assets/images/galeria-8.png'

const Gallery: React.FC = () => {
  return(
    <Container>
      <img src={Astronauta1} alt="" />
      <img src={Astronauta2} alt="" />
      <img src={Astronauta3} alt="" />
      <img src={Astronauta4} alt="" />
      <img src={Astronauta5} alt="" />
      <img src={Astronauta6} alt="" />
      <img src={Astronauta7} alt="" />
      <img src={Astronauta8} alt="" />
    </Container>
  )
}

export default Gallery;