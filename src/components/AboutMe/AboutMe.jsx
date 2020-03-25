import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Selfie from "./Selfie";
import LifeStory from "./LifeStory";
import Contact from "./Contact";
import Dog from "./Dog";

const Wrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vmax;
`;

const Box = styled.section`
  color: #fff;
  border-radius: 50px;
  padding: 20px;
`;

function AboutMe() {
  const wrapper = {
    display: "grid",
    gridGap: "2px",
    height: "300px",
    gridTemplateColumns: "33% 33% 33%",
    justifyContent: "space-between",
    fontFamily: "Arial, Helvetica, sans-serif",
    marginBottom: "800px"
  };

  const a = {
    gridColumn: "1",
    gridRow: "1",
    margin: "20px"
  };

  const b = {
    backgroundColor: "#444",
    gridColumn: "2",
    gridRow: "1",
    color: "#fff",
    margin: "20px",
    boxShadow: "10px 10px 5px black"
  };

  const c = {
    backgroundColor: "#444",
    gridColumn: "3",
    gridRow: "1",
    color: "#fff",
    margin: "20px",
    boxShadow: "10px 10px 5px black"
  };

  return (
    <Wrapper>
      <div style={wrapper}>
        <Box style={a}>
          <Selfie />
        </Box>
        <Box style={b}>
          <LifeStory />
        </Box>
        <Box style={c} id="aboutme">
          <Contact />
        </Box>
      </div>
      {/* <Dog /> */}
    </Wrapper>
  );
}

export default AboutMe;
