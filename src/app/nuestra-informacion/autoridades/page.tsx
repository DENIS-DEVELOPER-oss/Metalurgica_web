
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

const authorities = [
  { name: 'DR. DANTE ATILIO SALAS ÁVILA', role: 'DECANO', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'M.SC. GROVER LINDER FLORES PONCE', role: 'PRESIDENTE DE CALIDAD', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'DR. HIPÓLITO CÓRDOVA GUTIÉRREZ', role: 'DIRECTOR DE UNIDAD DE INVESTIGACIÓN', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'M.SC. CARLOS ALEJANDRO CHÁVEZ CATACORA', role: 'DIRECTOR DE UNIDAD DE TUTORÍA', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'DR. ESTEBAN REY CHÁVEZ GUTIÉRREZ', role: 'DIRECTOR EP. INGENIERÍA METALÚRGICA', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'DR. HÉCTOR CLEMENTE HERRERA CÓRDOVA', role: 'DIRECTOR DE DEPARTAMENTO ACADÉMICO', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'ING. BENITO HUGO FERNÁNDEZ OCHOA', role: 'COORDINADOR DEL CENTRO DE APLICACIÓN DE TECNOLOGIAS, LABORATORIOS Y GABINETES', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'DRA. DARSSY ARGELIDA CARPIO RAMOS', role: 'COORDINADOR DE EXTENSIÓN CULTURAL, PROYECCIÓN SOCIAL Y RESPONSABILIDAD SOCIAL', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'DR. FERNANDO BERNEDO COLCA', role: 'COORDINADOR DE BIBLIOTECA ESPECIALIZADA', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
  { name: 'DR. PEDRO ALVARADO EDWIN GALLEGOS PASCO', role: 'RESPONSABLE DEL SEGUIMIENTO AL EGRESADO', imageUrl: 'https://placehold.co/128x128.png', imageHint: 'person portrait' },
];

export default function AutoridadesPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 min-h-[calc(100vh-14rem)]">
      <div className="mb-8">
        <Link href="/nuestra-informacion" className="inline-flex items-center text-primary hover:underline text-base font-medium hover:text-primary/80 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Nuestra Información
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-primary mb-10 text-center">Autoridades</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {authorities.map((authority, index) => (
          <Card key={index} className="text-center shadow-lg rounded-lg overflow-hidden flex flex-col h-full bg-card hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
            <div className="bg-muted p-4 flex justify-center items-center aspect-[4/3] overflow-hidden">
              <Image
                src={authority.imageUrl}
                alt={`Foto de ${authority.name}`}
                width={100}
                height={100}
                className="object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
                data-ai-hint={authority.imageHint}
              />
            </div>
            <CardContent className="p-3 flex flex-col items-center justify-start flex-grow">
              <h3 className="text-sm font-bold text-primary leading-tight mb-1">{authority.name}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{authority.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
