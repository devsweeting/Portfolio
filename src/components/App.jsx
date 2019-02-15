import React from "react";
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Body from './Body';
import HomeMenu from './HomeMenu';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
    color: white;
  }
`;

const Wrapper = styled.section `
  position: fixed; 
  top: 0; 
  left: 0; 
  width: 100%;
  height: 80em;
  border: 1px solid black;
  
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



class App extends React.Component{
    render(){
        return (
          <Wrapper>
                  <HomeMenu />
          <Particles
              params={{
                "particles": {
                    "number": {
                        "value": 200
                    },
                    "size": {
                        "value": 3
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
            }} />
            
            <Body />
          </Wrapper>
        );
    };

}

export default App;
