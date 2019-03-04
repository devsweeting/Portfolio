import React from 'react';
import styled from 'styled-components';


const DogWrapper = styled.section`
  margin-top: 200px;
  width: 100vw;
  height: 100px;
  background-color: #989291;
  position: relative;
`;

const DogRun = styled.section`
  position: relative;
  animation-name: run;
  animation-duration: 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes run {
    from {left: -15%;}
    to {left: 115%;}
  }
`;

const DogImg = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  }

  @keyframes dealBlink0 {
  0% {opacity: 0;}
  70% {opacity: 0;}
  71% {opacity: 1;}
  100% {opacity: 1;}
  }

  @keyframes dealBlink1 {
  0% {opacity: 1;}
  25% {opacity: 1;}
  26% {opacity: 0;}
  100% {opacity: 0;}
`;

const Deal0 = styled.p`
  opacity: 1;
  position: absolute;
  left: 0;
  transform: translate(10px, -170px) rotate(21.8deg);
  color: #ff0080;
  font-family: 'Comic Sans MS';
  font-size: 3em;
  text-shadow: 2px 2px #ffff00;
  animation-name: dealBlink0;
  animation-duration: 1.21s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

const Deal1 = styled.p`
  opacity: 1;
  position: absolute;
  left: 0;
  transform: translate(-136px, -170px) rotate(-13.8deg);
  color: #37ff00;
  font-family: 'Comic Sans MS';
  font-size: 2.6em;
  text-shadow: 2px 2px #FF0000;
  animation-name: dealBlink1;
  animation-duration: 1.34s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;


function Dog(){
  return(
      <DogWrapper>
        <DogRun>
          <Deal0>Hire Me!</Deal0>
          <Deal1>Hire Me!</Deal1>
          <DogImg src='https://data.whicdn.com/images/242549186/original.gif'/>
        </DogRun>
      </DogWrapper>
  );
}

export default Dog;
