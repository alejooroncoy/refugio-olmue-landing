import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "./ui/dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryVideo {
  src: string;
  alt: string;
  title: string;
  thumbnail?: string;
}

const GalleryVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [open, setOpen] = useState(false);

  const videos: GalleryVideo[] = [
    {
      src: "/gallery-videos/videoMirefugio1.mp4",
      alt: "Video 1 de Mi Refugio Olmué",
      title: "Exteriores y piscina (Día)",
      thumbnail: "/gallery-videos/videoMirefugio1.png",
    },
    {
      src: "/gallery-videos/videoMirefugio2.mp4",
      alt: "Video 2 de Mi Refugio Olmué",
      title: "Exteriores y piscina (Noche)",
      thumbnail: "/gallery-videos/videoMirefugio2.png",
    },
    {
      src: "/gallery-videos/videoMirefugio3.mp4",
      alt: "Video 3 de Mi Refugio Olmué",
      title: "Refugio",
      thumbnail: "/gallery-videos/videoMirefugio3.png",
    },
  ];

  const openModal = (video: GalleryVideo) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  return (
    <section id="galeria-videos" className="py-20 pt-30 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">
            Galería de Videos
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Conoce nuestro refugio y su entorno a través de videos
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative 2xl:w-[calc(25%_-_theme(spacing.6))] md:w-[calc(33%_-_theme(spacing.6))] sm:w-[calc(50%_-_theme(spacing.6))] w-[calc(100%_-_theme(spacing.6))] overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => openModal(video)}
            >
              {video.thumbnail ? (
                <img
                  src={video.thumbnail}
                  alt={video.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              ) : (
                <video
                  src={video.src}
                  className="w-full h-64 object-cover"
                  muted
                  playsInline
                  onMouseOver={(e) => e.currentTarget.play()}
                  onMouseOut={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white font-medium p-4">{video.title}</h3>
              </div>

              {/* Video Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-amber-600/80 flex items-center justify-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          onClick={() => setOpen(false)}
          className="sm:max-w-4xl border-none shadow-none p-0 flex items-center justify-center bg-transparent"
        >
          <div className="flex flex-col items-center relative w-full max-w-4xl">
            <DialogClose className="absolute top-2 left-[100%] ml-2 bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition-colors z-10 cursor-pointer">
              <X size={24} />
              <span className="sr-only">Cerrar</span>
            </DialogClose>
            <motion.video
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              src={selectedVideo?.src}
              controls
              autoPlay
              className="w-full h-auto max-h-[80vh] rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedVideo?.title}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GalleryVideos;
