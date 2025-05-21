
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Laptop, Youtube, FlaskConical, GraduationCap, Users, CalendarDays, Briefcase, Building } from 'lucide-react';

const recursos = [
  {
    title: "Biblioteca Digital",
    icon: <BookOpen className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Accede a una amplia colección de libros electrónicos, revistas científicas y papers relacionados con la ingeniería metalúrgica.",
    linkText: "Explorar Biblioteca",
    href: "#" // Placeholder link
  },
  {
    title: "Software Especializado",
    icon: <Laptop className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Descarga y aprende a usar software de simulación y modelado para procesos metalúrgicos.",
    linkText: "Ver Software Disponible",
    href: "#" // Placeholder link
  },
  {
    title: "Videotutoriales",
    icon: <Youtube className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Accede a una colección de videos explicativos sobre diversos temas de metalurgia y procesos industriales.",
    linkText: "Ver Videotutoriales",
    href: "#" // Placeholder link
  },
  {
    title: "Guías de Laboratorio",
    icon: <FlaskConical className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Descarga guías detalladas para las prácticas de laboratorio de metalurgia.",
    linkText: "Descargar Guías",
    href: "#" // Placeholder link
  },
  {
    title: "Cursos Online",
    icon: <GraduationCap className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Accede a cursos en línea gratuitos para complementar tu formación en ingeniería metalúrgica.",
    linkText: "Explorar Cursos",
    href: "#" // Placeholder link
  },
  {
    title: "Foro de Estudiantes",
    icon: <Users className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Participa en discusiones, haz preguntas y comparte conocimientos con otros estudiantes de la carrera.",
    linkText: "Ir al Foro",
    href: "#" // Placeholder link
  },
  {
    title: "Eventos y Conferencias",
    icon: <CalendarDays className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Mantente informado sobre próximos eventos, conferencias y seminarios relacionados con la metalurgia.",
    linkText: "Ver Calendario",
    href: "#" // Placeholder link
  },
  {
    title: "Bolsa de Trabajo",
    icon: <Briefcase className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Explora oportunidades laborales y prácticas profesionales en el campo de la ingeniería metalúrgica.",
    linkText: "Ver Ofertas",
    href: "/responsabilidad-social" // Link to the job board section in responsibility social page
  },
  {
    title: "Recursos para Empresas",
    icon: <Building className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />,
    description: "Colaboraciones, servicios técnicos, talento y transferencia de tecnología para el sector empresarial.",
    linkText: "Conectar →",
    href: "/escuela-profesional/recursos/empresas" 
  }
];

export default function RecursosPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/escuela-profesional" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Escuela Profesional
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-10 text-center">Recursos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"> {/* Adjusted to 3 columns for better fit */}
        {recursos.map((recurso, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full group">
            <CardHeader className="items-center text-center pt-6">
              {recurso.icon}
              <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">{recurso.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground flex-grow">
              <p className="mb-4">{recurso.description}</p>
            </CardContent>
            <div className="p-6 pt-0 mt-auto">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href={recurso.href}>{recurso.linkText}</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
