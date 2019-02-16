import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import DrawerRight from './DrawerRight';



const BodyWrapper = styled.section`
  border: solid 1px slategrey;
  border-radius: 30px;
  width: 40%;
  position: relative;
  left: 15em;
  bottom: 65%;
  background: black;
  opacity: 0.7;
  color: white;
`;

const ContentWrapper = styled.section `
`;

const Title = styled.h1`
  font-size: 20px;
  color: white;
  padding-left: 40px;
  padding-right: 40px;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i');
  font-family: 'IBM Plex Sans', sans-serif;
  `;
  

function Body(){
  return (
      <BodyWrapper>
        <ContentWrapper>
        <Title> 
        <h1>Devin Sweeting is an Junior Web Developer from Portland, OR</h1>
        
        <p>So down here somewhere we talk about why an employer should hire me, but lets be real, of course they want to hire me. Why would they not, I could've filled this empty space with Lorem Ipsum but instead im frantically typing until this space is filled.</p>
        </Title>
        <DrawerRight />
        </ContentWrapper>
      </BodyWrapper>
  );
}

export default Body;