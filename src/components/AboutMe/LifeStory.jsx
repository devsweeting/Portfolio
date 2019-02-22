import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Style from 'style-it';


const Wrapper = styled.section`
 justify-content: center;
 padding: 10px;
`;


function LifeStory(){

  return Style.it(`
  .intro:hover {
    transition: transform .2s;
    transform: scale(1.5)
  }
`,

    <Wrapper>
      <p className="intro">CSS-in-JS made simple -- just Style It.</p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a nisi id ligula faucibus condimentum eu quis magna. Vestibulum lobortis imperdiet cursus. Curabitur tempus lectus quis turpis faucibus cursus. Pellentesque quis posuere arcu. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam volutpat lectus vel ultrices mattis. Quisque in neque ut ex luctus fermentum vitae at mi. Sed laoreet convallis orci, vitae scelerisque dui convallis ac. </p>

        <p>Cras tincidunt ut velit eget elementum. Cras eget rhoncus est, non consequat odio. Duis sodales sem risus, nec posuere eros semper sit amet. Vivamus diam purus, consequat nec sodales molestie, pellentesque id sapien. Vivamus eget purus non metus fringilla varius. Etiam hendrerit vestibulum est nec vestibulum. In ac est lacinia, condimentum risus a, lacinia ante. Vivamus aliquam magna a mauris molestie fringilla. </p>
        </Wrapper>
);
}


export default LifeStory;
