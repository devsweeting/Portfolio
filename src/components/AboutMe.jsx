import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 100%;
background: tomato;
`;


function AboutMe(){
  return (
      <Wrapper>
        <p> About Me Page </p>
      </Wrapper>
  );
}

export default AboutMe;
