import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-dvh flex flex-col justify-center pt-16 bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-4 text-center text-white mt-[-5vh]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tu Escape Perfecto en Olmué
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Descubre la tranquilidad y belleza de nuestra cabaña en medio de
            la naturaleza
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg cursor-pointer"
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Reservar Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg bg-transparent border-white text-white hover:bg-white/20 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("galeria")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver Galería
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <button
          onClick={() =>
            document
              .getElementById("nosotros")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="animate-bounce bg-white/20 p-2 w-10 h-10 ring-1 ring-white/20 rounded-full cursor-pointer"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-6 h-6 text-white mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
