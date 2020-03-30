import React from "react";
import { Layout } from "./components/Layout";
import { Form, Button } from "react-blockquote";
import { JumbotronContact } from "./components/Jumbotron";

export const Contact = () => (
  <React.Fragment>
    <JumbotronContact />
    <Layout>
      <div>Cotact Form</div>
    </Layout>
  </React.Fragment>
);
