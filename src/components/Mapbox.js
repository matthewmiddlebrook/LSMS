import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

// Mapbox API Reference: https://docs.mapbox.com/mapbox-gl-js/api/
// NOTE: Mapbox coordinates are ordered [longitude, latitude] 
//       rather than the opposite
// Unfortunately this Mapbox package is a little verbose, 
// so make sure to reference the API

const Mapbox = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);


  // Styling of the GPS line
  // Example: https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/
  // Spec:    https://docs.mapbox.com/mapbox-gl-js/style-spec/layers/#line
  var lineLayer = {
    type: 'line',
    source: 'line',
    id: 'line',
    paint: {
      'line-width': 6,
      // 'line-gradient' must be specified using an expression
      // with the special 'line-progress' property
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0, // Start of line
        'hsla(225, 0%, 25%, 0.15)', // Light gray
        0.5, // Middle
        'hsla(225, 25%, 50%, 0.75)',
        1, // End
        'hsla(225, 100%, 75%, 1)' // Light blue
      ]
    },
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    }
  };

  // Spec: https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#geojson
  var geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          // Tell the map to draw a line using the coordinates
          'coordinates': props.locations.map(item => (
            [item.gpsLocation._longitude, item.gpsLocation._latitude]
          )),
          'type': 'LineString'
        }
      }
    ]
  };

  // Create a bounds that is extends the region of each point
  // This is used to zoom into the map easily
  // Example: https://docs.mapbox.com/mapbox-gl-js/example/zoomto-linestring/
  var bounds = new mapboxgl.LngLatBounds();

  props.locations.forEach(function(item) {
      bounds.extend(new mapboxgl.LngLat(item.gpsLocation._longitude, item.gpsLocation._latitude));
  });

  useEffect(() => {
    // This uses the api key from the .env file you should have created
    // Refer to the documentation on GitHub for more information about this
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10", // stylesheet location
        center: [-99.00, 33.25], // Just coordinates I thought looked good
        zoom: 6
      });

      map.on("load", () => {
        setMap(map);
        map.resize();

        // 'line-gradient' can only be used with GeoJSON sources
        // and the source must have the 'lineMetrics' option set to true
        map.addSource('line', {
          type: 'geojson',
          lineMetrics: true,
          data: geojson
        });

        // the layer must be of type 'line'
        map.addLayer(lineLayer);

        // Zooms the map to the bounds we created earlier with some padding
        map.fitBounds(bounds, {padding: 40});
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={props.style} />;
};

export default Mapbox;