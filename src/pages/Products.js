import React from "react";

import Layout from "../components/Layout";
import { JumbotronProducts } from "../components/Jumbotron";

const Products = () => (
  <React.Fragment>
    <JumbotronProducts />
    <Layout>
      <div>PRODUCTS PAGE</div>
    </Layout>
  </React.Fragment>
);

export default Products;
