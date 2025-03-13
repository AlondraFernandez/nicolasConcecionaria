"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Contacto() {
  const [showForm, setShowForm] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showTitle, setShowTitle] = useState(false); // Nuevo estado para el título animado
  const [showNC, setShowNC] = useState(false); // Estado para mostrar "NC"
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  useEffect(() => {
    setTimeout(() => setShowImage(true), 500);
    setTimeout(() => setShowForm(true), 1000);
    setTimeout(() => setShowTitle(true), 1500); // Mostrar el título con animación después de 1.5 segundos
    setTimeout(() => setShowNC(true), 2000); // Mostrar las letras "NC" después de 2 segundos
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado!");
    setFormData({
      nombre: "",
      email: "",
      mensaje: "",
    });
  };

  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center relative p-5">
      {/* Fondo de imagen con desenfoque */}
      <div
        className={`absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-1000 ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/img/nico.webp"
          alt="Nicolas Carrasco Automotores"
          layout="fill"
          objectFit="cover"
          priority
          className="filter blur-[10px]" // Filtro de desenfoque
        />
      </div>

      {/* Contenido en frente de la imagen */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-center space-y-8">
        {/* Letras NC animadas */}
        <div className="flex text-8xl font-bold">
          <span
            className={`text-red-500 transform transition-transform duration-1000 ${showNC ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            N
          </span>
          <span
            className={`text-gray-500 transform transition-transform duration-1000 ${showNC ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
          >
            C
          </span>
        </div>

        {/* Título de contacto animado */}
        <div
          className={`text-3xl font-semibold transition-transform duration-1000 ${
            showTitle ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <p>Contáctanos</p>
        </div>

        {/* Formulario */}
        <div
          className={`w-full max-w-2xl bg-gray-800 p-8 rounded-lg shadow-lg transition-transform duration-1000 ${
            showForm ? "transform scale-100 opacity-100" : "transform scale-0 opacity-0"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nombre" className="text-lg text-white block mb-2">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg text-white block mb-2">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600"
                required
              />
            </div>

            <div>
              <label htmlFor="mensaje" className="text-lg text-white block mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border-2 border-gray-600 h-40"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-all duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
