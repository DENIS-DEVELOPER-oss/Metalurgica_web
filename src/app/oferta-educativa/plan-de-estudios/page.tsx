
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Landmark, FileText, CheckSquare, Search } from 'lucide-react';

export default function PlanDeEstudiosPage() {
  const administrativeRequirements = [
    "Recibo de pago por derecho de bachiller",
    "Recibo de pago por rotulado",
    "02 fotografías tamaño pasaporte blanco y negro (original, no digital)",
    "01 fotografía a color tamaño pasaporte, fondo blanco, con traje terno (obligatorio)",
    "03 fotografías tamaño carnet actualizada blanco y negro",
    "Constancia de prácticas pre profesionales (original)",
    "Constancia de donación de libros a la biblioteca especializada (caso metalurgia)",
    "Constancia de inglés básico",
    "Compra de folder en secretaría de decanato",
    "Compra de medalla en secretaria de decanato",
  ];

  const academicRequirements = [
    "Aprobar 232 créditos en 10 ciclos académicos según lo establecido por la Ley Universitaria",
    "Haber logrado el perfil de egreso",
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-8">
        <Link href="/oferta-educativa" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Oferta Educativa
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-foreground mb-10 text-center">Malla Curricular</h1>

      <section className="space-y-12 mb-16">
        <div>
          <h2 className="text-3xl font-semibold text-primary mb-6">Malla curricular del Programa de Estudios de Ingeniería Metalúrgica 2015-2019</h2>
          <div className="bg-muted rounded-lg shadow-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
            <Image 
              src="https://placehold.co/1200x800.png" 
              alt="Malla curricular 2015-2019" 
              width={1200} 
              height={800}
              className="w-full h-full object-contain p-4"
              data-ai-hint="curriculum grid document"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-primary mb-6">Malla curricular del Programa de Estudios de Ingeniería Metalúrgica 2021-2025</h2>
          <div className="bg-muted rounded-lg shadow-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
            <Image 
              src="https://placehold.co/1200x800.png" 
              alt="Malla curricular 2021-2025" 
              width={1200} 
              height={800}
              className="w-full h-full object-contain p-4"
              data-ai-hint="curriculum grid document"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <Card className="shadow-xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6">
            <CardTitle className="text-2xl flex items-center">
              <Landmark className="h-8 w-8 mr-3" />
              Grado Académico: BACHILLER EN INGENIERÍA METALÚRGICA
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2 text-accent" />
                Requisitos Administrativos:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-5">
                {administrativeRequirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <CheckSquare className="h-6 w-6 mr-2 text-accent" />
                Requisitos Académicos:
              </h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-5">
                {academicRequirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Search className="h-6 w-6 mr-2 text-accent" />
                Requisitos de Investigación:
              </h3>
              <p className="text-muted-foreground">
                Aprobar un trabajo de investigación y el conocimiento del idioma extranjero inglés, para optar el grado académico de bachiller en Ingeniería Metalúrgica.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-6">Información de los Matriculados, Egresados, Graduados y Titulados</h2>
        <div className="bg-muted rounded-lg shadow-lg overflow-hidden aspect-[16/9] flex items-center justify-center">
            <Image 
              src="https://placehold.co/1200x600.png" 
              alt="Información de matriculados, egresados, graduados y titulados" 
              width={1200}
              height={600}
              className="w-full h-full object-contain p-4"
              data-ai-hint="student statistics chart graph"
            />
        </div>
      </section>
    </div>
  );
}
