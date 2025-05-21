import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Contáctanos</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            ¿Tienes un proyecto, consulta o deseas más información? Estamos para ayudarte.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <div className="space-y-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Universidad Nacional del Altiplano - Puno</h3>
              <address className="not-italic text-muted-foreground space-y-1">
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-accent" />
                  Av. Floral N° 1153, Ciudad Universitaria, Puno - Perú
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-accent" />
                  <a href="tel:+5151366476" className="hover:text-accent transition-colors">+51 (51) 366476</a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-accent" />
                  <a href="mailto:info@unap.edu.pe" className="hover:text-accent transition-colors">info@unap.edu.pe</a>
                </p>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Horario de Atención</h3>
              <p className="text-muted-foreground">Lunes a Viernes: 8:00 AM - 4:45 PM</p>
              <p className="text-muted-foreground">Sábados y Domingos: Cerrado</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Síguenos</h3>
              <p className="text-muted-foreground">Conéctate en nuestras redes sociales para conocer noticias y eventos.</p>
              {/* Aquí puedes insertar íconos/redes si lo necesitas */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
