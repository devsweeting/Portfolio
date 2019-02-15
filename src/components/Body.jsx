import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ImgMediaCard from './ImgMediaCard';
import HomeMenu from './HomeMenu';
import BottomNav from './BottomNav';


const BodyWrapper = styled.section`
  width: 120%;
  height: 400px;
  position: fixed;
  left: -10px;
  bottom: 0;
  background: black;
  color: white;
`;

const ContentWrapper = styled.section `
margin-left: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  color: white;
  padding: 20px;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i');
  font-family: 'IBM Plex Sans', sans-serif;
  text-shadow: 2px 2px 2px #aaa;
  `;
  
const Content = styled.p `
  color: white;
  @import url('https://fonts.googleapis.com/css?family=Barlow:300');
  font-family: 'Barlow', sans-serif;
  text-shadow: 4px 4px 4px #aaa;
`;

function Body(){
  return (
      <BodyWrapper>
        <ContentWrapper>
        <Title>Devin Sweeting</Title>

        <Content>An aspiring develoepr in ruby react. Life is an adventure.</Content>
        </ContentWrapper>
      </BodyWrapper>
  );
}

export default Body;
