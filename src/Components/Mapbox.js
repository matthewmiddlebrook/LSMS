import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Mapbox = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  var lineLayer = {
    type: 'line',
    source: 'line',
    id: 'line',
    paint: {
      'line-color': 'red',
      'line-width': 6,
      // 'line-gradient' must be specified using an expression
      // with the special 'line-progress' property
      'line-gradient': [
        'interpolate',
        ['linear'],
        ['line-progress'],
        0,
        'hsla(225, 0%, 25%, 0.15)',
        0.5,
        'hsla(225, 25%, 50%, 0.75)',
        1,
        'hsla(225, 100%, 75%, 1)'
      ]
    },
    layout: {
      'line-cap': 'round',
      'line-join': 'round'
    }
  };

  var geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {},
        'geometry': {
          'coordinates': props.locations.map(item => (
            [item.gpsLocation._longitude, item.gpsLocation._latitude]
          )),
          'type': 'LineString'
        }
      }
    ]
  };

  var bounds = new mapboxgl.LngLatBounds();

  props.locations.forEach(function(item) {
      bounds.extend(new mapboxgl.LngLat(item.gpsLocation._longitude, item.gpsLocation._latitude));
  });

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v10", // stylesheet location
        center: [-99.00, 33.25],
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

        map.fitBounds(bounds, {padding: 40});
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={props.style} />;
};

export default Mapbox;