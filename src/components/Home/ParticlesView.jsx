import React from "react";
import Particles from 'react-particles-js';
import styled from 'styled-components';

const BodyWrapper = styled.section`
position: fixed;
top: 0;
left: 0;
width: 110%;
height: 100%;

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

function ParticlesView(){
  return (
      <BodyWrapper>
        <Particles
            params={{
              "particles": {
                  "number": {
                      "value": 150,
                      "density": {
                          "enable": true,
                          "value_area": 1803.4120608655228
                      },
                  },
                  "color": {
                      "value": "#d38d9f"
                  },
                  "size": {
                      "value": 5
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
      </BodyWrapper>
  );
}

export default ParticlesView;
