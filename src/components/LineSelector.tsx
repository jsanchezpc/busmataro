import React from 'react';

interface Linea {
    line: number;
    color: string;
}

interface LineSelectorProps {
    swapLine: (line: number) => void;
    line: number;
}

const LineSelector: React.FC<LineSelectorProps> = ({ swapLine, line }) => {
    const lines: Linea[] = [
        { line: 1, color: 'rgb(255, 0, 255)' },
        { line: 2, color: 'rgb(128, 64, 0)' },
        { line: 3, color: 'rgb(128, 128, 128)' },
        { line: 4, color: 'rgb(255, 0, 0)' },
        { line: 5, color: 'rgb(0, 234, 0)' },
        { line: 6, color: 'rgb(254, 191, 1)' },
        { line: 7, color: 'rgb(128, 255, 255)' },
        { line: 8, color: 'rgb(0, 128, 64)' },
    ];

    const handleLineChange = (newLine: number) => {
        swapLine(newLine);
    };

    return (
        <div className="nav-main p-1 mt-0 w-full bg-white overflow-y-auto flex flex-col">
            <span className='text-gray-400 text-left m-1'>Selecciona una línea para ver los detalles</span>
            {lines.map((linea) => (
                <div
                    onClick={() => handleLineChange(linea.line)}
                    key={linea.line}
                    style={{ backgroundColor: linea.color }}
                    className="line-selector p-4 cursor-pointer inline-flex bg-black text-center text-lg font-bold text-white m-1 rounded-md"
                >
                    <h1>Línea {linea.line}</h1>
                </div>
            ))}
        </div>
    );
};

export default LineSelector;
