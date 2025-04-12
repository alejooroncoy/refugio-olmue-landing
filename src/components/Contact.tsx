"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useToast } from "../hooks/use-toast"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor ingresa un correo electrónico válido.",
  }),
  phone: z.string().min(9, {
    message: "Por favor ingresa un número de teléfono válido.",
  }),
  checkIn: z.string().optional(),
  checkOut: z.string().optional(),
  guests: z.string().optional(),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const Contact = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    },
  })

  function onSubmit(data: FormValues) {
    setIsSubmitting(true)

    // Simulación de envío de formulario
    setTimeout(() => {
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto contigo pronto. ¡Gracias por tu interés!",
      })
      form.reset()
      setIsSubmitting(false)
    }, 1500)
  }

  return (
    <section id="contacto" className="py-20  pt-30 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Contáctanos</h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Reserva tu estadía o solicita más información sobre nuestras cabañas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-stone-800 mb-6">Formulario de Contacto</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-stone-700">Nombre completo *</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingresa tu nombre" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-stone-700">Correo electrónico *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-stone-700">Teléfono *</FormLabel>
                        <FormControl>
                          <Input placeholder="+56 9 1234 5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="checkIn"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-stone-700">Fecha de llegada</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="checkOut"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-stone-700">Fecha de salida</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-stone-700">N° de personas</FormLabel>
                        <FormControl>
                          <Input type="number" min="1" placeholder="2" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-stone-700">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos tus dudas o requerimientos especiales" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant="secondary" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-stone-800 mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Teléfono</h4>
                    <p className="text-stone-600">+56 9 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Correo Electrónico</h4>
                    <p className="text-stone-600">contacto@mirefugioolmue.cl</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Ubicación</h4>
                    <p className="text-stone-600">Camino a Granizo s/n, Olmué, Región de Valparaíso, Chile</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Calendar className="text-amber-700" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-stone-800">Horario de Atención</h4>
                    <p className="text-stone-600">Lunes a Domingo: 9:00 - 20:00 hrs</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-amber-100">
              <h4 className="font-semibold text-stone-800 mb-3">¿Prefieres reservar por teléfono?</h4>
              <p className="text-stone-600 mb-4">Llámanos directamente y te ayudaremos con tu reserva.</p>
              <Button variant="outline" className="w-full">
                <Phone className="mr-2 h-4 w-4" /> Llamar Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
