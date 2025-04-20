import React, {useContext, useLayoutEffect, useRef, useState} from 'react';
import {useFrame} from "@react-three/fiber";
import gsap from "gsap";
import {useGLTF, useScroll, PerspectiveCamera, Text} from "@react-three/drei";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./../../context/AuthContext.jsx";

const One = () => {
    const tl = useRef()
    const sceneRef = useRef()
    const cameraRef = useRef()
    const butRef = useRef()
    const smartpanelRef = useRef()
    const smartdeskRef = useRef()
    const deskRef = useRef()
    const smartbuttonRef = useRef()
    const smartusbRef = useRef()
    const smartrackRef = useRef()
    const rackRef = useRef()

    const navigate = useNavigate()
    const {logoName} = useContext(AuthContext)
    const [mycolor, setMycolor] = useState({one: "gray", two: "gray", three: "gray", four: "gray"})

    const scroll = useScroll()
    const {nodes, materials} = useGLTF("./assets/models/roomPoints.glb")

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline({defaults: {duration: 2, ease: "power1.inOut"}});
        tl.current
            .to(sceneRef.current.position, {x: -30, y: 4, z: -20}, 0)

            .to(sceneRef.current.position, {x: 49, y: 5, z: -20}, 3)

            .to(smartdeskRef.current.children[0].material, {opacity: 1}, 3)
            .to(smartdeskRef.current.children[1].material, {opacity: 1}, 3)
            .to(smartdeskRef.current.children[2].material, {opacity: 1}, 3)
            .to(smartbuttonRef.current.children[0].material, {opacity: 1}, 3)
            .to(smartusbRef.current.children[0].material, {opacity: 1}, 3)
            .to(smartpanelRef.current.children[0].material, {opacity: 1}, 3)
            .to(deskRef.current.children[0].material, {opacity: 0}, 3)

            .to(sceneRef.current.rotation, {y: -Math.PI / 3}, 3.6)

            .to(sceneRef.current.position, {x: 69, y: 8, z: -27.7}, 5)
            .to(smartdeskRef.current.children[0].material, {opacity: 0}, 5)
            .to(smartdeskRef.current.children[1].material, {opacity: 0}, 5)
            .to(smartdeskRef.current.children[2].material, {opacity: 0}, 5)
            .to(deskRef.current.children[0].material, {opacity: 1}, 5.5)

            .to(sceneRef.current.position, {x: 67.8, y: 8, z: -26.4}, 8)

            .to(sceneRef.current.position, {x: 65.5, y: 8.2, z: -17.9}, 11)

            .to(sceneRef.current.position, {x: 50, y: 4, z: -19.5}, 14)
            .to(smartdeskRef.current.children[0].material, {opacity: 1}, 14)
            .to(smartdeskRef.current.children[1].material, {opacity: 1}, 14)
            .to(smartdeskRef.current.children[2].material, {opacity: 1}, 14)
            .to(deskRef.current.children[0].material, {opacity: 0}, 14)

            .to(sceneRef.current.rotation, {y: 1}, 16)
            .to(sceneRef.current.position, {x: 35, y: 3, z: -17}, 16)

            .to(sceneRef.current.position, {x: 53, y: 2.5, z: -14}, 19)
            .to(smartrackRef.current.children[0].material, {opacity: 1}, 19)
            .to(rackRef.current.children[0].material, {opacity: 0}, 19)

            .to(sceneRef.current.position, {x: 45, y: 2, z: -19}, 22)
            .to(sceneRef.current.rotation, {y: -1}, 22)
        return () => {
            tl.current?.kill();
        };
    }, [])

    return (
        <>
            <PerspectiveCamera
                ref={cameraRef}
                rotation={[0, 1.7, 0]}
                position={[60, 15, -12.5]}
                fov={75}
                near={0.1}
                far={1000}
                makeDefault
            />

            <group ref={sceneRef}>

                <group ref={smartdeskRef}>
                    <mesh
                        geometry={nodes.smartdesk.geometry}
                        material={materials.smartdesk}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.smartleg.geometry}
                        material={materials.smartleg}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.smartalice.geometry}
                        material={materials.smartalice}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                    <mesh
                        geometry={nodes.smartusb.geometry}
                        material={materials.smartusb}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={smartpanelRef}>
                    <mesh
                        geometry={nodes.smartpanel.geometry}
                        material={materials.smartpanel}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={smartrackRef}>
                    <mesh
                        geometry={nodes.smartrack.geometry}
                        material={materials.smartrack}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={smartusbRef}>
                    <mesh
                        geometry={nodes.smartusb.geometry}
                        material={materials.smartusb}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <group ref={smartbuttonRef}>
                    <mesh
                        geometry={nodes.smartbutton.geometry}
                        material={materials.smartbutton}
                        castShadow
                        receiveShadow
                        material-opacity={0}
                        material-transparent={true}
                    />
                </group>

                <points>
                    <bufferGeometry {...nodes.roompoints.geometry} />
                    <pointsMaterial
                        transparent
                        color="#41424C"
                        size={0.01}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.01}
                    />
                </points>
                <group ref={rackRef}>
                    <points>
                        <bufferGeometry {...nodes.rack.geometry} />
                        <pointsMaterial
                            transparent
                            color="#41424C"
                            size={0.01}
                            sizeAttenuation={true}
                            depthWrite={false}
                            opacity={0.04}
                        />
                    </points>
                </group>
                <group>
                    <mesh geometry={nodes.ramka.geometry}>
                        <meshStandardMaterial
                            transparent
                            opacity={0.5}
                            color="grey"
                        />
                    </mesh>
                </group>
                <group>
                    <Text
                        position={[40, 15.4, -11.3]}
                        rotation={[0, Math.PI / 2, 0]}
                        fontSize={0.4}
                        color="black"
                        anchorX="left"
                        anchorY="middle"
                    >
                        User: {logoName ? logoName : "no registration"}
                    </Text>
                    <mesh
                        geometry={nodes.ramkafonconstructor.geometry}
                        onPointerOver={() => {
                            document.body.style.cursor = "pointer";
                            setMycolor((prev) => ({...prev, one: "black"}));
                        }}
                        onPointerOut={() => {
                            document.body.style.cursor = "default";
                            setMycolor((prev) => ({...prev, one: "gray"}))
                        }}
                        onClick={(e) => {
                            navigate("projects")
                        }}
                    >
                        <meshStandardMaterial
                            color={mycolor.one}
                            transparent={true}
                            opacity={0.2}
                            depthWrite={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.ramkafonstore.geometry}
                        onPointerOver={() => {
                            document.body.style.cursor = "pointer";
                            setMycolor((prev) => ({...prev, two: "black"}));
                        }}
                        onPointerOut={() => {
                            document.body.style.cursor = "default";
                            setMycolor((prev) => ({...prev, two: "gray"}))
                        }}
                        onClick={(e) => {
                            navigate("card")
                        }}
                    >
                        <meshStandardMaterial
                            color={mycolor.two}
                            transparent={true}
                            opacity={0.2}
                            depthWrite={false}
                        />
                    </mesh>
                    <mesh
                        geometry={nodes.ramkafoncontacts.geometry}
                        onPointerOver={() => {
                            document.body.style.cursor = "pointer";
                            setMycolor((prev) => ({...prev, three: "black"}));
                        }}
                        onPointerOut={() => {
                            document.body.style.cursor = "default";
                            setMycolor((prev) => ({...prev, three: "gray"}))
                        }}
                        onClick={(e) => {
                            navigate("login")
                        }}
                    >
                        <meshStandardMaterial
                            color={mycolor.three}
                            transparent={true}
                            opacity={0.2}
                            depthWrite={false}
                        />
                    </mesh>
                </group>
                <group ref={butRef}>
                    <mesh
                        geometry={nodes.ramkatext.geometry}
                    >
                        <meshStandardMaterial
                            color="#000000"
                        />
                    </mesh>
                </group>
                <points>
                    <bufferGeometry {...nodes.arrow.geometry} />
                    <pointsMaterial
                        transparent
                        color="#41424C"
                        size={0.1}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.008} // Прозрачность
                    />
                </points>
                <points>
                    <bufferGeometry {...nodes.windows.geometry} />
                    <pointsMaterial
                        transparent
                        color="#41424C"
                        size={0.001}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.003} // Прозрачность
                    />
                </points>
                <group ref={deskRef}>
                    <points>
                        <bufferGeometry {...nodes.desk.geometry} />
                        <pointsMaterial
                            transparent
                            color="#41424C"
                            size={0.007}
                            sizeAttenuation={true}
                            depthWrite={false}
                            opacity={0.05} // Прозрачность
                        />
                    </points>
                </group>

            </group>
        </>
    );
};

export default One;