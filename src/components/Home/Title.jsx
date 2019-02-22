import React from "react";
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import arrowdown from '../../assets/arrowdown.svg';
import resume from '../../assets/resume.svg';
import email from '../../assets/email.svg';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';

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

const IconsList = styled.section `
  display: flex;
  justify-content: space-around;
`;

const Header= styled.h1`
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

const Icon = styled.img`
  color: white;
  height: 60px;
`;


const Arrow = styled.img`
  height: 100px;
  margin-bottom: 100px;
  position: relative;
  left: 45%;
  top: 80px;
`;

const Pulsate = styled.section`
`;


function Title(){
  return (
      <BodyWrapper>
        <Header> Hello, I'm Devin! </Header>
        <Tagline> All-Star Dev | Code Fanatic | Awesome Human | Bleh</Tagline>
        <IconsList>
        <a target="_blank" href="https://github.com/devsweeting">
          <Icon src={github}  />
        </a>
        <a target="_blank" href="https://twitter.com/wholly_ravioli">
          <Icon src={twitter} target="_blank" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/devinsweeting/">
          <Icon src={linkedin} target="_blank" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/devinsweeting/">
          <Icon src={facebook} target="_blank" />
        </a>
        <a target="_blank" href="mailto:devinsweeting@gmail.com">
          <Icon src={email} target="_blank" />
        </a>
        <a target="_blank" href="Load pdf">
          <Icon src={resume} target="_blank" />
        </a>
        </IconsList>

        <Link to="/about"><Arrow src={arrowdown}/></Link>
      </BodyWrapper>
  );
}

export default Title;