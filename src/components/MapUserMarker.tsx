import React from 'react';
import { AdvancedMarker } from '@vis.gl/react-google-maps';

interface MapUserMarkerProps {
    position: {
        lat: number;
        lng: number;
    };
}

const MapUserMarker: React.FC<MapUserMarkerProps> = ({ position }) => {
    return (
        <AdvancedMarker
            position={position}
            title={'Estás aquí'}>
            <div className="text-6xl rounded-full  flex items-center justify-center">
        🐢
            </div>
        </AdvancedMarker>
    );
};

export default MapUserMarker;
