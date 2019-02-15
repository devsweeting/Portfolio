import React from "react";
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Body from './Body';
import Particles from 'react-particles-js';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato');
    font-family: 'Lato', sans-serif;
  }
`;

const Wrapper = styled.section `
  max-width: 100%;
  max-height: 100%;
  border: 1px solid black;
  background-color: black;
`;



class App extends React.Component{
    render(){
        return (
          <Wrapper>
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
          </Wrapper>
        );
    };

}

export default App;
