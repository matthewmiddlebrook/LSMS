import React from "react";

import Layout from "../components/Layout";
import { JumbotronContact } from "../components/Jumbotron";

const ContactPage = () => (
  <React.Fragment>
    <JumbotronContact />
    <Layout>
      <div>Cotact Form</div>
    </Layout>
  </React.Fragment>
);
export default ContactPage;
