import React from "react";
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import AboutMe from '../AboutMe';
import DrawerRight from './DrawerRight';
import Particles from 'react-particles-js';
import Title from './Title';
import ParticlesView from './ParticlesView';


function Body(){
  return (
      <div>
        <ParticlesView/>
        <Title />
        <AboutMe />
      </div>
  );
}

export default Body;
