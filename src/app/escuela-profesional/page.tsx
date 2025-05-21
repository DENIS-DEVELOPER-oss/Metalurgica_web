
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Target, GraduationCap, UserCheck, BookOpen, Star, FlaskConical, Handshake, Award, Rocket } from 'lucide-react';

const navItems = [
  { title: 'Misión y Visión', icon: <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />, href: '/escuela-profesional/mision-vision', bgColor: 'bg-blue-100', textColor: 'text-blue-700', hoverBgColor: 'hover:bg-blue-200' },
  { title: 'Objetivos Educacionales', icon: <GraduationCap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />, href: '/escuela-profesional/objetivos-educacionales', bgColor: 'bg-green-100', textColor: 'text-green-700', hoverBgColor: 'hover:bg-green-200' },
  { title: 'Perfil del Egresado', icon: <UserCheck className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />, href: '/escuela-profesional/perfil-egresado', bgColor: 'bg-yellow-100', textColor: 'text-yellow-700', hoverBgColor: 'hover:bg-yellow-200' },
  { title: 'Recursos', icon: <BookOpen className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />, href: '#', bgColor: 'bg-purple-100', textColor: 'text-purple-700', hoverBgColor: 'hover:bg-purple-200' },
];

const historyEvents = [
  {
    year: "1984 - Fundación",
    description: "La Escuela Profesional de Ingeniería Metalúrgica se establece en la Universidad Nacional del Altiplano, marcando el inicio de una nueva era en la educación de ingeniería en la región.",
    icon: <Star className="text-white" />,
    bgColor: "bg-primary",
    align: "left"
  },
  {
    year: "1989 - Primera Promoción",
    description: "Celebramos la graduación de nuestra primera promoción de ingenieros metalúrgicos, listos para impactar en la industria.",
    icon: <GraduationCap className="text-white" />,
    bgColor: "bg-green-500",
    align: "right"
  },
  {
    year: "1995 - Inauguración de Laboratorios",
    description: "Se inauguran laboratorios de última generación, potenciando la investigación y la formación práctica de nuestros estudiantes.",
    icon: <FlaskConical className="text-white" />,
    bgColor: "bg-yellow-500",
    align: "left"
  },
  {
    year: "2005 - Alianzas Estratégicas",
    description: "Establecemos alianzas clave con empresas líderes del sector, abriendo nuevas oportunidades para nuestros estudiantes y egresados.",
    icon: <Handshake className="text-white" />,
    bgColor: "bg-red-500",
    align: "right"
  },
  {
    year: "2015 - Acreditación ICACIT",
    description: "Logramos la prestigiosa acreditación ICACIT, reconociendo la calidad y excelencia de nuestro programa educativo.",
    icon: <Award className="text-white" />,
    bgColor: "bg-purple-500",
    align: "left"
  },
  {
    year: "2024 - Mirando al Futuro",
    description: "Continuamos innovando y expandiendo nuestros horizontes, preparando a la próxima generación de líderes en ingeniería metalúrgica.",
    icon: <Rocket className="text-white" />,
    bgColor: "bg-indigo-500",
    align: "right"
  }
];

export default function EscuelaProfesionalPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-10 text-center">Escuela Profesional</h1>

      <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {navItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <Card className={`text-center ${item.hoverBgColor} transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer h-full flex flex-col justify-center items-center group`}>
              <CardContent className="p-6 flex flex-col items-center gap-3">
                <div className={`p-3 rounded-full ${item.bgColor} mb-2`}>
                  {item.icon}
                </div>
                <span className={`font-semibold ${item.textColor}`}>{item.title}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </nav>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nuestra Historia</h2>
        <div className="relative">
          {/* Central Timeline Bar */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {historyEvents.map((event, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Dot */}
                <div className={`absolute left-1/2 top-0 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full ${event.bgColor} flex items-center justify-center shadow-md border-4 border-background`}>
                  {event.icon}
                </div>

                {/* Content Card - Conditional alignment */}
                <div className={`w-full md:w-2/5 p-1 ${event.align === 'left' ? 'md:mr-auto md:pr-8 text-left' : 'md:ml-auto md:pl-8 text-left md:text-right'}`}>
                  <Card className="bg-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className={`text-xl font-semibold text-primary mb-2`}>{event.year}</h3>
                      <p className="text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>
                 {/* Spacer for mobile view to push content below the dot */}
                 <div className="md:hidden w-full h-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
