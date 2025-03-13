"use client";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Home() {
  const [autos, setAutos] = useState([]);
  const [filteredAutos, setFilteredAutos] = useState([]);
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [selectedAuto, setSelectedAuto] = useState(null); // Estado para el auto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Estado para el índice de la imagen activa

  useEffect(() => {
    fetch("/autos.json")
      .then((res) => res.json())
      .then((data) => {
        setAutos(data);
        setFilteredAutos(data);
      });
  }, []);

  useEffect(() => {
    let filtered = autos.filter((auto) =>
      auto.modelo.toLowerCase().includes(search.toLowerCase())
    );
    if (priceFilter === "low") {
      filtered.sort((a, b) => a.precio - b.precio);
    } else if (priceFilter === "high") {
      filtered.sort((a, b) => b.precio - a.precio);
    }
    setFilteredAutos(filtered);
  }, [search, priceFilter, autos]);

  // Hook para la animación de hover
  const hoverAnimation = useSpring({
    scale: 1.05,
    config: { tension: 170, friction: 26 }
  });

  // Función para abrir el modal con los detalles del auto
  const openModal = (auto) => {
    setSelectedAuto(auto);
    setIsModalOpen(true);
    setCurrentImageIndex(0); // Resetea la imagen activa al abrir el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAuto(null);
  };

  // Función para cambiar a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedAuto.imagenes.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar a la imagen siguiente
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === selectedAuto.imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Autos Section */}
      <section id="autos" className="py-16 px-8 bg-black text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestros Autos</h2>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar por modelo..."
            className="p-3 border-2 border-gray-600 rounded-lg text-grey-600"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="p-3 border-2 border-gray-600 rounded-lg text-grey-600"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="">Filtrar por precio</option>
            <option value="low">Menor a mayor</option>
            <option value="high">Mayor a menor</option>
          </select>
        </div>

        {/* Grid de autos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredAutos.map((auto) => (
            <animated.div
              key={auto.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
              style={hoverAnimation}
            >
              <img
                src={auto.imagen}
                alt={auto.modelo}
                className="w-full h-56 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black">{auto.modelo}</h3>
                <p className="text-gray-700 text-lg">${auto.precio.toLocaleString()}</p>

                {/* Botón para abrir el modal con detalles adicionales */}
                <button
                  onClick={() => openModal(auto)} // Abre el modal con los detalles del auto
                  className="mt-6 bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-all duration-300"
                >
                  Ver Más
                </button>
              </div>
            </animated.div>
          ))}
        </div>
      </section>

    {/* Modal de detalles del auto */}
        {isModalOpen && selectedAuto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg w-96 overflow-y-auto">
            <h3 className="text-3xl font-bold">{selectedAuto.modelo}</h3>
            <p className="text-lg mt-4 text-black">Año: {selectedAuto.año}</p>
            <p className="text-lg text-black">Kilómetros: {selectedAuto.kilometros}</p>
            <p className="text-lg text-black">Motor: {selectedAuto.motor}</p>
            <p className="text-lg text-black">Combustible: {selectedAuto.combustible}</p>
            <p className="text-lg text-black">Versión: {selectedAuto.version}</p>
            <p className="text-lg text-black">Precio: ${selectedAuto.precio.toLocaleString()}</p>

            {/* Carrusel de imágenes adicionales */}
            <div className="mt-6">
              <h4 className="text-xl font-bold">Imágenes adicionales</h4>
              <div className="relative mt-4">
                {/* Imagen activa */}
                <img
                  src={selectedAuto.imagenes[currentImageIndex]}
                  alt={`Imagen ${currentImageIndex + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />

                {/* Controles del carrusel */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <button
                    onClick={prevImage}
                    className="bg-red-600 text-white p-2 rounded-full shadow-lg"
                  >
                    &#60;
                  </button>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <button
                    onClick={nextImage}
                    className="bg-red-600 text-white p-2 rounded-full shadow-lg"
                  >
                    &#62;
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={closeModal} // Cierra el modal
              className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
