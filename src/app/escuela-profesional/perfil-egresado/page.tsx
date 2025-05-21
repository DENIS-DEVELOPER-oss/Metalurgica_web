
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, Brain, Laptop, Users, Lightbulb, Mountain, Factory, FlaskConical, Cog, Recycle, HardHat } from 'lucide-react';

const generalCharacteristics = [
  "Interpreta y explica los procesos básicos de la metalurgia extractiva y transformativa.",
  "Formula proyectos de investigación, desarrollo, innovación, en la metalurgia extractiva y transformativa.",
  "Proyecta la producción metalúrgica con creatividad y responsabilidad social.",
  "Interpreta los resultados de análisis en minerales, metales y aleaciones, en procesos metalúrgicos.",
  "Formula propuestas de métodos y tecnologías en beneficio y obtención de metales estratégicos.",
  "Diseña programas de protección ambiental, salud y seguridad en los procesos productivos de la metalurgia.",
  "Analiza las estructuras y propiedades de metales y aleaciones no metálicos en la producción metalúrgica."
];

const genericCompetencies = [
  { title: "CG1", icon: <Brain className="h-10 w-10 text-primary mb-3" />, description: "Procesa ideas y conceptos mediante representaciones lingüísticas o gráficas para un adecuado desenvolvimiento personal." },
  { title: "CG2", icon: <Laptop className="h-10 w-10 text-primary mb-3" />, description: "Utiliza de manera pertinente e idónea tecnología de información y comunicación para desenvolverse en el contexto académico." },
  { title: "CG3", icon: <Users className="h-10 w-10 text-primary mb-3" />, description: "Utiliza habilidades personales para favorecer su desempeño en el ámbito personal y profesional actuando de manera democrática en cualquier contexto o circunstancia con todas las personas sin distinción." },
  { title: "CG4", icon: <Lightbulb className="h-10 w-10 text-primary mb-3" />, description: "Desarrolla emprendimiento creativo vinculado a su proyecto de vida, orientado a la construcción del tejido social, cultural y sociolaboral." },
  { title: "CG5", icon: <Mountain className="h-10 w-10 text-primary mb-3" />, description: "Identifica la importancia de la geología y minería general para el desarrollo regional y nacional." }
];

const specificCompetencies = [
  { title: "CE1", icon: <Factory className="h-10 w-10 text-green-500 mb-3" />, description: "Desarrolla operaciones y procesos metalúrgicos para la obtención de metales y no metales." },
  { title: "CE2", icon: <FlaskConical className="h-10 w-10 text-green-500 mb-3" />, description: "Formula proyectos de investigación, desarrollo, innovación, en la metalurgia extractiva y transformativa." },
  { title: "CE3", icon: <Cog className="h-10 w-10 text-green-500 mb-3" />, description: "Proyecta la producción metalúrgica con creatividad y responsabilidad social." },
  { title: "CE4", icon: <Recycle className="h-10 w-10 text-green-500 mb-3" />, description: "Investiga y soluciona problemas en las áreas de la metalurgia extractiva y transformativa con responsabilidad ambiental." },
  { title: "CE5", icon: <HardHat className="h-10 w-10 text-green-500 mb-3" />, description: "Diseña programas de protección ambiental, salud y seguridad en los procesos productivos de la metalurgia." }
];

export default function PerfilEgresadoPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/escuela-profesional" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Escuela Profesional
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-10 text-center">Perfil de Egreso</h1>

      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader className="bg-muted/50">
            <CardTitle className="text-2xl text-primary">Características Generales</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3 text-muted-foreground">
              {generalCharacteristics.map((char, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>{char}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Competencias Genéricas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genericCompetencies.map((comp, index) => (
            <Card key={index} className="shadow-lg flex flex-col h-full">
              <CardHeader className="items-center text-center pt-6">
                {comp.icon}
                <CardTitle className="text-xl text-primary">{comp.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground flex-grow">
                <p>{comp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Competencias Específicas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specificCompetencies.map((comp, index) => (
            <Card key={index} className="shadow-lg flex flex-col h-full">
              <CardHeader className="items-center text-center pt-6">
                {comp.icon}
                <CardTitle className="text-xl text-primary">{comp.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground flex-grow">
                <p>{comp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
