import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

import Layout from "../components/Layout";
import { JumbotronHome } from "../components/Jumbotron";

const Styles = styled.div`
  .card {
    display: inline-block;
    border-radius: 3px;
    margin: 1em;
    
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
    margin: 1em;
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
  <React.Fragment>
    <JumbotronHome />
    <Styles>
      <Layout>
        <div className="middle-section">
          <h2>Summary</h2>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
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
