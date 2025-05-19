
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Landmark, Building2, Network, Award, FlaskConical, Handshake, Globe, UsersRound, CheckCircle } from 'lucide-react';

const topNavItems = [
  { title: 'Autoridades', icon: <Users className="h-8 w-8 text-primary" />, href: '#' },
  { title: 'Consejo de Facultad', icon: <Landmark className="h-8 w-8 text-primary" />, href: '#' },
  { title: 'Infraestructura', icon: <Building2 className="h-8 w-8 text-primary" />, href: '#' },
  { title: 'Organigrama', icon: <Network className="h-8 w-8 text-primary" />, href: '#' },
];

const whyChooseUsItems = [
  { text: 'Programa acreditado por ICACIT', icon: <Award className="h-5 w-5 text-accent mr-3" /> },
  { text: 'Laboratorios equipados con tecnología de punta', icon: <FlaskConical className="h-5 w-5 text-accent mr-3" /> },
  { text: 'Estrecha colaboración con la industria minera y metalúrgica', icon: <Handshake className="h-5 w-5 text-accent mr-3" /> },
  { text: 'Oportunidades de intercambio internacional', icon: <Globe className="h-5 w-5 text-accent mr-3" /> },
  { text: 'Comunidad estudiantil diversa y dinámica', icon: <UsersRound className="h-5 w-5 text-accent mr-3" /> },
];

const careerCompanies = [
  'Southern Copper (Toquepala, Cuajone)',
  'Unidad Minera San Rafael',
  'Cia Minera Arasi',
  'Fundiciones de Ilo',
  'Sociedad Minera Cerro Verde',
  'Antamina',
];

export default function NuestraInformacionSection() {
  return (
    <section id="nuestra-informacion" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {topNavItems.map((item) => (
            <Link href={item.href} key={item.title}>
              <Card className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full flex flex-col justify-center items-center py-6">
                <CardContent className="p-4 flex flex-col items-center gap-3">
                  {item.icon}
                  <p className="text-lg font-semibold text-primary">{item.title}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Director's Message - Spans 1 column on md, full width on sm */}
          <Card className="md:col-span-1 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Mensaje del Director</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center mb-4">
                <Image
                  src="https://placehold.co/200x250.png"
                  alt="Director de la Escuela"
                  width={200}
                  height={250}
                  className="rounded-md object-cover shadow-md"
                  data-ai-hint="director portrait"
                />
              </div>
              <p className="text-muted-foreground">
                En nombre de nuestra comunidad académica, les damos la más cordial bienvenida a la Escuela Profesional de Ingeniería Metalúrgica de la Universidad Nacional del Altiplano. Nuestra misión es formar profesionales altamente calificados, éticos y comprometidos con el desarrollo sostenible de nuestra región y país.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#">Leer más</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Right Column - Spans 2 columns on md, full width on sm */}
          <div className="md:col-span-2 space-y-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">¿Por qué elegirnos?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whyChooseUsItems.map((item) => (
                    <li key={item.text} className="flex items-center text-muted-foreground">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Perspectivas de Carrera</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Nuestros egresados ocupan puestos importantes en diversas empresas minero-metalúrgicas nacionales e internacionales, incluyendo:
                </p>
                <ul className="space-y-2">
                  {careerCompanies.map((company) => (
                    <li key={company} className="flex items-center text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{company}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="#">Ver más oportunidades</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
