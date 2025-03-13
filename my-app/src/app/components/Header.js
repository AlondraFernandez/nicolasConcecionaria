// src/components/Header.js
"use client";
import Link from "next/link";

export default function Header() {
return (
    <header className="bg-black text-white py-4 px-8 flex justify-between items-center animate-fadeIn">
        <h1 className="text-3xl font-bold">
            <span className="text-red-500">N</span>
            <span className="text-gray-500">C</span>
        </h1>
        <nav>
            <ul className="flex gap-6">
                <li><Link href="/inicio" className="hover:text-primary hover:underline hover:text-red-500">inicio</Link></li>
                <li><Link href="/autos" className="hover:text-primary hover:underline hover:text-red-500">Autos</Link></li>
                <li><Link href="/contacto" className="hover:text-primary hover:underline hover:text-red-500">Contacto</Link></li>
            </ul>
        </nav>
    </header>
);
}
