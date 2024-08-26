import React, { useState } from 'react';
import LottieComponent from './LottieComponent';
import LoadingLottie from './../../public/loading.json'
import TextType from './TextType';

const LoadingScreen: React.FC = () => {

    const [line, setLine] = useState(1);
    const [isLoading, setIsLoading] = useState(true);


    if (isLoading) {
        return (
            <div className="loading-screen bg-slate-300/70 h-screen w-screen absolute top-0 left-0 z-50 flex items-center justify-center">
                <div className="loader w-full text-slate-600 text-center">
                    <LottieComponent animationData={LoadingLottie} width={200} height={200} />
                    <p>Cargando línea {line}</p>
                    <p>Horario de verano</p>
                    <TextType text="Horario de verano" client:only="react" />
                </div>
            </div>
        )
    };
}

export default LoadingScreen;