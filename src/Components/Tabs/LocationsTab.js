import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

function LocationsTab() {
  const columns = [
    {
      dataField: "planeId",
      text: "Plane ID"
    },
    {
      dataField: "hobbsTime",
      text: "Hobbs Time"
    },
    {
      dataField: "gpsLocation._latitude",
      text: "Latitude"
    },
    {
      dataField: "gpsLocation._longitude",
      text: "Longitude"
    }
  ];
  const locations = [
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 34.43274, _longitude: -99.7331 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 34.43274, _longitude: -99.7331 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 34.43274, _longitude: -99.7331 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 34.43274, _longitude: -99.7331 }
    }
  ];
  return (
    <div>
      <div
        style={{
          height: "15rem",
          backgroundColor: "#999",
          marginBottom: "2rem"
        }}
      >
        Map goes here! Maybe...
      </div>
      <div>
        <BootstrapTable
          keyField="planeId"
          columns={columns}
          data={locations}
          noDataIndication="Table is Empty"
          wrapperClasses="table-responsive"
        />
      </div>
    </div>
  );
}

export default LocationsTab;
