import React, {Suspense} from 'react';
import {Environment, Html, useProgress} from "@react-three/drei";
import One from "./One.jsx";

const Bubble = () => {

    const Loader = () =>{
        const {progress} = useProgress()
        return (<Html>{Math.floor(progress)}% Loaded ...</Html>)
    }

    return (
        <Suspense fallback={<Loader/>}>
            <Environment
                preset="apartment"
                environmentIntensity={1}
            />
            <One/>
        </Suspense>
    );
};

export default Bubble;