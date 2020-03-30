import React from "react";
import { Layout } from "./components/Layout";
import { JumbotronNomatch } from "./components/Jumbotron";

export const NoMatch = () => (
  <React.Fragment>
    <JumbotronNomatch />
    <Layout>
      <div>NO MATCH PAGE PAGE</div>
    </Layout>
  </React.Fragment>
);
