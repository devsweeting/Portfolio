import React from "react";
import styled from 'styled-components';
import ParticlesView from './ParticlesView';
import AboutMe from '../AboutMe/AboutMe';
import Title from './Title';

function Body(){
  return (
    <div>
      <div>
        <ParticlesView/>
        <Title />
        <AboutMe />
      </div>
    </div>
  );
}

export default Body;
