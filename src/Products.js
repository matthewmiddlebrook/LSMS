import React from "react";
import Layout from "./Components/Layout";
import { JumbotronProducts } from "./Components/Jumbotron";

const Products = () => (
  <React.Fragment>
    <JumbotronProducts />
    <Layout>
      <div>PRODUCTS PAGE</div>
    </Layout>
  </React.Fragment>
);

export default Products;
