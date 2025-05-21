
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, Microscope, School, Users, BookOpen, GraduationCap, FlaskConical, Laptop, 
  Mountain, Cog, Leaf, LineChart, ExternalLink, University, Info, CalendarDays, Layers, Languages, FileText, File 
} from 'lucide-react';

const quickNavItems = [
  { title: 'Líneas de Investigación', icon: <Microscope className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: '#lineas-investigacion', color: 'bg-blue-500 hover:bg-blue-600' },
  { title: 'Ambientes Académicos', icon: <School className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: '#ambientes-academicos', color: 'bg-green-500 hover:bg-green-600' },
  { title: 'Investigadores', icon: <Users className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: '#investigadores', color: 'bg-yellow-500 hover:bg-yellow-600 text-card-foreground' },
  { title: 'Publicaciones', icon: <BookOpen className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: '#publicaciones', color: 'bg-red-500 hover:bg-red-600' },
  { title: 'Repositorio de Tesis', icon: <GraduationCap className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: 'http://repositorio.unap.edu.pe/', external: true, color: 'bg-purple-500 hover:bg-purple-600' },
  { title: 'Laboratorios y Gabinetes', icon: <FlaskConical className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: '#laboratorios-gabinetes', color: 'bg-indigo-500 hover:bg-indigo-600' },
  { title: 'Campus Virtual', icon: <Laptop className="h-8 w-8 mb-2 group-hover:scale-110 transition-transform" />, href: 'https://campus.unap.edu.pe/', external: true, color: 'bg-pink-500 hover:bg-pink-600' },
];

const researchLines = [
  {
    title: 'Geotécnia Minera e Hidrogeología',
    icon: <Mountain className="h-10 w-10 text-primary mr-4" />,
    items: ['Mecánica de Rocas', 'Mecánica de Suelos', 'Geomecánica y Geotécnia Minera', 'Hidrología e Hidrogeología aplicado a Minería', 'Geofísica Aplicado a Minería Superficial y Subterránea'],
  },
  {
    title: 'Tecnología de Explotación Minera',
    icon: <Cog className="h-10 w-10 text-green-500 mr-4" />,
    items: ['Diseño y Optimización de Procesos Extractivos', 'Servicios Auxiliares en Minería', 'Costos y Comercialización de Concentrados Minerales'],
  },
  {
    title: 'Responsabilidad y Sostenibilidad en Minera',
    icon: <Leaf className="h-10 w-10 text-yellow-500 mr-4" />,
    items: ['Gestión Ambiental y Cierre de Minas', 'Gerencia Social en Minería', 'Seguridad y Salud Ocupacional', 'Sistemas de Gestión de Calidad en Minería'],
  },
  {
    title: 'Diseño y Modelamiento de Sistemas Mineros',
    icon: <LineChart className="h-10 w-10 text-red-500 mr-4" />,
    items: ['Diseño y Planeación de Minado', 'Investigación de Operaciones Mineras', 'Simulación y Modelamiento de Sistemas', 'Formulación y Evaluación de Proyectos', 'Gerencia Económica-Financiera de Proyectos'],
  },
];

const academicEnvironments = [
  { title: 'Aula Moderna', description: 'Espacios equipados con la última tecnología para un aprendizaje efectivo.', imageUrl: '/images/aula1.jpg', imageHint: 'modern classroom technology' },
  { title: 'Laboratorio Equipado', description: 'Instalaciones de vanguardia para la investigación y práctica experimental.', imageUrl: '/images/laboratorio1.jpg', imageHint: 'science laboratory equipment' },
  { title: 'Biblioteca Especializada', description: 'Amplia colección de recursos para el estudio y la investigación en metalurgia.', imageUrl: '/images/biblioteca.jpg', imageHint: 'university library books' },
];

const researchers = [
  {
    name: 'Dr. SARMIENTO SARMIENTO ANTONIO WALTER',
    role: 'Director del Departamento académico de la escuela profesional de Ingeniería Metalúrgica',
    imageUrl: '/images/investigador1.jpg',
    imageHint: 'researcher portrait',
    details: [
      { text: 'Ph.D. en Ingeniería Metalúrgica', icon: <GraduationCap className="h-5 w-5 text-primary mr-2" /> },
      { text: 'Especialidad: Procesos Metalúrgicos Avanzados', icon: <FlaskConical className="h-5 w-5 text-primary mr-2" /> },
    ],
    concytecUrl: 'https://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=55702',
    buttonColor: 'bg-primary hover:bg-primary/90'
  },
  {
    name: 'Dr. CHAVEZ GUTIERREZ ESTEBAN REY',
    role: 'Docente y Director del Programa de Maestría en Extracción de Metales Estratégicos',
    imageUrl: '/images/investigador2.jpg',
    imageHint: 'researcher portrait',
    details: [
      { text: 'Coordinador de Tutoría', icon: <Users className="h-5 w-5 text-green-500 mr-2" /> },
      { text: 'Especialidad: Extracción de Metales Estratégicos', icon: <FlaskConical className="h-5 w-5 text-green-500 mr-2" /> },
    ],
    concytecUrl: 'https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=26347',
    buttonColor: 'bg-green-500 hover:bg-green-600'
  },
];

const labs = [
  { title: 'Laboratorio de Metalografía', description: 'Equipado para el análisis microestructural de metales y aleaciones.', imageUrl: '/images/lab-metalografia.jpg', imageHint: 'metallography laboratory microscope' },
  { title: 'Laboratorio de Fundición', description: 'Instalaciones para la fusión y moldeo de metales y aleaciones.', imageUrl: '/images/lab-fundicion.jpg', imageHint: 'foundry laboratory metal casting' },
  { title: 'Laboratorio de Análisis Químico', description: 'Dotado con instrumentos para el análisis composicional de materiales.', imageUrl: '/images/lab-analisis.jpg', imageHint: 'chemical analysis laboratory' },
];

export default function InvestigacionServiciosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-10 text-center">Investigación y Servicios</h1>
      
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
          {quickNavItems.map((item) => (
            <Button key={item.title} asChild className={`flex flex-col items-center justify-center p-4 rounded-lg text-white text-center h-32 shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 group ${item.color}`}>
              <Link href={item.href} target={item.external ? '_blank' : '_self'} rel={item.external ? 'noopener noreferrer' : ''}>
                {item.icon}
                <span className="text-xs sm:text-sm">{item.title}</span>
              </Link>
            </Button>
          ))}
        </div>
      </section>

      <section id="lineas-investigacion" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-8">Líneas de Investigación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchLines.map((line) => (
            <Card key={line.title} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center">
                  {line.icon}
                  <CardTitle className="text-xl text-primary">{line.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {line.items.map((item) => (
                    <li key={item} className="flex items-center text-muted-foreground">
                      <ChevronRight className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="ambientes-academicos" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-8">Ambientes Académicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {academicEnvironments.map((env) => (
            <Card key={env.title} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group">
              <div className="relative w-full h-48 overflow-hidden">
                <Image src={env.imageUrl} alt={env.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" data-ai-hint={env.imageHint} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{env.title}</h3>
                <p className="text-muted-foreground">{env.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="investigadores" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-8">Nuestros Investigadores Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchers.map((researcher) => (
            <Card key={researcher.name} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mr-0 sm:mr-6 mb-4 sm:mb-0 flex-shrink-0 group">
                    <Image src={researcher.imageUrl} alt={researcher.name} width={96} height={96} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" data-ai-hint={researcher.imageHint} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{researcher.name}</h3>
                    <p className="text-muted-foreground text-sm">{researcher.role}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  {researcher.details.map(detail => (
                    <p key={detail.text} className="flex items-center text-muted-foreground text-sm">
                      {detail.icon}
                      {detail.text}
                    </p>
                  ))}
                </div>
                <Button asChild className={`${researcher.buttonColor} text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105`}>
                  <Link href={researcher.concytecUrl} target="_blank" rel="noopener noreferrer">
                    Ver perfil CONCYTEC <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="publicaciones" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-8">Publicaciones Destacadas</h2>
        <Card className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              <Link href="https://dialnet.unirioja.es/servlet/articulo?codigo=5319723" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary/80 transition-colors">
                Evaluación del proceso de lixiviación en medio básico para minerales oxidados de cobre
                <ExternalLink className="inline-block ml-2 h-5 w-5" />
              </Link>
            </h3>
            <div className="space-y-1 mb-4 text-muted-foreground">
              <p className="flex items-center"><Users className="h-5 w-5 mr-2 text-accent" /> Chavez Gutierrez, Esteban Rey</p>
              <p className="flex items-center"><Users className="h-5 w-5 mr-2 text-accent" /> Sarmiento Sarmiento, Antonio Walter</p>
            </div>
            <div className="mb-4">
              <p className="flex items-center text-muted-foreground"><University className="h-5 w-5 mr-2 text-accent" /> Universidad Nacional del Altiplano</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm text-muted-foreground">
              <p className="flex items-center"><BookOpen className="h-4 w-4 mr-2 text-accent" /> <strong>Revista:</strong> Investigaciones Altoandinas</p>
              <p className="flex items-center"><Info className="h-4 w-4 mr-2 text-accent" /> <strong>ISSN:</strong> 2306-8582 (Print), 2313-2957 (Online)</p>
              <p className="flex items-center"><CalendarDays className="h-4 w-4 mr-2 text-accent" /> <strong>Año:</strong> 2015</p>
              <p className="flex items-center"><Layers className="h-4 w-4 mr-2 text-accent" /> <strong>Volumen:</strong> 17, Nº. 3</p>
              <p className="flex items-center"><Languages className="h-4 w-4 mr-2 text-accent" /> <strong>Idioma:</strong> Español</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-2 text-foreground flex items-center"><FileText className="h-5 w-5 mr-2 text-accent" /> Resumen</h4>
              <p className="text-muted-foreground text-sm">
                La investigación se realizó con el objetivo de evaluar el proceso de lixiviación en medio básico para minerales oxidados de cobre proveniente del cerro Azoguine, Provincia y Departamento de Puno en presencia de un agente complejante como es el Bitartrato de Potasio (KOOCCHOHCHOHCOOH), que es un insumo químico comercialmente disponible para luego a partir de ello determinar el efecto de la concentración del agente complejante, identificar el efecto del pH del medio acuoso y valorar el efecto del tiempo de reacción para dicho proceso de lixiviación...
              </p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105">
              <Link href="https://dialnet.unirioja.es/descarga/articulo/5319723.pdf" target="_blank" rel="noopener noreferrer">
                <File className="mr-2 h-4 w-4" /> Texto completo (PDF)
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="laboratorios-gabinetes" className="mb-12 scroll-mt-20">
        <h2 className="text-3xl font-bold text-foreground mb-8">Laboratorios y Gabinetes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <Card key={lab.title} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 overflow-hidden group">
              <div className="relative w-full h-48 overflow-hidden">
                 <Image src={lab.imageUrl} alt={lab.title} width={600} height={400} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" data-ai-hint={lab.imageHint} />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{lab.title}</h3>
                <p className="text-muted-foreground">{lab.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
