import React from 'react';

import {
  Route,
  BrowserRouter,
  Routes as RoutesContainer,
} from 'react-router-dom';
import About from '../pages/About';
import Help from '../pages/Help';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';

const Routes: React.FC = () => {
  return(
    <BrowserRouter>
      <RoutesContainer>
        <Route element={<Home />} path="/" />
        <Route element={<Marketplace />} path="/marketplace" />
        <Route element={<About />} path="/about" />
        <Route element={<Help />} path="/help" />
      </RoutesContainer>
    </BrowserRouter>
  );
}

export default Routes;