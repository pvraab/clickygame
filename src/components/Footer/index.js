import React from "react";
import Container from "react-bootstrap/Container";

import "./style.css";

function Footer(props) {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <h2><span>{props.footerTitle}</span></h2>
      </Container>
    </footer>
  );
}

export default Footer;
