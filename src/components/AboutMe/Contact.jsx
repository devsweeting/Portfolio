import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Style from 'style-it';


const Wrapper = styled.section`
 justify-content: center;
 padding: 10px;
`;


function LifeStory(){

  return(
    <Wrapper>
      <p> Contact </p>
    </Wrapper>
  );
}


export default LifeStory;
