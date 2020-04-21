import React from "react";
import Layout from "./Components/Layout";
import { Form, Button } from "react-blockquote";
import { JumbotronContact } from "./Components/Jumbotron";

const ContactPage = () => (
  <React.Fragment>
    <JumbotronContact />
    <Layout>
      <div>Cotact Form</div>
    </Layout>
  </React.Fragment>
);
export default ContactPage;
