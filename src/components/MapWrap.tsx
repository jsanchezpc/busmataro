import React, { useState, useEffect } from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import MapUserMarker from './MapUserMarker';

const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;
export const prerender = true;

// Coordenadas por defecto para Mataró
const mataroCoords: google.maps.LatLngLiteral = { lat: 41.54, lng: 2.445 };

const MapWrap = () => {
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
        }
      );
    } else {
      console.error("El navegador no soporta Geolocalización.");
    }
  }, []);

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        mapId={'b1bbd89b08a2b6a6'}
        zoom={17}
        defaultCenter={userLocation || mataroCoords} 
        gestureHandling="auto"
        disableDefaultUI={true}
        reuseMaps={true}
      >
        {userLocation && (
          // <Marker position={userLocation} />
          <MapUserMarker position={userLocation} />
        )}
      </Map>
    </APIProvider>
  );
};

export default MapWrap;
