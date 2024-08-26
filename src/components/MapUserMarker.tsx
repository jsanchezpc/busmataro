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
            <div className="text-6xl mx-auto rounded-full bg-green-400 shadow-2xl shadow-blue-400 w-8 h-8 flex items-center justify-center"></div>
            <p className="block">Estas aquí</p>
        </AdvancedMarker>
    );
};

export default MapUserMarker;
