import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import headshot from '../../assets/headshot.jpg';


const Wrapper = styled.section`
 display: flex;
 justify-content: center;
`;

const SelfieImg = styled.img`
  color: white;
  height: 360px;
  border-radius: 50%;
  box-shadow: 10px 10px 7px black;
  margin-top: 40px;
`;


function Selfie(){

  return (
    <Wrapper>
      <SelfieImg src={headshot}/>
    </Wrapper>
  );
}


export default Selfie;
