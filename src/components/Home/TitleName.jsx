import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import DrawerRight from './DrawerRight';
import Draggable from 'react-draggable';
import ChevronDown from '../../assets/ChevronDown.svg';
import ArrowDown from '../../assets/ArrowDown.png';

const BodyWrapper = styled.section`
  border-radius: 30px;
  width: auto;
  height: 300px;
  margin: 0 auto;
  margin-top: 10%;
  padding: 20px;
  opacity: 0.9;
  color: white;
`;

const Icons = styled.section `
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h1`
  font-size: 100px;
  color: white;
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i');
  font-family: 'IBM Plex Sans', sans-serif;
  `;
  
const Tagline= styled.h1`
  font-size: 40px;
  color: white;
  text-align: center;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,400i|IBM+Plex+Sans+Condensed:400,400i|IBM+Plex+Sans:100,100i,400,400i,700,700i|IBM+Plex+Serif:400,400i');
  font-family: 'IBM Plex Sans', sans-serif;
  `;
  
const Link = styled.a`
  color: white;
  font-size: 30px;
  text-decoration: none;
`;

const Arrow = styled.img`
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 50%
`;
  

function Body(){
  return (
      <BodyWrapper>
        <Title> Hello, I'm Devin! </Title>
        <Tagline> All-Star Dev | Code Fanatic | Awesome Human | Bleh</Tagline>
        <Icons>  
        <Link target="_blank" href="https://github.com/flexdinesh">Github |</Link>
  			<Link target="_blank" href="https://twitter.com/flexdinesh">| Twitter |</Link>
  			<Link target="_blank" href="https://www.linkedin.com/in/dineshpandiyan">| linkedin |</Link>
  			<Link target="_blank" href="https://www.freecodecamp.org">| FaceBook |</Link>
  			<Link target="_blank" href="https://www.behance.net">| Email |</Link>
        </Icons>
        
        <Arrow src={ArrowDown}/>
      </BodyWrapper>
  );
}

export default Body;