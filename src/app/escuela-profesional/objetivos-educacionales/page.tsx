
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, MessagesSquare, Puzzle, Cog, LineChart, Users, Scale, GraduationCap } from 'lucide-react';

const educationalObjectives = [
  {
    title: "Objetivo 1: Comunicación",
    icon: <MessagesSquare className="h-10 w-10 text-blue-500 mb-4" />,
    description: "Se comunica de manera asertiva y efectiva en forma oral, escrita y gráfica según los diferentes tipos de interlocutores o audiencias."
  },
  {
    title: "Objetivo 2: Solución de problemas de ingeniería",
    icon: <Puzzle className="h-10 w-10 text-green-500 mb-4" />,
    description: "Identifica, formula y resuelve problemas elementales de ingeniería metalúrgica, aplicando principios de ingeniería, ciencias y matemáticas, y usando técnicas, métodos, herramientas, y normas apropiadas."
  },
  {
    title: "Objetivo 3: Competencia técnica y responsabilidad social",
    icon: <Cog className="h-10 w-10 text-yellow-500 mb-4" />,
    description: "Demuestran competencias técnicas y metódicas para procesos de extracción, transformación y adaptación de minerales, metales, no metales y aleaciones logrando las propiedades físicas, químicas y mecánicas según su aplicación y uso industrial, a través de tecnologías limpias."
  },
  {
    title: "Objetivo 4: Adaptabilidad y logro",
    icon: <LineChart className="h-10 w-10 text-red-500 mb-4" />,
    description: "Trabajan y cooperan en diferentes contextos operacionales de ingeniería, estableciendo tácticas que permitan el logro de los objetivos proyectados y potencializando sus habilidades y vocación para su desarrollo profesional."
  },
  {
    title: "Objetivo 5: Liderazgo y trabajo en equipo",
    icon: <Users className="h-10 w-10 text-purple-500 mb-4" />,
    description: "Ejercen la profesión con liderazgo, gestionan proyectos y participan proactivamente con equipos de alto rendimiento para establecer estrategias en un mismo horizonte, comunicándose de manera efectiva y con clara actitud al logro eficaz de las metas."
  },
  {
    title: "Objetivo 6: Ética profesional, actitud científica y emprendimiento",
    icon: <Scale className="h-10 w-10 text-indigo-500 mb-4" />,
    description: "Se desenvuelven correctamente respetando los lineamientos y principios éticos de la carrera, aportando valor agregado a través del entendimiento científico, y proyectándose como ciudadanos, emprendedores y/o profesionales responsables en el ámbito minero metalúrgico."
  },
  {
    title: "Objetivo 7: Aprendizaje continuo y autónomo",
    icon: <GraduationCap className="h-10 w-10 text-pink-500 mb-4" />,
    description: "Desarrollan un pensamiento lógico, crítico y autónomo para asimilar los cambios y avances en la ingeniería metalúrgica, y completan su formación con estudios de especialidad y postgrado."
  }
];

export default function ObjetivosEducacionalesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/escuela-profesional" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Escuela Profesional
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-10 text-center">Objetivos Educacionales - Ingeniería Metalúrgica</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationalObjectives.map((objetivo, index) => (
          <Card key={index} className="shadow-lg flex flex-col h-full">
            <CardHeader className="items-center text-center pt-6">
              {objetivo.icon}
              <CardTitle className="text-xl text-primary">{objetivo.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground flex-grow">
              <p>{objetivo.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
