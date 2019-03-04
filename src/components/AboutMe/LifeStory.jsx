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
      <p> Born and Raised in the Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a nisi id ligula faucibus condimentum eu quis magna. Vestibulum lobortis imperdiet cursus. Curabitur tempus lectus quis turpis faucibus cursus. Pellentesque quis posuere arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam volutpat lectus vel ultrices mattis. Quisque in neque ut ex luctus fermentum vitae at mi. Sed laoreet convallis orci, vitae scelerisque dui convallis ac. </p>
    </Wrapper>
);
}


export default LifeStory;
