
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Recycle, Factory, Droplets, Leaf, Check, Handshake } from 'lucide-react';

export default function GestionAmbientalPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-foreground mb-6 text-center">Gestión Ambiental</h1>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">Nuestro Compromiso Ambiental</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              En la Escuela Profesional de Ingeniería Metalúrgica, entendemos la importancia crucial de la gestión ambiental en nuestra industria. Nos dedicamos a formar profesionales que no solo sean expertos en procesos metalúrgicos, sino también líderes en prácticas sostenibles y protección del medio ambiente.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Áreas de Enfoque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Reciclaje de Metales", description: "Desarrollamos técnicas avanzadas para el reciclaje eficiente de metales, reduciendo la necesidad de extracción de nuevos recursos.", icon: <Recycle className="h-12 w-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />, hint: "metal recycling" },
            { title: "Procesos de Producción Limpia", description: "Investigamos y aplicamos métodos de producción que minimizan emisiones y residuos en los procesos metalúrgicos.", icon: <Factory className="h-12 w-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />, hint: "clean factory" },
            { title: "Gestión de Aguas Residuales", description: "Implementamos sistemas avanzados de tratamiento de aguas para reducir el impacto ambiental de los procesos metalúrgicos.", icon: <Droplets className="h-12 w-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />, hint: "water treatment" },
            { title: "Restauración Ecológica", description: "Desarrollamos estrategias para la recuperación de ecosistemas afectados por actividades mineras y metalúrgicas.", icon: <Leaf className="h-12 w-12 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" />, hint: "plant restoration" },
          ].map((item, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
              {item.icon}
              <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</CardTitle>
              <CardContent className="text-muted-foreground text-sm p-0">
                <p>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Proyectos de Investigación Ambiental</h2>
        <div className="space-y-6">
          {[
            { title: "Biolixiviación de Metales", description: "Investigación sobre el uso de microorganismos para la extracción de metales, reduciendo el uso de químicos nocivos.", colorClass: "text-blue-600" },
            { title: "Nanotecnología para Remediación", description: "Desarrollo de nanopartículas para la limpieza de suelos y aguas contaminadas por metales pesados.", colorClass: "text-green-600" },
            { title: "Energía Renovable en Metalurgia", description: "Estudio sobre la integración de fuentes de energía renovable en procesos metalúrgicos de alta demanda energética.", colorClass: "text-yellow-600" },
          ].map((project, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle className={`text-xl ${project.colorClass}`}>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Educación y Concienciación</h2>
        <p className="text-lg text-muted-foreground mb-6 text-center">
          Ofrecemos programas educativos y talleres para estudiantes, profesionales y comunidades sobre:
        </p>
        <ul className="space-y-3">
          {[
            "Legislación ambiental en la industria metalúrgica",
            "Tecnologías verdes en procesos metalúrgicos",
            "Gestión de residuos y economía circular",
            "Evaluación de impacto ambiental en proyectos metalúrgicos",
          ].map((item, index) => (
            <li key={index} className="flex items-center bg-card rounded-lg shadow-md hover:shadow-lg p-4 transition-shadow duration-300 ease-in-out">
              <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-4 text-center">Colaboraciones y Alianzas</h2>
        <p className="text-lg text-muted-foreground mb-6 text-center">
          Trabajamos en estrecha colaboración con:
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Ministerio del Ambiente de Perú",
            "Empresas líderes en metalurgia sostenible",
            "Organizaciones internacionales de protección ambiental",
            "Instituciones académicas especializadas en gestión ambiental",
          ].map((item, index) => (
            <li key={index} className="flex items-center bg-card rounded-lg shadow-md hover:shadow-lg p-4 transition-shadow duration-300 ease-in-out">
              <Handshake className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 bg-green-50 dark:bg-green-900/30 rounded-lg p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.01]">
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 mb-4">Únete a Nuestro Compromiso</h2>
        <p className="text-lg text-green-600 dark:text-green-300 mb-6">
          Invitamos a estudiantes, profesionales y empresas a unirse a nuestro esfuerzo por una industria metalúrgica más sostenible.
        </p>
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white transition-all duration-300 ease-in-out hover:scale-105">
          <Link href="#">Participa en Nuestros Programas</Link>
        </Button>
      </section>
    </div>
  );
}
