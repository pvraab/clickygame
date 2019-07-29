import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./style.css";

function Title(props) {
  return (
    <Container className="container">
      <Row className="justify-content-md-center">
        <Col className="title">Clicky Game</Col>
        <Col className="help">Click an image to begin!</Col>
        <Col className="score">Score:<span> {props.score}</span> | Top Score:<span> {props.topscore}</span></Col>
      </Row>
    </Container>
  );
}

// <input type="text" value="{props.score}"</h1>;
export default Title;
