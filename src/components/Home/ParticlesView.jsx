import React from "react";
import Particles from 'react-particles-js';
import styled from 'styled-components';

const BodyWrapper = styled.section`
position: fixed;
top: 0;
left: 0;
width: 110%;
height: 100%;

background: linear-gradient(304deg, #4662b8, #587be8, #52a3cf, #5fb8b2, #3ba16e);
background-size: 1000% 1000%;

-webkit-animation: AnimationName 32s ease infinite;
-moz-animation: AnimationName 32s ease infinite;
animation: AnimationName 32s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 14%}
    50%{background-position:100% 87%}
    100%{background-position:0% 14%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 14%}
    50%{background-position:100% 87%}
    100%{background-position:0% 14%}
}
@keyframes AnimationName {
    0%{background-position:0% 14%}
    50%{background-position:100% 87%}
    100%{background-position:0% 14%}
}
`;

function ParticlesView(){
  return (
      <BodyWrapper>
        <Particles
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
          }}
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
                      "value": 0
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
