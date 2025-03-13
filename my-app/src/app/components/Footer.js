"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        {/* Sección de Información */}
            <div className="mb-6">
              <h4 className="text-2xl font-bold mb-2 text-red-500 animate-pulse">Nicolás Carrasco</h4>
              <p className="text-lg text-red-500 animate-pulse">Concesionaria de autos - Los mejores vehículos a tu alcance</p>
            </div>

            {/* Enlaces de navegación */}
        <div className="mb-6">
          <a href="#autos" className="text-lg mx-4 hover:underline">
            Ver Autos
          </a>
          <a href="#contacto" className="text-lg mx-4 hover:underline">
            Contacto
          </a>
          <a href="#nosotros" className="text-lg mx-4 hover:underline">
            Nosotros
          </a>
        </div>

        {/* Redes sociales */}
        <div className="mb-6">
          <a
            href="https://www.facebook.com"
            className="text-lg mx-4 hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com"
            className="text-lg mx-4 hover:text-pink-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com"
            className="text-lg mx-4 hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        {/* Información de contacto */}
        <div className="mb-6">
          <p className="text-lg">📍 Dirección: Calle Ficticia 123, Ciudad</p>
          <p className="text-lg">📞 Teléfono: +54 9 1234 5678</p>
        </div>

        {/* Copyright */}
        <div className="text-sm opacity-70">
          <p>&copy; 2025 Nicolás Carrasco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
