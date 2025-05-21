
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const infrastructureData = [
  { ambiente: "Aula", numero: 2, area: "72.00" },
  { ambiente: "Aula", numero: 1, area: "42.00" },
  { ambiente: "Aula", numero: 5, area: "54.00" },
  { ambiente: "Aula virtual", numero: 1, area: "48.00" },
  { ambiente: "Centro de cómputo", numero: 1, area: "72.00" },
  { ambiente: "Gabinete de software minero", numero: 1, area: "72.00" },
  { ambiente: "Gabinete de inglés", numero: 1, area: "21.00" },
  { ambiente: "Biblioteca Especializada y Sala de lectura", numero: 1, area: "48.00" },
  { ambiente: "SS.HH.", numero: 2, area: "21.00" },
  { ambiente: "Gabinete de Preparación de muestras", numero: 1, area: "54.00" },
  { ambiente: "Gabinete de Maquinaria Minera", numero: 1, area: "54.00" },
  { ambiente: "Gabinete de Topografía y Geodesia", numero: 1, area: "54.00" },
  { ambiente: "Laboratorio de Mecánica de suelos", numero: 1, area: "50.00" },
  { ambiente: "Laboratorio de Mecánica de rocas", numero: 1, area: "74.00" },
  { ambiente: "Laboratorio de Monitoreo Ambiental", numero: 1, area: "42.00" },
  { ambiente: "Sala de docentes", numero: 1, area: "54.00" },
  { ambiente: "Auditorio", numero: 1, area: "108.00" },
  { ambiente: "Cafetín", numero: 1, area: "54.00" },
  { ambiente: "Decanato, Secretaria Técnica y secretaria", numero: 1, area: "54.00" },
  { ambiente: "Dirección de Estudios, Jefatura de Departamento, Coordinación de Investigación, Coordinación de Proyección Social y secretaria", numero: 1, area: "42.00" },
  { ambiente: "Gestión de la calidad universitaria", numero: 1, area: "27.00" },
  { ambiente: "Segunda Especialización en Monitoreo y Evaluación Ambiental", numero: 1, area: "11.00" },
];

const galleryImages = [
  { src: "/images/infraestructura1.jpg", alt: "Facultad", hint: "university building classroom" },
  { src: "/images/infraestructura2.jpg", alt: "Facultad", hint: "university laboratory equipment" },
  { src: "/images/infraestructura1.jpg", alt: "Facultad", hint: "modern university library" },
  { src: "/images/infraestructura2.jpg", alt: "Facultad", hint: "university auditorium" },
];

export default function InfraestructuraPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/nuestra-informacion" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Nuestra Información
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-10 text-center">Infraestructura</h1>

      <section className="mb-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Detalle de Ambientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-foreground">Ambiente</TableHead>
                    <TableHead className="text-foreground text-center">Número</TableHead>
                    <TableHead className="text-foreground text-right">Área (m²)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {infrastructureData.map((item, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-muted/50' : ''}>
                      <TableCell className="text-muted-foreground">{item.ambiente}</TableCell>
                      <TableCell className="text-muted-foreground text-center">{item.numero}</TableCell>
                      <TableCell className="text-muted-foreground text-right">{item.area}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Galería de Fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{objectFit:"cover"}}
                  className="rounded-t-lg"
                  data-ai-hint={image.hint}
                />
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground text-center">{image.alt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
