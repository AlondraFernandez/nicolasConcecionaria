"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
    const [showN, setShowN] = useState(false);
    const [showC, setShowC] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    const [showImage, setShowImage] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowN(true), 500);
        setTimeout(() => setShowC(true), 1000);
        setTimeout(() => setShowImage(true), 1500);
        setTimeout(() => setShowAddress(true), 2000);
    }, []);

    return (
        <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center space-y-10 p-5">
            <div className="flex text-8xl font-bold">
                <span 
                    className={`text-red-500 transform transition-transform duration-1000 ${showN ? 'scale-100' : 'scale-0'}`}
                >N</span>
                <span 
                    className={`text-gray-500 transform transition-transform duration-1000 ${showC ? 'scale-100' : 'scale-0'}`}
                >C</span>
            </div>
            <div className={`w-full max-w-5xl mt-10 transition-opacity duration-1000 ease-in-out ${showImage ? 'opacity-100' : 'opacity-0'}`}>
                <Image 
                    src="/img/nico.webp" 
                    alt="Nicolas Carrasco Automotores" 
                    width={1200} 
                    height={600} 
                    layout="responsive" 
                />
            </div>
            <div className={`text-center text-lg bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-1000 ${showAddress ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
    <p className="text-red-500 font-bold text-xl">📍 Ubicación:</p>
    <p className="text-white">General Pico, La Pampa, Patagonia Argentina</p>
    <p className="mt-2 text-yellow-400 font-semibold text-lg">🚗 ¡Las mejores ofertas en autos 0km y usados!</p>
    <p className="text-white">🔹 Financiación a medida</p>
    <p className="text-white">🔹 Entrega inmediata</p>
    <p className="text-white">🔹 Tomamos tu usado</p>
    <p className="mt-3 text-green-400 font-bold">📞 Contactanos: +54 9 2302 123456</p>
</div>

        </div>
    );
}
