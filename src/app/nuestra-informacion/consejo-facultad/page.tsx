
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

const docentesPrincipales = [
  { name: 'DRA. SOFIA BENAVENTE FERNANDEZ', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'MSC.MAQUERA GIL, JULIO ALBERTO', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'DR GALLEGOS PASCO, PEDRO ÁLVARO EDWIN', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'DR. SARMIENTO SARMIENTO, ANTONIO WALTER', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'ING. ROBERTO FLORENTINO ZEGARRA PONCE', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
];

const docentesAsociados = [
  { name: 'DR. CORDOVA GUTIERREZ, HIPÓLITO', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'MSC. GEORGE FLORENCIO LLERENA PEREDO', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'DR. CHAVEZ GUTIERREZ, ESTEBAN REY', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
  { name: 'MSC. CORNEJO OLARTE, DALMIRO AURELIO', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'person portrait' },
];

const estudiantes = [
  { name: 'ROMULO QUISOCALA', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'student portrait' },
  { name: 'FIORELA CHOQUEHUANCA', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'student portrait' },
  { name: 'JUAN AROCUTIPA', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'student portrait' },
  { name: 'DICKSON CAJIA', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'student portrait' },
  { name: 'SOL PARIAMACHI', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'student portrait' },
  { name: 'FANNY MAMANI', imageUrl: 'https://placehold.co/150x200.png', imageHint: 'student portrait' },
];

export default function ConsejoFacultadPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 min-h-[calc(100vh-14rem)]">
      <div className="mb-8">
        <Link href="/nuestra-informacion" className="inline-flex items-center text-primary hover:underline text-base font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Nuestra Información
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-primary mb-10 text-center">Consejo de Facultad</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-1">Docentes Principales</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {docentesPrincipales.map((docente, index) => (
            <Card key={index} className="text-center shadow-md rounded-lg overflow-hidden flex flex-col h-full bg-card">
              <div className="bg-muted p-4 flex justify-center items-center aspect-[3/4]">
                <Image
                  src={docente.imageUrl}
                  alt={`Foto de ${docente.name}`}
                  width={150}
                  height={200}
                  className="object-contain"
                  data-ai-hint={docente.imageHint}
                />
              </div>
              <CardContent className="p-3 flex flex-col items-center justify-start flex-grow">
                <h3 className="text-sm font-semibold text-primary leading-tight">{docente.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-1">Docentes Asociados</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {docentesAsociados.map((docente, index) => (
            <Card key={index} className="text-center shadow-md rounded-lg overflow-hidden flex flex-col h-full bg-card">
               <div className="bg-muted p-4 flex justify-center items-center aspect-[3/4]">
                <Image
                  src={docente.imageUrl}
                  alt={`Foto de ${docente.name}`}
                  width={150}
                  height={200}
                  className="object-contain"
                  data-ai-hint={docente.imageHint}
                />
              </div>
              <CardContent className="p-3 flex flex-col items-center justify-start flex-grow">
                <h3 className="text-sm font-semibold text-primary leading-tight">{docente.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-1">Estudiantes</h2>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {estudiantes.map((estudiante, index) => (
            <Card key={index} className="text-center shadow-md rounded-lg overflow-hidden flex flex-col h-full bg-card">
              <div className="bg-muted p-4 flex justify-center items-center aspect-[3/4]">
                <Image
                  src={estudiante.imageUrl}
                  alt={`Foto de ${estudiante.name}`}
                  width={150}
                  height={200}
                  className="object-contain"
                  data-ai-hint={estudiante.imageHint}
                />
              </div>
              <CardContent className="p-3 flex flex-col items-center justify-start flex-grow">
                <h3 className="text-sm font-semibold text-primary leading-tight">{estudiante.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
