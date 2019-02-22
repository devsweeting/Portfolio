import React from "react";
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import DrawerRight from './DrawerRight';
import Particles from 'react-particles-js';
import Title from './Title';
import ParticlesView from './ParticlesView';
import AboutMe from './AboutMe';


function Body(){
  return (
      <div>
        <ParticlesView/>
        <Title />
      </div>
  );
}

export default Body;
