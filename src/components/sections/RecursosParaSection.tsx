
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, GraduationCap, FlaskConical, Globe, Building2, User, Newspaper } from "lucide-react";
import Link from 'next/link';

const recursos = [
  { title: "Investigadores", icon: <Microscope className="text-primary text-2xl mr-3" />, description: "Acceso a recursos y herramientas para apoyar tu investigación académica.", link: "https://biblioteca.concytec.gob.pe/", linkText: "Explorar recursos" },
  { title: "Futuros Estudiantes", icon: <GraduationCap className="text-primary text-2xl mr-3" />, description: "Información sobre programas, admisiones y vida estudiantil para aspirantes.", link: "https://admision.unap.edu.pe/index", linkText: "Descubre más" },
  { title: "Personal Investigador en Formación", icon: <FlaskConical className="text-primary text-2xl mr-3" />, description: "Recursos para investigadores en etapas tempranas de su carrera académica.", link: "#", linkText: "Ver recursos" },
  { title: "Internacional", icon: <Globe className="text-primary text-2xl mr-3" />, description: "Información para estudiantes internacionales y oportunidades de intercambio.", link: "#", linkText: "Explorar opciones" },
  { title: "Empresas", icon: <Building2 className="text-primary text-2xl mr-3" />, description: "Colaboraciones, prácticas y oportunidades para el sector empresarial.", link: "#", linkText: "Conectar" },
  { title: "Alumni", icon: <User className="text-primary text-2xl mr-3" />, description: "Red de exalumnos, eventos y oportunidades para graduados.", link: "https://campus.unap.edu.pe/", linkText: "Acceder", external: true },
  { title: "Medios de Comunicación", icon: <Newspaper className="text-primary text-2xl mr-3" />, description: "Noticias, eventos y recursos para la prensa y medios de comunicación.", link: "https://www.facebook.com/profile.php?id=61555973130089", linkText: "Ver noticias", external: true },
];

export default function RecursosParaSection() {
  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-foreground mb-6">Recursos para:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recursos.map((recurso, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition duration-300">
              <CardContent className="p-5">
                <div className="flex items-center mb-4">
                  {recurso.icon}
                  <h3 className="text-lg font-semibold text-foreground">{recurso.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{recurso.description}</p>
                <Link 
                  href={recurso.link} 
                  className="text-primary hover:text-primary/80 font-semibold"
                  target={recurso.external ? "_blank" : "_self"}
                  rel={recurso.external ? "noopener noreferrer" : ""}
                >
                  {recurso.linkText} &rarr;
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
