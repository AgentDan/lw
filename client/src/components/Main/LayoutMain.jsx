import React from 'react';
import HeaderMain from "./HeaderMain.jsx";
import {Canvas} from "@react-three/fiber";
import {ScrollControls} from "@react-three/drei";
import Overlay from "./Overlay.jsx";
import Bubble from "./Bubble.jsx";

const LayoutMain = () => {
    return (
        <div className="relative w-screen h-screen">
            <HeaderMain/>
            <Canvas style={{background: '#f5efd9'}} shadows camera={{position: [5, 5, 5], fov: 50, far: 50000}}>
                <ScrollControls pages={10} damping={0.2}>
                    <Overlay/>
                    <Bubble/>
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default LayoutMain;