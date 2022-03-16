import React from 'react';

import { Container } from './styles';
import Metamask from './../../assets/svg/logo_MetaMask.svg'


const ButtonMetamask: React.FC = () => {
  return(
    <Container>
      <img src={Metamask} alt="Metamask Logo" />
      <span>Conectar carteira</span>
    </Container>
  );
}

export default ButtonMetamask;