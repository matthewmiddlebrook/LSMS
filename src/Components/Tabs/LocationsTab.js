import React from "react";
import BootstrapTable from "react-bootstrap-table-next";

import Mapbox from "../Mapbox";

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
      gpsLocation: { _latitude: 32.49465044786327, _longitude: -99.73879305734694 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.55717639734228, _longitude: -99.81775729074538 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.51955025210343, _longitude: -99.8879667939192 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.458156890181435, _longitude: -99.90255801096022 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.30739218209173, _longitude: -99.74428622140944 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.452652609885526, _longitude: -99.59082095041335 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.513181191135, _longitude: -99.60009066476881 }
    },
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.55312510844417, _longitude: -99.66257540597975 }
    }
    ,
    {
      timeStamp: { _seconds: 1581356669, _nanoseconds: 17000000 },
      hobbsTime: 3897,
      planeId: "randomGeneratedPlaneId",
      gpsLocation: { _latitude: 32.504205839235205, _longitude: -99.72634760751784 }
    }
  ];

  return (
    <div>
      <Mapbox
        locations={locations}
        style={{
          height: "20em",
          marginBottom: "2em"
        }}
      />
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
