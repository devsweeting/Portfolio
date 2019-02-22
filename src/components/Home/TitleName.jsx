import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import DrawerRight from './DrawerRight';
import Draggable from 'react-draggable';


const ContentWrapper = styled.section`
  padding: 20px;
  background: black;
  opacity: 0.8;
  color: white;
  height: 100%;
  width: 300px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i');
  font-family: 'IBM Plex Sans', sans-serif;
  `;
  
const SubHeader= styled.h1`
  margin-top: -5;
  font-size: 30px;
  color: white;
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i');
  font-family: 'IBM Plex Sans', sans-serif;
  `;
  

function Body(){
  return (
      <ContentWrapper>  
        <Title> Devin Sweeting </Title>
        <SubHeader>Junior Web Developer</SubHeader>
        <DrawerRight />  
          <p>So down here somewhere we talk about why an employer should hire me, but lets be real, of course they want to hire me. Why would they not, I could've filled this empty space with Lorem Ipsum but instead im frantically typing until this space is filled.</p>    
      </ContentWrapper>
  );
}

export default Body;