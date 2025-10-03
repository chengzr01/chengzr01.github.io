import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Blogs() {
  return (
    <Container
      fluid
      style={{
        boxSizing: "border-box",
        paddingTop: "2em",
        paddingBottom: "2em",
        width: "80%",
      }}
      id="blogs"
    >
      <Row>
        <Col md={12} style={{ textAlign: "left" }}>
          <p
            style={{
              fontSize: "1.5em",
              marginBottom: "0.5em",
              marginTop: "0.5em",
            }}
          >
            Blogs
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Blogs;
