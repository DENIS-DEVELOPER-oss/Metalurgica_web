
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function OrganigramaPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 min-h-[calc(100vh-14rem)]">
      <div className="mb-8">
        <Link href="/nuestra-informacion" className="inline-flex items-center text-primary hover:underline text-base font-medium">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a Nuestra Información
        </Link>
      </div>
      <h1 className="text-3xl font-bold text-primary mb-10 text-center">Organigrama</h1>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-foreground">Estructura Organizacional</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center p-4 md:p-8">
          <div className="w-full max-w-4xl">
            <Image
              src="/images/organigrama.png"
              alt="Organigrama de la Escuela Profesional de Ingeniería Metalúrgica"
              width={1200}
              height={800}
              className="rounded-md object-contain shadow-md w-full h-auto"
              data-ai-hint="organization chart diagram"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
