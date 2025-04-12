import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/assets/Logo.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="p-2 rounded-lg bg-gray-100 size-20 mb-4">
              <img
                src={Logo.src}
                alt="Mi Refugio Olmue Logo"
                className="size-16 object-cover"
              />
            </div>
            <p className="text-stone-300 mb-4">
              Tu escape perfecto en medio de la naturaleza. Cabañas equipadas
              para una estadía inolvidable en Olmué.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-amber-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-amber-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-amber-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-stone-300 hover:text-amber-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-stone-300">Cabañas Equipadas</li>
              <li className="text-stone-300">WiFi Gratuito</li>
              <li className="text-stone-300">Estacionamiento Privado</li>
              <li className="text-stone-300">Áreas Comunes</li>
              <li className="text-stone-300">Entorno Natural</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="text-stone-300">Camino a Granizo s/n, Olmué</li>
              <li className="text-stone-300">+56 9 1234 5678</li>
              <li className="text-stone-300">contacto@mirefugioolmue.cl</li>
              <li className="text-stone-300">
                Lunes a Domingo: 9:00 - 20:00 hrs
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
          <p>
            &copy; {currentYear} Mi Refugio Olmué. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
