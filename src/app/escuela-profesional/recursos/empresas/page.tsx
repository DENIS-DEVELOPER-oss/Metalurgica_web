
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, Handshake, Projector, Presentation, FlaskConical, Cog, Search, 
  GraduationCap, Briefcase, Users, Lightbulb, RefreshCw, Rocket 
} from 'lucide-react';

const collaborationItems = [
  { title: "Convenios de Colaboración", description: "Información sobre cómo establecer convenios de colaboración con nuestra escuela.", icon: <Handshake className="h-6 w-6 text-primary mr-3 flex-shrink-0" /> },
  { title: "Proyectos de Investigación Conjunta", description: "Oportunidades para desarrollar proyectos de investigación en colaboración.", icon: <Projector className="h-6 w-6 text-primary mr-3 flex-shrink-0" /> },
  { title: "Programas de Formación a Medida", description: "Ofrecemos programas de formación personalizados para empresas del sector.", icon: <Presentation className="h-6 w-6 text-primary mr-3 flex-shrink-0" /> },
];

const technicalServicesItems = [
  { title: "Servicios de Laboratorio", description: "Acceso a nuestros laboratorios especializados para análisis y pruebas.", icon: <FlaskConical className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> },
  { title: "Consultoría Técnica", description: "Servicios de asesoría en procesos metalúrgicos y optimización.", icon: <Cog className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> },
  { title: "Investigación y Desarrollo", description: "Colaboración en proyectos de I+D para impulsar la innovación en su empresa.", icon: <Search className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" /> },
];

const talentEmploymentItems = [
  { title: "Prácticas Profesionales", description: "Programa de prácticas para estudiantes en empresas del sector.", icon: <GraduationCap className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" /> },
  { title: "Bolsa de Trabajo", description: "Publique ofertas de empleo para nuestros graduados y estudiantes.", icon: <Briefcase className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" /> },
  { title: "Ferias de Empleo", description: "Participe en nuestras ferias de empleo anuales.", icon: <Users className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" /> },
];

const techTransferItems = [
  { title: "Patentes y Licencias", description: "Información sobre nuestras patentes disponibles para licenciamiento.", icon: <Lightbulb className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" /> },
  { title: "Transferencia de Conocimiento", description: "Programas de transferencia de conocimiento y tecnología.", icon: <RefreshCw className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" /> },
  { title: "Incubadora de Empresas", description: "Apoyo para start-ups y spin-offs en el sector metalúrgico.", icon: <Rocket className="h-6 w-6 text-purple-500 mr-3 flex-shrink-0" /> },
];

export default function RecursosEmpresasPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/escuela-profesional/recursos" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Recursos
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-10 text-center">Recursos y Colaboración para Empresas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Colaboración Universidad-Empresa</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {collaborationItems.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start mb-1">
                  {item.icon}
                  <h4 className="font-semibold text-foreground">
                    <Link href="#" className="hover:underline">{item.title}</Link>
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground ml-9">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Servicios Técnicos y Consultoría</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {technicalServicesItems.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start mb-1">
                  {item.icon}
                  <h4 className="font-semibold text-foreground">
                    <Link href="#" className="hover:underline">{item.title}</Link>
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground ml-9">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Talento y Empleo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {talentEmploymentItems.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start mb-1">
                  {item.icon}
                  <h4 className="font-semibold text-foreground">
                    <Link href="#" className="hover:underline">{item.title}</Link>
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground ml-9">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-lg hover:shadow-xl transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Transferencia de Tecnología</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {techTransferItems.map((item, index) => (
              <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-start mb-1">
                  {item.icon}
                  <h4 className="font-semibold text-foreground">
                    <Link href="#" className="hover:underline">{item.title}</Link>
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground ml-9">{item.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <section className="mt-16 text-center bg-secondary p-8 rounded-lg shadow-xl">
        <h3 className="text-2xl font-semibold text-primary mb-3">¿Interesado en colaborar con nosotros?</h3>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Contacte con nuestro equipo de relaciones empresariales para explorar oportunidades de colaboración y cómo podemos trabajar juntos para el avance de la ingeniería metalúrgica.
        </p>
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 ease-in-out hover:scale-105">
          <Link href="/contactanos">Contáctanos</Link>
        </Button>
      </section>
    </div>
  );
}

    