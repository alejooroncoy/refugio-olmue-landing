import { Bed, Utensils, Wifi, Mountain, Car, Coffee } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-amber-100">
      <div className="bg-amber-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-amber-700" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-stone-800 mb-2">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  )
}

const Services = () => {
  const services: ServiceCardProps[] = [
    {
      icon: Bed,
      title: "Habitaciones Confortables",
      description: "Dormitorios acogedores con camas cómodas y ropa de cama de calidad para un descanso perfecto.",
    },
    {
      icon: Utensils,
      title: "Cocina Equipada",
      description: "Cocina completa con todos los utensilios necesarios para preparar tus comidas favoritas.",
    },
    {
      icon: Wifi,
      title: "WiFi Gratuito",
      description: "Mantente conectado con nuestro servicio de internet de alta velocidad en todas las cabañas.",
    },
    {
      icon: Mountain,
      title: "Entorno Natural",
      description: "Ubicación privilegiada rodeada de naturaleza, ideal para caminatas y actividades al aire libre.",
    },
    {
      icon: Car,
      title: "Estacionamiento Privado",
      description: "Estacionamiento seguro y gratuito para tu vehículo durante toda tu estadía.",
    },
    {
      icon: Coffee,
      title: "Áreas Comunes",
      description: "Espacios compartidos para relajarse, como quincho, terraza y jardines.",
    },
  ]

  return (
    <section id="servicios" className="py-20  pt-30 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Nuestros Servicios</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Todo lo que necesitas para una estadía perfecta en nuestras cabañas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
