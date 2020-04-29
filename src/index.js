import React from "react";
import ReactDOM from "react-dom";
import { toast } from 'react-toastify';

import App from "./App";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-toastify/dist/ReactToastify.css';

import "./App.css";

toast.configure({
    position: toast.POSITION.BOTTOM_RIGHT
});

ReactDOM.render(<App />, document.getElementById("root"));
