import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/Logo.webp";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animation-header `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img
              src={Logo.src}
              alt="Mi Refugio Olmue Logo"
              className="size-16"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className={`font-medium transition-colors animation-header-links`}
            >
              Inicio
            </a>
            <a
              href="#nosotros"
              className={`font-medium transition-colors animation-header-links`}
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              className={`font-medium transition-colors animation-header-links`}
            >
              Servicios
            </a>
            <a
              href="#galeria"
              className={`font-medium transition-colors animation-header-links`}
            >
              Galería
            </a>
            <a
              href="#contacto"
              className={`font-medium transition-colors animation-header-links`}
            >
              Contacto
            </a>
          </nav>

          <Button
            variant="secondary"
            className="hidden md:flex cursor-pointer"
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Reservar Ahora
          </Button>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden animation-header-links`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#inicio"
                  className="text-stone-800 hover:text-amber-700 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#nosotros"
                  className="text-stone-800 hover:text-amber-700 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Nosotros
                </a>
                <a
                  href="#servicios"
                  className="text-stone-800 hover:text-amber-700 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  href="#galeria"
                  className="text-stone-800 hover:text-amber-700 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galería
                </a>
                <a
                  href="#contacto"
                  className="text-stone-800 hover:text-amber-700 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </a>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => {
                    document
                      .getElementById("contacto")
                      ?.scrollIntoView({ behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  Reservar Ahora
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
