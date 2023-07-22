import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={2}>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
          </Col>
          <Col md={10}>
            <Card.Body>
              <Card.Title style={{ textAlign: "left" }}>
                {props.title}
              </Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                {props.author.map((name, index) => {
                  if (name === "Zirui Cheng" || name === "Zirui Cheng*")
                    return (
                      <u>
                        <b>{name}</b>
                      </u>
                    );
                  else return name;
                })}
              </Card.Text>
              <Button variant="text" href={props.ghLink} target="_blank">
                {/* <BsGithub /> &nbsp; */}
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
              {"\n"}
              {"\n"}

              {!props.isBlog && props.demoLink && (
                <Button
                  variant="text"
                  href={props.demoLink}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  {/* <CgWebsite /> &nbsp; */}
                  {"Demo"}
                </Button>
              )}
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
}
export default ProjectCards;
