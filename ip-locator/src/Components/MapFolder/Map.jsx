import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

// ✅ Custom marker icon
const customIcon = L.icon({
  iconUrl: "/assets/img/icon-location.svg",
  iconSize: [35, 39],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// ✅ Function to smoothly move the map to a new location
const ChangeMapView = ({ latitude, longitude }) => {
  const map = useMap();

  useEffect(() => {
    if (latitude && longitude) {
      console.log("Moving smoothly to:", latitude, longitude); // ✅ Debugging
      map.flyTo([latitude, longitude], 13, { animate: true, duration: 2 });
    }
  }, [latitude, longitude]); // ✅ Runs when lat/lon changes

  return null;
};

const MapComponent = ({ latitude, longitude }) => {
  return (
    <MapContainer 
      center={[latitude, longitude]} 
      zoom={13} 
     style={{ width: "100%" ,height:"70vh"}}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeMapView latitude={latitude} longitude={longitude} />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup>Current Location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
