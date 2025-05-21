
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-top-bar text-top-bar-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Acerca de la Universidad */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-2 text-white">Acerca de la Universidad</h4>
            <p className="text-sm text-gray-300">
              La Universidad Nacional del Altiplano - Puno es una institución de educación superior comprometida con la excelencia académica y la investigación innovadora.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://enlinea.sunedu.gob.pe/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <Image src="/images/sune.png" alt="SUNEDU" width={100} height={40} data-ai-hint="government logo education"/>
              </Link>
              <Link href="https://www.gob.pe/sineace" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                <Image src="/images/sinease.png" alt="SINEACE" width={100} height={40} data-ai-hint="government logo education"/>
              </Link>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/nuestra-informacion", label: "Acerca de nosotros" },
                { href: "https://www.minedu.gob.pe/reforma-universitaria/", label: "Reforma Universitaria", external: true },
                { href: "https://posgradounap.edu.pe/", label: "Escuela de Posgrado", external: true },
                { href: "https://tramites.unap.edu.pe/", label: "Trámites UNA - PUNO", external: true },
                { href: "https://vriunap.pe/", label: "Vicerrectorado de Investigación", external: true },
                { href: "#", label: "Biblioteca Virtual" },
                { href: "#", label: "Campus Virtual" },
                { href: "#", label: "Bolsa de Trabajo" },
              ].map(link => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-300 transition-colors"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div id="contact-section-footer">
            <h4 className="text-lg font-semibold mb-4 text-white">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-px flex-shrink-0" />
                <span>Av. Floral Nº 1153 - Puno</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <a href="tel:+51950942064" className="hover:text-blue-300">+51 950 942 064</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <a href="mailto:EChavez@unap.edu.pe" className="hover:text-blue-300">EChavez@unap.edu.pe</a>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-md font-semibold mb-2 text-white">Síguenos en:</h5>
              <div className="flex space-x-4">
                <Link href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="Facebook"><Facebook /></Link>
                <Link href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="Twitter"><Twitter /></Link>
                <Link href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="Instagram"><Instagram /></Link>
                <Link href="#" className="text-white hover:text-blue-400 transition-colors" aria-label="LinkedIn"><Linkedin /></Link>
              </div>
            </div>
          </div>

          {/* Ubicación */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Ubicación</h4>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.1791028642596!2d-70.01751912616504!3d-15.824667684956394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915d69babb63e6cf%3A0x6ee029a2683e96cf!2sAv.%20Floral%201153%2C%20Puno%2021001!5e0!3m2!1sen!2spe!4v1688323648385!5m2!1sen!2spe"
                width="100%"
                height="150"
                style={{ border:0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Ubicación"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <h5 className="text-lg font-semibold mb-2 text-white">Suscríbete a nuestro boletín</h5>
              <form className="flex">
                <Input type="email" placeholder="Tu correo electrónico" className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white placeholder-gray-400" />
                <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-r-lg">Suscribirse</Button>
              </form>
            </div>
            <div className="w-full md:w-1/2 text-center md:text-right text-sm">
              <Link href="#" className="text-gray-400 hover:text-white mr-4">Política de Privacidad</Link>
              <Link href="#" className="text-gray-400 hover:text-white mr-4">Términos de Uso</Link>
              <Link href="#" className="text-gray-400 hover:text-white">Mapa del Sitio</Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Universidad Nacional del Altiplano - Puno. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
