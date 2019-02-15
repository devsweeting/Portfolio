import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const BodyWrapper = styled.section`
  border: solid 1px slategrey;
  width: 30%;
  position: relative;
  left: 10em;
  bottom: 60%;
  background: black;
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
  padding: 20px;
  @import url('https://fonts.googleapis.com/css?family=Righteous');  
  font-family: 'Righteous', cursive;
  text-shadow: 4px 4px 4px #aaa;
  `;
  
const Content = styled.p `
  color: white;
  @import url('https://fonts.googleapis.com/css?family=Barlow');
  font-family: 'Barlow', sans-serif;
  text-shadow: 4px 4px 4px #aaa;
`;

function Body(){
  return (
    <BodyWrapper>
      <Title>Devin Sweeting</Title>
      <Content>An aspiring develoepr in ruby react. Life is an adventure.</Content>
    </BodyWrapper>
  );
}

export default Body;
