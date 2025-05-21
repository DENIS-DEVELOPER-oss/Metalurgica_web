
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Landmark, Eye, Target } from 'lucide-react'; // Using Target for Programa de Estudios

export default function MisionVisionPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <Link href="/escuela-profesional" className="inline-flex items-center text-primary hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Escuela Profesional
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-primary mb-10 text-center">Misión y Visión</h1>

      <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center text-2xl text-primary">
              <Landmark className="h-7 w-7 mr-3" />
              Misión de la UNAP
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              Formar Profesionales idóneos, que realizan investigación científica, tecnológica, humanística, a favor de los estudiantes universitarios con identidad cultural y responsabilidad social que contribuya al desarrollo sostenible de la Región y del País.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center text-2xl text-primary">
              <Eye className="h-7 w-7 mr-3" />
              Visión de la UNAP
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              Todos los peruanos acceden a una educación que les permite desarrollar su potencial desde la primera infancia y convertirse en ciudadanos que valoran su cultura, conocen sus derechos y responsabilidades, desarrollan sus talentos y participan de manera innovadora, competitiva y comprometida en las dinámicas sociales, contribuyendo al desarrollo de sus comunidades y del país en su conjunto.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex items-center text-2xl text-primary">
              <Target className="h-7 w-7 mr-3" /> {/* Using Target for consistency with nav card */}
              Misión del Programa de Estudios
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg text-muted-foreground">
              "Formar profesionales de calidad en metalurgia extractiva, metalurgia transformativa y medio ambiente, con valores éticos y responsabilidad social, proporcionando a la sociedad resultados de la investigación en tecnologías limpias para la industrialización, a través de la proyección y la extensión universitaria, propiciando la conservación del medio ambiente y la revaloración cultural, contribuyendo al desarrollo metalúrgico de la región y del país."
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
