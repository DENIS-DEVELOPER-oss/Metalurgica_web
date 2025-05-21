
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Linkedin, Globe, Building, GraduationCap, FileText, Handshake, Users, 
  Briefcase, TreePine, Recycle, HandHelping, Sprout 
} from 'lucide-react';

export default function ResponsabilidadSocialPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Bolsa de Trabajo Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">Bolsa de Trabajo</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Explora oportunidades laborales en el campo de la Ingeniería Metalúrgica. Te ofrecemos recursos y enlaces útiles para ayudarte en tu búsqueda de empleo y desarrollo profesional.
        </p>
        
        <Card className="mb-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Recursos para tu búsqueda de empleo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Linkedin className="text-primary h-6 w-6 mr-4 flex-shrink-0" />
                <Link href="https://www.linkedin.com/jobs/search/?keywords=Ingenier%C3%ADa%20Metal%C3%BArgica&location=Per%C3%BA" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Buscar trabajos en LinkedIn
                </Link>
              </li>
              <li className="flex items-center">
                <Globe className="text-green-600 h-6 w-6 mr-4 flex-shrink-0" />
                <Link href="https://www.indeed.com.pe/jobs?q=Ingenier%C3%ADa+Metal%C3%BArgica" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Ofertas en Indeed
                </Link>
              </li>
              <li className="flex items-center">
                <Building className="text-yellow-500 h-6 w-6 mr-4 flex-shrink-0" />
                <Link href="https://www.bumeran.com.pe/empleos-busqueda-ingenieria-metalurgica.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Bumeran - Ingeniería Metalúrgica
                </Link>
              </li>
              <li className="flex items-center">
                <GraduationCap className="text-red-600 h-6 w-6 mr-4 flex-shrink-0" />
                <Link href="#" className="text-primary hover:underline">
                  Bolsa de trabajo de la universidad
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Consejos para tu búsqueda de empleo</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Mantén tu perfil de LinkedIn actualizado y completo</li>
              <li>Participa en redes profesionales y eventos de la industria</li>
              <li>Personaliza tu CV y carta de presentación para cada solicitud</li>
              <li>Desarrolla habilidades técnicas y blandas relevantes para el sector</li>
            </ul>
          </CardContent>
        </Card>
      </section>
  
      {/* Prepárate para tu Carrera Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">Prepárate para tu Carrera</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Como parte de nuestro compromiso con tu éxito profesional, ofrecemos recursos y talleres para ayudarte a prepararte para el mercado laboral:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <li className="flex items-center bg-card rounded-lg shadow-md p-6">
            <FileText className="text-primary h-7 w-7 mr-4 flex-shrink-0" />
            <span className="text-foreground">Taller de elaboración de CV</span>
          </li>
          <li className="flex items-center bg-card rounded-lg shadow-md p-6">
            <Handshake className="text-green-600 h-7 w-7 mr-4 flex-shrink-0" />
            <span className="text-foreground">Simulacros de entrevistas</span>
          </li>
          <li className="flex items-center bg-card rounded-lg shadow-md p-6">
            <Users className="text-yellow-500 h-7 w-7 mr-4 flex-shrink-0" />
            <span className="text-foreground">Networking con profesionales de la industria</span>
          </li>
          <li className="flex items-center bg-card rounded-lg shadow-md p-6">
            <Briefcase className="text-red-600 h-7 w-7 mr-4 flex-shrink-0" />
            <span className="text-foreground">Prácticas profesionales con empresas asociadas</span>
          </li>
        </ul>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 px-8 text-base">
          <Link href="#">Inscríbete en nuestros talleres</Link>
        </Button>
      </section>
  
      {/* Nuestro Compromiso Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-4">Nuestro Compromiso</h2>
        <p className="text-lg text-muted-foreground">
          En la Escuela Profesional de Ingeniería Metalúrgica, entendemos que nuestra responsabilidad va más allá de la formación académica. Nos comprometemos a contribuir positivamente a la sociedad y al medio ambiente a través de diversas iniciativas y programas.
        </p>
      </section>
  
      {/* Áreas de Acción Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Áreas de Acción</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <TreePine className="h-12 w-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Sostenibilidad Ambiental</h3>
            <p className="text-muted-foreground text-sm">
              Implementamos prácticas sostenibles en nuestros procesos y educamos sobre la importancia de la conservación del medio ambiente.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Desarrollo Comunitario</h3>
            <p className="text-muted-foreground text-sm">
              Colaboramos con comunidades locales para mejorar su calidad de vida a través de proyectos de desarrollo y capacitación.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Recycle className="h-12 w-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Gestión de Residuos</h3>
            <p className="text-muted-foreground text-sm">
              Promovemos el reciclaje y la gestión responsable de residuos metalúrgicos para minimizar el impacto ambiental.
            </p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Handshake className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Alianzas Estratégicas</h3>
            <p className="text-muted-foreground text-sm">
              Establecemos colaboraciones con empresas e instituciones para fomentar prácticas responsables en la industria metalúrgica.
            </p>
          </Card>
        </div>
      </section>
  
      {/* Impacto Social Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Impacto Social</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <GraduationCap className="h-16 w-16 text-primary mb-4" />
            <h3 className="text-4xl font-bold text-foreground mb-2">500+</h3>
            <p className="text-muted-foreground">Estudiantes involucrados en proyectos sociales</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <HandHelping className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-4xl font-bold text-foreground mb-2">20+</h3>
            <p className="text-muted-foreground">Comunidades beneficiadas</p>
          </Card>
          <Card className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow">
            <Sprout className="h-16 w-16 text-yellow-500 mb-4" />
            <h3 className="text-4xl font-bold text-foreground mb-2">1000+</h3>
            <p className="text-muted-foreground">Árboles plantados en proyectos de reforestación</p>
          </Card>
        </div>
      </section>
  
      {/* Únete a Nuestros Esfuerzos Section */}
      <section className="mb-12"> {/* Last section, adjust mb if needed */}
        <h2 className="text-3xl font-bold text-foreground mb-4">Únete a Nuestros Esfuerzos</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Invitamos a estudiantes, docentes, alumni y miembros de la comunidad a participar en nuestras iniciativas de responsabilidad social. Juntos podemos crear un impacto positivo y duradero.
        </p>
        <Button asChild className="bg-green-600 hover:bg-green-700 text-white rounded-full py-3 px-8 text-base">
          <Link href="#">Participa en Nuestros Proyectos</Link>
        </Button>
      </section>
    </div>
  );
}

    