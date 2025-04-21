import React, {Suspense} from 'react';
import {Environment, Html, useProgress} from "@react-three/drei";
import Two from "./Two.jsx";

const Bubble = () => {

    const Loader = () =>{
        const {progress} = useProgress()
        return (<Html>{Math.floor(progress)}% Loaded ...</Html>)
    }

    return (
        <Suspense fallback={<Loader/>}>
            <Environment
                files="./img/HDRI_sea.hdr" // Путь к HDRI
            />
            <Two/>
        </Suspense>
    );
};

export default Bubble;