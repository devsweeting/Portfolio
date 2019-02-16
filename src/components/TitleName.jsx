import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  max-width: 30%;
  font-size: 50px;
  height: -20px;
  border: solid 1px white;
  position: relative;
  top: 50%;
`;


function TitleName(){
  return (
    <Title>Devin Sweeting</Title>
  );
}

export default TitleName;