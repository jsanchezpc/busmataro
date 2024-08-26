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
            <div className="text-6xl rounded-full bg-green-400 shadow-2xl shadow-blue-400 w-8 h-8 flex items-center justify-center"></div>
        </AdvancedMarker>
    );
};

export default MapUserMarker;
