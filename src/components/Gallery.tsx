import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import { X } from "lucide-react";
import { motion } from "motion/react";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [open, setOpen] = useState(false);

  const images: GalleryImage[] = [
    {
      src: "/gallery/images-1.jpg",
      alt: "Piscina y exteriores de Mi Refugio Olmué",
      title: "Piscina y exteriores",
    },

    {
      src: "/gallery/images-2.jpg",
      alt: "Cocina de Mi Refugio Olmué",
      title: "Cocina",
    },

    {
      src: "/gallery/images-3.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios externos",
    },

    {
      src: "/gallery/images-4.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios Externos",
    },

    {
      src: "/gallery/images-5.jpg",
      alt: "Piscina de Mi Refugio Olmué",
      title: "Piscina",
    },

    {
      src: "/gallery/images-6.jpg",
      alt: "Habitaciones de Mi Refugio Olmué",
      title: "Habitaciones",
    },

    {
      src: "/gallery/images-7.jpg",
      alt: "Llaves de Mi Refugio Olmué",
      title: "Llaves",
    },

    {
      src: "/gallery/images-8.jpg",
      alt: "Ubicación de Mi Refugio Olmué",
      title: "Ubicación",
    },

    {
      src: "/gallery/images-9.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios externos",
    },

    {
      src: "/gallery/images-10.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios Externos",
    },

    {
      src: "/gallery/images-11.jpg",
      alt: "Sitios de piscina de Mi Refugio Olmué",
      title: "Sitios de piscina",
    },

    {
      src: "/gallery/images-12.jpg",
      alt: "Baño de Mi Refugio Olmué",
      title: "Baño",
    },

    {
      src: "/gallery/images-13.jpg",
      alt: "Piscina de Mi Refugio Olmué",
      title: "Piscina",
    },

    {
      src: "/gallery/images-14.jpg",
      alt: "Sitios Externos de Mi Refugio Olmué",
      title: "Sitios Externos",
    },

    {
      src: "/gallery/images-15.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios Externos",
    },

    {
      src: "/gallery/images-16.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios Externos",
    },

    {
      src: "/gallery/images-17.jpg",
      alt: "Sitios externos de Mi Refugio Olmué",
      title: "Sitios Externos",
    },
  ];

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  return (
    <section id="galeria" className="py-20  pt-30 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Galería
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Conoce nuestro refugio y su entorno a través de imágenes
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative 2xl:w-[calc(25%_-_theme(spacing.6))] md:w-[calc(33%_-_theme(spacing.6))] sm:w-[calc(50%_-_theme(spacing.6))] w-[calc(100%_-_theme(spacing.6))] overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white font-medium p-4">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para ver imagen ampliada usando Dialog de shadcn/ui */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onClick={() => setOpen(false)}
          className="sm:max-w-4xl border-none shadow-none p-0 flex items-center justify-center"
        >
          <div className="flex flex-col items-center relative w-full max-w-96">
            <DialogClose className="absolute top-2 left-[100%] ml-2 bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition-colors z-10 cursor-pointer">
              <X size={24} />
              <span className="sr-only">Cerrar</span>
            </DialogClose>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedImage?.src || "/placeholder.svg"}
              alt={selectedImage?.alt}
              className="w-full h-auto max-h-[80vh]  object-cover rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage?.title}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
