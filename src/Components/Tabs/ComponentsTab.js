import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

import LoadingScreen from "../LoadingScreen";

function ComponentsTab(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true
    },
    {
      dataField: "type",
      text: "Type",
      sort: true
    },
    {
      dataField: "model",
      text: "Model",
      sort: true
    },
    {
      dataField: "manufacturerName",
      text: "Manufacturer",
      sort: true
    },
    {
      dataField: "currentTime",
      text: "Age",
      sort: true
    },
    {
      dataField: "maxTime",
      text: "Max Age",
      sort: true
    }
  ];
  const defaultSorted = [
    {
      dataField: "type",
      order: "desc"
    }
  ];
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      `https://us-central1-lonestarmeters.cloudfunctions.net/api/components?planeId=${
        props.item.id
      }`
    )
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <div>
        <Button variant="secondary" style={{ float: "right", margin: "1rem" }}>
          Add Component
        </Button>
        <div>
          <BootstrapTable
            keyField="id"
            columns={columns}
            data={items}
            defaultSorted={defaultSorted}
            noDataIndication="Table is Empty"
            wrapperClasses="table-responsive"
          />
        </div>
      </div>
    );
  }
}

export default ComponentsTab;
