import {Html} from "@react-three/drei";
import React from "react";

export function Cube({arr, setArr, materials, nodes}) {

    const onClickDescription = (name) => {
        const baseName = name.replace(/[0-9_]/g, "");
        setArr(prev => {
            // Вычисляем новое состояние: если хотя бы один из группы сейчас true — выключаем, иначе включаем
            const groupHasActive = prev.some(item => item.name.includes(baseName) && item.clickDescription);
            const newState = !groupHasActive;

            return prev.map(item => {
                if (item.name.includes(baseName)) {
                    // для группы переключаем на newState
                    return {...item, clickDescription: newState};
                } else {
                    // для остальных сбрасываем в false
                    return {...item, clickDescription: false};
                }
            });
        });
    };

    return (
        <>
            {arr.map((item) => {
                const shouldRender = (nodes[item.fullName] && nodes[item.fullName].geometry && item.check) || item.name === "default";
                console.log(item.name, "   ", item.check);

                if (shouldRender) {
                    return (
                        <mesh
                            key={item.id}
                            geometry={nodes[item.fullName].geometry}
                            material={materials[item.fullName]}
                        >
                            <Html position={[item.x, item.y, item.z]} occlude distanceFactor={10}>
                                <div
                                    className="cursor-pointer inline-block w-2 h-2"
                                    onClick={() => onClickDescription(item.fullName)}
                                    // style={{display: 'inline-block', minWidth: '6px', minHeight: '6px'}}
                                >
                                    {item.clickDescription
                                        ?
                                        <div
                                            className="bg-gray-300 bg-opacity-20 p-2 rounded-xl text-[4px] w-12">
                                            {item.description}
                                        </div>
                                        : (item.check && (
                                                <img
                                                    src="/img/logoi.png"
                                                    alt="logo"
                                                    className="border-gray-400 border-opacity-0 border-2 rounded-2xl hover:border-opacity-40"
                                                />
                                            )
                                        )
                                    }
                                </div>
                            </Html>

                        </mesh>
                    );
                }
                return null;
            })}
        </>
    );
}
