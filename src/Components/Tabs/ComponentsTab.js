import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import Icofont from "react-icofont";

import LoadingScreen from "../LoadingScreen";
import AddComponentModal from "../modals/AddComponent";

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

  const [show, setShow] = useState(false);
  const addModalClose = () => setShow(false);
  const addModalShow = () => setShow(true);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <LoadingScreen />;
  } else {
    return (
      <div>
        <Button variant="secondary" style={{ float: "right", margin: "1em" }} onClick={addModalShow}>
          <Icofont icon="plus" /> Add Component
        </Button>
        <BootstrapTable
          bootstrap4
          keyField="id"
          columns={columns}
          data={items}
          defaultSorted={defaultSorted}
          noDataIndication="Table is Empty"
          wrapperClasses="table-responsive"
        />
        <AddComponentModal id={props.item.id} show={show} onHide={addModalClose} />
      </div>
    );
  }
}

export default ComponentsTab;
