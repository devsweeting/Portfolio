import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import DrawerRight from './DrawerRight';
import Draggable from 'react-draggable';


const BodyWrapper = styled.section`
  height: 400px;
  margin-left: 258px;
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 20px;
  background: black;
  color: white;
`;

const ContentWrapper = styled.section `
  background: red;
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
        <BodyWrapper>  
        <Title> Devin Sweeting </Title>
        <SubHeader>Junior Web Developer</SubHeader>
          <p>So down here somewhere we talk about why an employer should hire me, but lets be real, of course they want to hire me. Why would they not, I could've filled this empty space with Lorem Ipsum but instead im frantically typing until this space is filled.</p>    
          <DrawerRight />  
        </BodyWrapper>
      </ContentWrapper>
  );
}

export default Body;