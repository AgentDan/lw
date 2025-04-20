import React from 'react';
import { Scroll } from "@react-three/drei";

const Overlay = () => {
    return (
        <Scroll html>
            <div className="absolute inset-0 w-screen pointer-events-none">

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold absolute">Vincenzo 39 WA</h2>
                    <div className="p-4">
                        <video width="100%" height="auto" controls autoPlay loop muted>
                            <source src="/img/videoYacht.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">HELLO22</h2>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 2</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 2</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 2</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 2</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 2</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

            </div>
        </Scroll>
    );
};

export default Overlay;
