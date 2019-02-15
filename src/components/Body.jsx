import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const BodyWrapper = styled.section`
  border: solid 1px white;
  width: 30%;
  position: relative;
  left: 10em;
  bottom: 60%;
`;

const Title = styled.h1`
  color: white;
  padding: 20px;
`;
function Body(){
  return (
    <BodyWrapper>
      <Title>Devin Sweeting</Title>
    </BodyWrapper>
  );
}

export default Body;
