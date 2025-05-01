import React, { useLayoutEffect, useRef } from 'react';
import {useFrame} from "@react-three/fiber";
import gsap from "gsap";
import {useGLTF, useScroll, PerspectiveCamera, Text, OrbitControls} from "@react-three/drei";

const Two = () => {
    const tl = useRef()
    const sceneRef = useRef()
    const cameraRef = useRef()
    const vizorRef = useRef()
    const vizorRefSketch=useRef()
    const boatRef=useRef()
    const panelRef=useRef()
    const benchRef=useRef()

    const scroll = useScroll()
    const {nodes, materials} = useGLTF("./assets/models/yacht.glb")

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: "power1.inOut"}});
        tl.current
            .to(sceneRef.current.rotation, {y: -Math.PI/4}, 1)
            .to(sceneRef.current.position, {x: 0, y: 0, z: 0}, 1)
            .to(sceneRef.current.position, {x: -3, y: 4, z: 35}, 3)

            .to(panelRef.current.children[0].material, {opacity: 1}, 3)
            .to(panelRef.current.children[1].material, {opacity: 1}, 3)
            .to(panelRef.current.children[2].material, {opacity: 1}, 3)
            .to(panelRef.current.children[3].material, {opacity: 1}, 3)
            .to(panelRef.current.children[4].material, {opacity: 1}, 3)

            .to(panelRef.current.children[0].material, {opacity: 0}, 6)
            .to(panelRef.current.children[1].material, {opacity: 0}, 6)
            .to(panelRef.current.children[2].material, {opacity: 0}, 6)
            .to(panelRef.current.children[3].material, {opacity: 0}, 6)
            .to(panelRef.current.children[4].material, {opacity: 0}, 6)

            .to(vizorRef.current.children[0].material, {opacity: 1}, 8)
            .to(vizorRef.current.children[1].material, {opacity: 1}, 8)
            .to(sceneRef.current.position, {x: 0, y: -1, z: 20}, 8)
            .to(sceneRef.current.rotation, {y: -Math.PI/2}, 8)

            .to(vizorRef.current.children[0].material, {opacity: 0}, 11)
            .to(vizorRef.current.children[1].material, {opacity: 0}, 11)
            .to(benchRef.current.children[0].material, {opacity: 1}, 11)
            .to(benchRef.current.children[1].material, {opacity: 1}, 11)
            .to(sceneRef.current.position, {x: -3, y: 6, z: 20}, 11)
            .to(sceneRef.current.rotation, {y: Math.PI/12}, 11)

            .to(vizorRef.current.children[0].material, {opacity: 1}, 14)
            .to(vizorRef.current.children[1].material, {opacity: 1}, 14)
            .to(boatRef.current.children[0].material, {opacity: 1}, 14)
            .to(boatRef.current.children[1].material, {opacity: 1}, 14)
            .to(boatRef.current.children[2].material, {opacity: 1}, 14)
            .to(boatRef.current.children[3].material, {opacity: 1}, 14)
            .to(panelRef.current.children[0].material, {opacity: 1}, 14)
            .to(panelRef.current.children[1].material, {opacity: 1}, 14)
            .to(panelRef.current.children[2].material, {opacity: 1}, 14)
            .to(panelRef.current.children[3].material, {opacity: 1}, 14)
            .to(panelRef.current.children[4].material, {opacity: 1}, 14)
            .to(vizorRefSketch.current.children[0].material, {opacity: 0}, 14)
            .to(sceneRef.current.position, {x: -4, y: -2, z: 10}, 14)
            .to(sceneRef.current.rotation, {y: -Math.PI*0.7}, 14)

            .to(sceneRef.current.position, {x: -4, y: 5, z: 10}, 22)

        return () => {
            tl.current?.kill();
        };
    }, [])

    return (
        <>
            {/*<OrbitControls/>*/}
            <PerspectiveCamera
                ref={cameraRef}
                rotation={[0, 0, 0]}
                position={[0, 10, 40]}
                fov={75}
                near={0.1}
                far={1000}
                makeDefault
            />

            <group ref={sceneRef}>
                <group ref={vizorRef}>
                    <mesh
                        geometry={nodes.vizor_1.geometry}
                        material={materials.vizorWhite}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.vizor_2.geometry}
                        material={materials.vizorChrome}
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={boatRef}>
                    <mesh
                        geometry={nodes.boat_1.geometry}
                        material={materials.boatChrome}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.boat_2.geometry}
                        material={materials.boatWhite}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.boat_3.geometry}
                        material={materials.tik}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.boat_4.geometry}
                        material={materials.podushka}
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={panelRef}>
                    <mesh
                        geometry={nodes.panel_1.geometry}
                        material={materials.panelWhite}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.panel_2.geometry}
                        material={materials.BlackOne}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.panel_3.geometry}
                        material={materials.BlackMat}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.panel_4.geometry}
                        material={materials.lampGreen}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.panel_5.geometry}
                        material={materials.lampRed}
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={benchRef}>
                    <mesh
                        geometry={nodes.bench_1.geometry}
                        material={materials.bench}
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.bench_2.geometry}
                        material={materials.benchWhite}
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>


                <group ref={vizorRefSketch}>
                    <points>
                        <bufferGeometry {...nodes.vizorSketch.geometry} />
                        <pointsMaterial
                            transparent
                            color="#41424C"
                            size={0.001}
                            sizeAttenuation={true}
                            depthWrite={false}
                            opacity={0.008}
                        />
                    </points>
                </group>

            </group>
        </>
    );
};

export default Two;