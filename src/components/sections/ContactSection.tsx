import ContactForm from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Contact Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Have a project in mind or need a quote? We're here to help.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ContactForm />
          <div className="space-y-8 pt-8 md:pt-0">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">ForgeNext Headquarters</h3>
              <address className="not-italic text-muted-foreground space-y-1">
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-accent" />
                  123 Metalwork Ave, Industrial Park, Anytown, USA 54321
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-accent" />
                  <a href="tel:+15551234567" className="hover:text-accent transition-colors">(555) 123-4567</a>
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-accent" />
                  <a href="mailto:info@forgenext.com" className="hover:text-accent transition-colors">info@forgenext.com</a>
                </p>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">Follow Us</h3>
               <p className="text-muted-foreground">Stay connected on social media for updates and project showcases.</p>
              {/* Placeholder for social media icons/links if needed beyond footer */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
