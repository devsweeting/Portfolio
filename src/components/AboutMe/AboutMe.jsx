import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
width: 100%;
position: fixed;
bottom: 0;
`;

const Box = styled.section`
  background-color: #444;
  color: #fff;
  border-radius: 50px;
  padding: 20px;
  font-size:150%;
`;

function AboutMe(){
  const wrapper = {
    display: 'grid',
    gridGap: '2px',
    height: '300px',
    gridTemplateColumns: '33% 33% 33%',
    justifyContent: "space-between",
    fontFamily: 'Arial, Helvetica, sans-serif',
    }

  const a = {
    backgroundColor: "#444",
    gridColumn: '1',
    gridRow: '1',
    margin: '20px',
    boxShadow: '10px 10px 10px black'
  }

  const b = {
    gridColumn: '2',
    gridRow: '1',
    color: '#fff',
    margin: '20px',
    boxShadow: '10px 10px 5px black'
  }

  const c = {
    gridColumn: '3',
    gridRow: '1',
    color: '#fff',
    margin: '20px',
    boxShadow: '10px 10px 5px black'
  }


  return (
    <Wrapper>
      <div style={wrapper}>
        <Box style={a}>Picture of me</Box>
        <Box style={b}>Life Story</Box>
        <Box style={c}>Personal Contact</Box>
      </div>
    </Wrapper>
  );
}


export default AboutMe;
