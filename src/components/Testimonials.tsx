import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  date: string
  rating: number
  text: string
}

const TestimonialCard = ({ name, date, rating, text }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-amber-100">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className={i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"} />
        ))}
      </div>
      <p className="text-stone-700 mb-4 italic">"{text}"</p>
      <div className="flex justify-between items-center">
        <p className="font-medium text-stone-800">{name}</p>
        <p className="text-sm text-stone-500">{date}</p>
      </div>
    </div>
  )
}

const Testimonials = () => {
  const testimonials: TestimonialCardProps[] = [
    {
      name: "Carolina Mendoza",
      date: "Marzo 2023",
      rating: 5,
      text: "Una experiencia maravillosa. La cabaña estaba impecable y el entorno es precioso. Volveremos pronto con toda la familia.",
    },
    {
      name: "Rodrigo Fuentes",
      date: "Enero 2023",
      rating: 5,
      text: "El lugar perfecto para desconectar. Las cabañas son muy cómodas y los anfitriones son muy atentos. Totalmente recomendable.",
    },
    {
      name: "Valentina Torres",
      date: "Febrero 2023",
      rating: 4,
      text: "Pasamos un fin de semana increíble. La ubicación es perfecta para hacer excursiones y la cabaña tenía todo lo necesario.",
    },
  ]

  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Lo que dicen nuestros huéspedes</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Experiencias reales de quienes ya disfrutaron de Mi Refugio Olmué
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              date={testimonial.date}
              rating={testimonial.rating}
              text={testimonial.text}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
