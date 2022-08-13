import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  StandaloneSearchBox,
  LoadScript,
} from "@react-google-maps/api";

function Map({ lat, lng, setLat, setLng }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB5IIMJRaxx9edKZkXEeyYiaRUSeqEoXx8",
  });
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={13}
          center={{
            lat: lat ? lat : 88,
            lng: lng ? lng : 48,
          }}
          style={{
            height: "700px",
            borderBottomLeftRadius: "180px",
            borderBottomRightRadius: "180px",
            width: "100%",
          }}
          mapContainerClassName={classes.map_container}
        >
          <Marker
            onDragEnd={(e) => {
              setLat(e.latLng.lat());
              setLng(e.latLng.lng());
            }}
            draggable
            position={{ lat: lat, lng: lng }}
          />
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}

export default Map;
