import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Icofont from "react-icofont";

import DeletePlaneModal from "../modals/DeletePlane";
import EditPlaneModal from "../modals/EditPlane";

/**
 * 'Tab' for a plane's settings.
 * 
 * This isn't technically a tab, 
 * but it works the same as the others.
 * 
 * Requires the following:
 * @param {} item - Data of the plane
 */
function SettingsTab(props) {

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const deleteModalClose = () => setShowDeleteModal(false);
  const deleteModalShow = () => setShowDeleteModal(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const editModalClose = () => setShowEditModal(false);
  const editModalShow = () => setShowEditModal(true);

  return (
    <Container>
      <h3 style={{ paddingTop: ".5em", paddingBottom: ".5em" }}>Settings</h3>
      <Card>
        <Card.Body>
          <Card.Title>Edit this plane</Card.Title>
          <Card.Text>
            This allows you to change the details of the plane, such as the name or tail number.
        </Card.Text>
          <Button variant="outline-secondary" onClick={editModalShow}><Icofont icon="edit" /> Edit Plane</Button>
        </Card.Body>
      </Card>
      <br />
      <Card border="danger">
        <Card.Body>
          <Card.Title>Delete this plane</Card.Title>
          <Card.Text>
            Once you delete a plane, there is no going back. Please be certain.
        </Card.Text>
          <Button variant="danger" onClick={deleteModalShow}><Icofont icon="minus" /> Delete Plane</Button>
        </Card.Body>
      </Card>
      <EditPlaneModal item={props.item} show={showEditModal} onHide={editModalClose} />
      <DeletePlaneModal item={props.item} show={showDeleteModal} onHide={deleteModalClose} />
    </Container>
  );
}

export default SettingsTab;
