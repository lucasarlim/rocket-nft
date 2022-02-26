import React from 'react';

import { Container, Pages, ButtonMetamask } from './styles';
import Logo from './../../assets/svg/logo.svg'
import Metamask from './../../assets/svg/logo_MetaMask.svg'

const Header: React.FC = () => {
  return(
    <Container>

      <img src={Logo} alt="Rocket NFTs Logo"/>
      
      <Pages>
        <a href="">Comprar NFT</a>
        <a href="">Sobre</a>
        <a href="">FAQ</a>
      </Pages>

      <ButtonMetamask>
        <img src={Metamask} alt="Metamask Logo" />
        <span>Conectar carteira</span>
      </ButtonMetamask>

    </Container>
  );
}

export default Header;