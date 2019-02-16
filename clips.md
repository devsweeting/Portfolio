
## Shades of Blue gradient
background: linear-gradient(270deg, #090961, #07194a, #0d3a61, #073c4a, #09615b);
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

## Hanging left body styling
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

## Hanging center body styling
const BodyWrapper = styled.section`
  width: 120%;
  height: 200px;
  position: relative;
  left: -10px;
  bottom: 60%;
  background: black;
  opacity: 0.7;
  color: white;
''';

##Simple Particles
<Particles
    params={{
      "particles": {
          "number": {
              "value": 300
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
  
  
  ----------------------------
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
  ------------------------
  
  import React from "react";
  import { Switch, Route } from 'react-router-dom';
  import { createGlobalStyle } from "styled-components";
  import Body from './Body';
  import HomeMenu from './HomeMenu';
  import Particles from 'react-particles-js';
  import styled from 'styled-components';
  import TitleName from './TitleName';

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


  class App extends React.Component{
      render(){
          return (
            <Wrapper>
                      <HomeMenu />
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
              <Body />
            </Wrapper>
          );
      };
  }

  export default App;

-------------------------
