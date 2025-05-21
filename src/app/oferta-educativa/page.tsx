
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import { Clock, GraduationCap, Award, CalendarDays, Users, UsersRound, Briefcase, Factory, Cog, Microscope, Recycle, HardHat, FlaskConical } from 'lucide-react';

const testimonials = [
  {
    quote: "La formación que recibí me permitió destacar en la industria desde el primer día.",
    author: "María Rodríguez, Ingeniera en Southern Copper",
    imageUrl: "https://placehold.co/96x96.png",
    imageHint: "person portrait",
  },
  {
    quote: "Las prácticas en laboratorio fueron fundamentales para mi desarrollo profesional.",
    author: "Carlos Mendoza, Investigador en CONCYTEC",
    imageUrl: "https://placehold.co/96x96.png",
    imageHint: "person portrait",
  },
  {
    quote: "Los proyectos de investigación me abrieron puertas en el ámbito académico internacional.",
    author: "Jorge Sánchez, Docente en la Universidad de São Paulo",
    imageUrl: "https://placehold.co/96x96.png",
    imageHint: "person portrait",
  },
  {
    quote: "La formación en gestión ambiental ha sido crucial en mi rol actual en minería sostenible.",
    author: "Juan Quispe, Gerente Ambiental en Minera Antamina",
    imageUrl: "https://placehold.co/96x96.png",
    imageHint: "person portrait",
  },
];

const specializationAreas = [
  { title: "Metalurgia Extractiva", description: "Enfocada en los procesos de extracción de metales a partir de minerales.", icon: <Factory className="h-10 w-10 text-primary mb-4" /> },
  { title: "Metalurgia de Transformación", description: "Centrada en los procesos de conformado y tratamiento de metales y aleaciones.", icon: <Cog className="h-10 w-10 text-primary mb-4" /> },
  { title: "Ciencia de Materiales", description: "Estudio de la relación entre la estructura y las propiedades de los materiales.", icon: <Microscope className="h-10 w-10 text-primary mb-4" /> },
  { title: "Metalurgia Sostenible", description: "Enfocada en procesos metalúrgicos eco-amigables y reciclaje de metales.", icon: <Recycle className="h-10 w-10 text-primary mb-4" /> },
];

const careerOpportunities = [
  { title: "Industria Minera", description: "Supervisión y optimización de procesos de extracción y refinación de metales.", icon: <HardHat className="h-10 w-10 text-primary mb-4" /> },
  { title: "Industria Siderúrgica", description: "Gestión de procesos de producción de acero y aleaciones.", icon: <Factory className="h-10 w-10 text-primary mb-4" /> },
  { title: "Investigación y Desarrollo", description: "Desarrollo de nuevos materiales y mejora de procesos metalúrgicos.", icon: <FlaskConical className="h-10 w-10 text-primary mb-4" /> },
  { title: "Gestión Ambiental", description: "Implementación de procesos sostenibles y gestión de residuos metálicos.", icon: <Recycle className="h-10 w-10 text-primary mb-4" /> },
];

export default function OfertaEducativaPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <section className="bg-secondary rounded-lg shadow-lg p-8 mb-16">
        <h1 className="text-3xl font-bold text-primary mb-4">Ingeniería Metalúrgica</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Forma profesionales capaces de diseñar, optimizar y gestionar procesos metalúrgicos para la extracción, transformación y aplicación de metales y materiales afines.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-foreground">
          <li className="flex items-center"><Clock className="text-accent h-5 w-5 mr-2 flex-shrink-0" /> Duración: 5 años</li>
          <li className="flex items-center"><GraduationCap className="text-accent h-5 w-5 mr-2 flex-shrink-0" /> Grado: Bachiller en Ingeniería Metalúrgica</li>
          <li className="flex items-center"><Award className="text-accent h-5 w-5 mr-2 flex-shrink-0" /> Título: Ingeniero Metalúrgico</li>
        </ul>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-3 px-8 text-base">
          <Link href="/oferta-educativa/plan-de-estudios">Más información</Link>
        </Button>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Nuestras Cifras</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: <CalendarDays className="h-10 w-10 text-accent mb-4" />, value: "1982", label: "Creada en" },
            { icon: <Users className="h-10 w-10 text-accent mb-4" />, value: "23", label: "Docentes" },
            { icon: <UsersRound className="h-10 w-10 text-accent mb-4" />, value: "480", label: "Estudiantes Matriculados" },
            { icon: <GraduationCap className="h-10 w-10 text-accent mb-4" />, value: "1700", label: "Egresados" },
            { icon: <Briefcase className="h-10 w-10 text-accent mb-4" />, value: "620", label: "Profesionales" },
          ].map((item, index) => (
            <Card key={index} className="text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="flex flex-col items-center">
                {item.icon}
                <p className="text-4xl font-bold text-foreground mb-1">{item.value}</p>
                <p className="text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Áreas de Especialización</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializationAreas.map((area, index) => (
            <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardHeader className="items-center p-2">
                {area.icon}
                <CardTitle className="text-xl text-center text-foreground">{area.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm flex-grow">
                {area.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Oportunidades Laborales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerOpportunities.map((opportunity, index) => (
             <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
              <CardHeader className="items-center p-2">
                {opportunity.icon}
                <CardTitle className="text-xl text-center text-foreground">{opportunity.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground text-sm flex-grow">
                {opportunity.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-primary mb-10 text-center">Lo que dicen nuestros egresados</h2>
        <TestimonialsCarousel testimonials={testimonials} />
      </section>
    </div>
  );
}

    