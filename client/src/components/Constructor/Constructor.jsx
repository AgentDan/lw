import React, {useEffect} from 'react';
import Buttons from "./Buttons/Buttons.jsx";
import Experience from "./Experience/Experience.jsx";
import {Canvas} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";
import {v1} from "uuid";

const Constructor = ({openelements, setOpenelements, nameFile, arr, setArr}) => {
    const user = JSON.parse(localStorage.getItem("userData"))
    const baseUrl = import.meta.env.VITE_BASE_URL
    const modelPath = `${baseUrl}/uploads/${user.username}/${nameFile}`;

    const {nodes, materials} = useGLTF(modelPath);

    useEffect(() => {
        if (!nodes) return;
        const meshes = Object.values(nodes || {}).filter(node => node.isMesh);
        let arrModel = []
        meshes.map((item) => {
            let a = {
                id: v1(),
                name: item.name.replace(/[0-9_]/g, ""),
                fullName: item.name,
                check: item.name[1] === "0",
                group: Number(isNaN(Number(item.name.slice(0,1))) === false ? item.name.slice(0,1) : NaN),
                description: item.userData?.i,
                x: item.userData?.x ?? 0.5,
                y: item.userData?.y ?? 0,
                z: item.userData?.z ?? 0,
                minDist: item.userData?.DISTmin ?? 0.1,
                maxDist: item.userData?.DISTmax ?? 100,
                minPolarAngle: item.userData?.minPolarAngle ?? 70,
                maxPolarAngle: item.userData?.maxPolarAngle ?? 90,
                minAzimuthAngle: item.userData?.minAzimuthAngle ?? 90,
                maxAzimuthAngle: item.userData?.maxAzimuthAngle ?? 170,
                pan: item.userData?.pan ?? false,
                clickDescription: false,
            }
            arrModel.push(a)
        })
        setArr(arrModel)
    }, [nameFile, nodes]);

    return (
        <div className="h-screen bg-amber-300">
            <Canvas shadows camera={{ fov: 50, position: [0, 0, 5] }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-5, -5, 5]} intensity={0.5} />

                <Experience arr={arr} setArr={setArr} materials={materials} nodes={nodes} />
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

export default Constructor;