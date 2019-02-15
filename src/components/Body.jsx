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
  @import url('https://fonts.googleapis.com/css?family=Indie+Flower');
  font-family: 'Indie Flower', cursive;
`;
const Content = styled.p `
  color: white;
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
