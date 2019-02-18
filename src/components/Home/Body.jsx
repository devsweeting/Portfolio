import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeMenu from './HomeMenu';
import DrawerRight from './DrawerRight';
import Particles from 'react-particles-js';
import TitleName from './TitleName';


const BodyWrapper = styled.section`
position: fixed; 
top: 0; 
left: 0; 
width: 110%;
height: 100%;
overflow: visible;

background: linear-gradient(270deg, #040d24, #093e54, #065958, #04393d, #03362d);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 30s ease infinite;
-moz-animation: AnimationName 30s ease infinite;
animation: AnimationName 30s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
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
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 300,
                      "density": {
                          "enable": true,
                          "value_area": 1803.4120608655228
                      },
                  },
                  "color": {
                      "value": "#d38d9f"
                  },
                  "size": {
                      "value": 8
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
          }} 
        />
        <TitleName />
      </BodyWrapper>
  );
}

export default Body;
