import React from "react";
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import Body from './Home/Body';
import HomeMenu from './Home/HomeMenu';
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
background-color: red;
`;


class App extends React.Component{
    render(){
        return (
          <Wrapper>
            <Body />
          </Wrapper>
        );
    };
}

export default App;
