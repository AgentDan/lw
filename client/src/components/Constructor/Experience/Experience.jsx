import React, {useEffect, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import {Cube} from "../Cube.jsx";

const Experience = ({arr, setArr, materials, nodes}) => {

    const refOrbit = useRef();
    const defaultItem = arr.find(item => item.name === "default");
    console.log("defaultItem : ", defaultItem)

    useEffect(() => {
        const interval = setInterval(() => {
            if (refOrbit.current) {
                console.log("distance:", refOrbit.current.getDistance().toFixed(2));
                console.log("polarAngle:", ((refOrbit.current.getPolarAngle() * 180) / Math.PI).toFixed(2) );
                console.log("azimuthalAngle:", ((refOrbit.current.getAzimuthalAngle() * 180) / Math.PI).toFixed(2) );
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Cube
                arr={arr}
                setArr={setArr}
                materials={materials}
                nodes={nodes}
            />

            <ambientLight intensity={1}/>
            <directionalLight position={[5, 5, 5]}/>

            <OrbitControls
                ref={refOrbit}
                makeDefault
                minPolarAngle={(defaultItem.minPolarAngle * Math.PI) / 180}
                maxPolarAngle={(defaultItem.maxPolarAngle * Math.PI) / 180}
                maxAzimuthAngle={(defaultItem.maxAzimuthAngle * Math.PI) / 180}
                minAzimuthAngle={(defaultItem.minAzimuthAngle * Math.PI) / 180}
                minDistance={defaultItem.minDist}
                maxDistance={defaultItem.maxDist}
                enablePan={defaultItem.pan}
            />
        </>
    );
};

export default Experience;
