import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";  // Importar el Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nicolas Carrasco - Concesionaria de Autos",
  description: "Compra tu auto con nosotros",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-secondary`}>
        <Header />  {/* Colocamos el Header aquí */}
        <main>{children}</main>
        <Footer />  {/* Colocamos el Footer aquí */}
      </body>
    </html>
  );
}
