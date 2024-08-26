import React from 'react';
import Lottie from 'lottie-react';

interface LottieComponentProps {
    animationData: any;
    width: number;
    height: number;
}

const LottieComponent: React.FC<LottieComponentProps> = ({ animationData, width, height }) => {
    return (
        <div style={{ width, height , 'marginLeft': 'auto', 'marginRight': 'auto' }}>
            <Lottie className="mx-auto w-full"
                animationData={animationData}
                loop={true}
                autoplay={true}
                rendererSettings={{
                    preserveAspectRatio: 'xMidYMid slice',
                }}
            />
        </div>
    );
};

export default LottieComponent;
