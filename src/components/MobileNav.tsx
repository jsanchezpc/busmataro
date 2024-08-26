import React, { useState } from 'react';
import LineSelector from './LineSelector';

const MobileNav: React.FC = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [line, setLine] = useState(1);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

    const remainingTrips: number = 10;

    const changeLine = (line: number) => {
        setLine(line);
    };

    return (
        <div className="mobile-nav rounded-t-2xl z-50 fixed bottom-0 left-1 right-1">
            <div
                className="nav-header cursor-pointer bg-blue-500 text-white p-4 rounded-t-2xl"
                onClick={toggleMenu}
            >
                <h1 className="text-xl font-bold">
                    Seleccionar línea 
                    <span className='text-sm float-right top-0'>
                        Viajes restantes: 
                        <span className='text-2xl font-bold'>{remainingTrips}</span>
                    </span>
                </h1>
            </div>
            {isMenuVisible && (
                <LineSelector swapLine={changeLine} line={line} />
            )}
        </div>
    );
};

export default MobileNav;
