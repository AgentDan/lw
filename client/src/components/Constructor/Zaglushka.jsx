import React from 'react';
import {Canvas} from "@react-three/fiber";
import Buttons from "./Buttons/Buttons.jsx";
import {Float, OrbitControls, Stage, useGLTF} from "@react-three/drei";

const Zaglushka = ({openelements, setOpenelements, arr, setArr}) => {

    const baseUrl = import.meta.env.VITE_BASE_URL
    const modelPath = `${baseUrl}/uploads/bebrik.glb`;
    const {nodes, materials} = useGLTF(modelPath);

    return (
        <div className="h-screen bg-amber-300">
            <Canvas style={{background: "#AAAAAA"}}
                    camera={{position: [0, 2, 5], fov: 35}}
            >
                <Float speed={3} floatIntensity={3}>
                {/*<Float speed={2} rotationIntensity={5} floatIntensity={2}>*/}
                    <Stage intensity={0.2} environment="city" shadows={false}>
                        <mesh
                            geometry={nodes.bebrik.geometry}
                            material={materials.bebrik}
                        />
                    </Stage>
                </Float>
                <OrbitControls
                    makeDefault
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                />
            </Canvas>
            <Buttons
                arr={arr}
                setArr={setArr}
                openelements={openelements}
                setOpenelements={setOpenelements}
            />
        </div>
    );
};

export default Zaglushka;