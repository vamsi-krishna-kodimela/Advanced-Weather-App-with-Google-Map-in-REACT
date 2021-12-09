import GoogleMapReact from "google-map-react";

const MapComponent = ({ coords }) => {
  const defaultZoom = 11;
  return (
    <div style={{ height: "100%", width: "100%",maxHeight:'50vh' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBDR2Jrq4hiUqa_n8600Bt-9z9lgF2PyJE" }}
        defaultCenter={coords}
        defaultZoom={defaultZoom}
      >
        <img
          src="https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png"
          alt="Marker"
          lat={coords.lat}
          lng={coords.lng}
          style={{ width: "20px" }}
        />
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;
