import React from "react";
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Style from 'style-it';
import { Form, Button } from 'react-bootstrap';


const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
 justify-content: center;
 padding: 10px;
`;


function Contact(){

  return(
    <Wrapper>
        <Form action="https://formspree.io/devinsweeting@gmail.com" method="POST">
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="_replyto" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Or any prefered way contact you
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter your message</Form.Label>
            <Form.Control name="message" as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit" value="Send">
            Submit
          </Button>
        </Form>
    </Wrapper>
  );
}

export default Contact;
