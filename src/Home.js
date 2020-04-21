import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { JumbotronHome } from "./Components/Jumbotron";
import Layout from "./Components/Layout";
import styled from "styled-components";
import { Card } from "react-bootstrap";

const Styles = styled.div`
  .card {
    background: red;
    display: inline-block;
    border-radius: 3px;

    background: linear-gradient(to right, #2a77af 50%, white 50%);
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
  }
  .card:hover {
    background-position: left bottom;
    color: white;
  }
  .middle-section {
    align-item: center;
    text-align: center;
  }
  blockquote {
    color: #666;
    margin: 0;
    padding-left: 3em;
    border-left: 0.5em #eee solid;
    padding-bottom: 15px;
  }
  h3 {
    margin-top: 25px;
    text-align: center;
  }
`;

const HomePage = () => (
  // <Container fluid>
  //   {/* <Jumbotron>
  //     <h1>Hello, world!</h1>
  //     <p>
  //       This is a simple hero unit, a simple jumbotron-style component for
  //       calling extra attention to featured content or information.
  //     </p>
  //     <p>
  //       <LinkContainer to="/planes">
  //         <Button variant="primary">Plane Dashboard</Button>
  //       </LinkContainer>
  //     </p>
  //   </Jumbotron> */}
  // </Container>
  <React.Fragment>
    <JumbotronHome />
    <Styles>
      <Layout>
        <div className="middle-section">
          <h2>Summary</h2>
          <Card style={{ width: "18rem" }}>
            <div className="card" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <div className="card" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <div className="card" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div id="consumer-story">
          <div id="client-comments">
            <h3>Why should you become our client?</h3>
            <h4>Effiecincy</h4>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet ultrices elit. Cras vitae quam at metus sollicitudin
              rhoncus.
            </blockquote>
            <h4>Makes work easier</h4>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet ultrices elit. Cras vitae quam at metus sollicitudin
              rhoncus.
            </blockquote>
            <h4>Reduces unnecessary costs</h4>
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sit amet ultrices elit. Cras vitae quam at metus sollicitudin
              rhoncus.
            </blockquote>
          </div>
        </div>
      </Layout>
    </Styles>
  </React.Fragment>
);

export default HomePage;
