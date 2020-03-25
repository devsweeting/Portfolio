/* eslint-disable quotes */
import React from "react";
import styled from "styled-components";
import arrowdown from "../../assets/arrowdown.svg";
import native_feather from "../../assets/native_feather.svg";
import native_arrow from "../../assets/native_arrow.svg";
import TypingAnimation from "./TypingAnimation";
import { Link, animateScroll as scroll } from "react-scroll";

const AnimatedGradient = styled.section`
  width: auto;
  margin: 0 auto;
  padding: 20px;
  opacity: 0.9;
  color: white;
  height: 100vh;
  background-color: grey;
  background: linear-gradient(
    304deg,
    #4662b8,
    #587be8,
    #52a3cf,
    #5fb8b2,
    #3ba16e
  );
  background-size: 200% 200%;

  -webkit-animation: AnimatedGradient 15s ease infinite;
  -moz-animation: AnimatedGradient 15s ease infinite;
  animation: AnimatedGradient 15s ease infinite;

  @-webkit-keyframes AnimatedGradient {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @-moz-keyframes AnimatedGradient {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
  @keyframes AnimatedGradient {
    0% {
      background-position: 0% 14%;
    }
    50% {
      background-position: 100% 87%;
    }
    100% {
      background-position: 0% 14%;
    }
  }
`;

const Container = styled.section`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
`;

const Divider = styled.div`
  height: 5px;
  width: 300px;
  background-color: white;
  border-radius: 15%;
`;

const Feather = styled.img`
  height: 100px;
`;

const Header = styled.h1`
  font-size: 150px;
  text-align: center;
  color: white;
  @import url("https://fonts.googleapis.com/css?family=Amatic+SC&display=swap");
  font-family: "Amatic SC", cursive;
`;

const Tagline = styled.h1`
  font-size: 40px;
  color: white;
  @import url("https://fonts.googleapis.com/css?family=Amatic+SC&display=swap");
  font-family: "Amatic SC", cursive;
`;

const Arrow = styled.img`
  height: 60px;
  transform: rotate(270deg);
`;

function NewTitle() {
  return (
    <AnimatedGradient>
      <Container>
        <Feather className="transform" src={native_feather} />
        <Divider />
        <Header> Devin Sweeting</Header>
        <Tagline> Web Developer</Tagline>

        <Link
          activeClass="active"
          to="aboutme"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Arrow className="transform" src={native_arrow} />
        </Link>
      </Container>
    </AnimatedGradient>
  );
}

export default NewTitle;
