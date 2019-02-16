import React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  border: solid 1px white;
`;


function TitleName(){
  return (
    <Title>Devin Sweeting</Title>
  );
}

export default TitleName;