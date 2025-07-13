import React from 'react';
import {Scroll} from "@react-three/drei";

const Overlay = () => {
    return (
        <Scroll html>
            <div className="absolute inset-0 w-screen pointer-events-none">

                <section className="relative h-screen w-screen overflow-hidden">
                    {/* Центрированный заголовок поверх видео */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <h2 className="text-[10vw] text-white font-extrabold text-center">
                            Vincenzo 39 WA
                        </h2>
                    </div>

                    {/* Видео-блок */}
                    <div className="absolute inset-0 z-0">
                        {/* Десктоп-видео */}
                        <video
                            className="hidden md:block w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/videos/videoYacht.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>

                        {/* Мобильное видео */}
                        <video
                            className="md:hidden w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/videos/videoYachtMin.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">HELLO22</h2>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 3</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 4</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 5</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 6</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 7</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 7</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="h-screen flex flex-col justify-center items-center border border-white">
                    <h2 className="text-[10vw] text-white font-extrabold">Component 7</h2>
                    <a
                        href="/constructor"
                        className="mt-4 text-white underline bg-black bg-opacity-40 p-2 rounded pointer-events-auto"
                    >
                        Constructor
                    </a>
                </section>

                <section className="relative h-screen w-screen overflow-hidden">
                    {/* Центрированный заголовок поверх видео */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                        <h2 className="text-[10vw] text-white font-extrabold text-center">
                            Vincenzo 39 WA
                        </h2>
                    </div>

                    {/* Видео-блок */}
                    <div className="absolute inset-0 z-0">
                        {/* Десктоп-видео */}
                        <video
                            className="hidden md:block w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/videos/video1.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>

                        {/* Мобильное видео */}
                        <video
                            className="md:hidden w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/assets/videos/video2.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                </section>

            </div>
        </Scroll>
    );
};

export default Overlay;
