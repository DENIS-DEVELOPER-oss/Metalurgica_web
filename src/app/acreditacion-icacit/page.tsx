
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ClipboardCheck, Users, FileText, LineChart, Award, GraduationCap, RefreshCcw, Globe } from 'lucide-react';

export default function AcreditacionIcacitPage() {
  const accreditationData = [
    { program: "Ingeniería de Minas", criterion: "Ingeniería de Minas", startDate: "1/07/2021", endDate: "31/12/2024", nextEval: "2024" },
    { program: "Ingeniería Topográfica y Agrimensura", criterion: "Criterios Generales", startDate: "1/07/2021", endDate: "31/12/2024", nextEval: "2024" },
    { program: "Ingeniería Agroindustrial", criterion: "Ingeniería Agroindustrial", startDate: "1/07/2022", endDate: "31/12/2025", nextEval: "2025" },
    { program: "Ingeniería Agronómica", criterion: "Ingeniería Agronómica", startDate: "1/07/2022", endDate: "31/12/2025", nextEval: "2025" },
    { program: "Ingeniería Civil", criterion: "Ingeniería Civil", startDate: "1/07/2022", endDate: "31/12/2025", nextEval: "2025" },
    { program: "Ingeniería Geológica", criterion: "Ingeniería Geológica", startDate: "1/07/2022", endDate: "31/12/2029", nextEval: "2029" },
    { program: "Ingeniería Metalúrgica", criterion: "Ingeniería Metalúrgica", startDate: "1/07/2022", endDate: "31/12/2029", nextEval: "2029" },
  ];

  const accreditationProcess = [
    { 
      title: "Fase 1: Preparación y Autoevaluación", 
      icon: <ClipboardCheck className="h-8 w-8 text-white" />, 
      bgColor: "bg-blue-500",
      points: [
        "Formación del comité de acreditación interno",
        "Recopilación exhaustiva de datos del programa",
        "Análisis detallado de fortalezas y áreas de mejora",
        "Elaboración del informe de autoestudio",
        "Preparación de evidencias y documentación de respaldo",
      ] 
    },
    { 
      title: "Fase 2: Visita de Evaluación", 
      icon: <Users className="h-8 w-8 text-white" />, 
      bgColor: "bg-green-500",
      points: [
        "Recepción del equipo evaluador de ICACIT",
        "Presentaciones detalladas del programa",
        "Entrevistas con estudiantes, docentes y personal administrativo",
        "Revisión de instalaciones y recursos",
        "Análisis de proyectos y trabajos de estudiantes",
      ] 
    },
    { 
      title: "Fase 3: Informe y Decisión", 
      icon: <FileText className="h-8 w-8 text-white" />, 
      bgColor: "bg-yellow-500",
      points: [
        "Recepción del informe preliminar de evaluación",
        "Período de respuesta y aclaración",
        "Evaluación final por el comité de acreditación de ICACIT",
        "Decisión de acreditación",
        "Comunicación formal del resultado",
      ] 
    },
    { 
      title: "Fase 4: Mejora Continua", 
      icon: <LineChart className="h-8 w-8 text-white" />, 
      bgColor: "bg-red-500",
      points: [
        "Análisis detallado del informe de acreditación",
        "Desarrollo de un plan de acción para abordar recomendaciones",
        "Implementación de mejoras en el programa",
        "Seguimiento continuo y evaluación de cambios",
        "Preparación para futuras evaluaciones y reacreditación",
      ] 
    },
  ];

  const accreditationBenefits = [
    { title: "Reconocimiento de Calidad", description: "Garantía de que nuestro programa cumple con estándares internacionales de calidad.", icon: <Award className="h-10 w-10 text-yellow-500 mb-4 group-hover:scale-110 transition-transform" /> },
    { title: "Mejores Oportunidades para Graduados", description: "Mayor reconocimiento y oportunidades laborales para nuestros egresados.", icon: <GraduationCap className="h-10 w-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" /> },
    { title: "Mejora Continua", description: "Compromiso con la evaluación y mejora constante de nuestro programa.", icon: <RefreshCcw className="h-10 w-10 text-green-500 mb-4 group-hover:scale-110 transition-transform" /> },
    { title: "Reconocimiento Internacional", description: "Facilita la movilidad académica y profesional a nivel internacional.", icon: <Globe className="h-10 w-10 text-purple-500 mb-4 group-hover:scale-110 transition-transform" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-foreground mb-10 text-center">Acreditación ICACIT</h1>

      <section className="mb-12">
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Acerca de ICACIT</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">
              ICACIT (Instituto de Calidad y Acreditación de Programas de Computación, Ingeniería y Tecnología) es una agencia acreditadora especializada en programas de educación superior en computación, ingeniería y tecnología en ingeniería. La acreditación ICACIT asegura que un programa cumple con estándares de calidad establecidos por la profesión para la cual prepara a sus estudiantes.
            </p>
          </CardContent>
        </Card>
      </section>
    
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Información de Acreditación ICACIT en la UNA-Puno</h2>
        <Card className="shadow-lg p-6 mb-8 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="text-2xl text-primary">Datos Institucionales</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ul className="space-y-2 text-muted-foreground">
              <li><strong className="font-semibold text-foreground">Institución:</strong> Universidad Nacional del Altiplano Puno</li>
              <li><strong className="font-semibold text-foreground">Ciudad:</strong> Puno</li>
              <li><strong className="font-semibold text-foreground">Campus:</strong> Ciudad Universitaria, Sede Puno</li>
              <li><strong className="font-semibold text-foreground">Dirección:</strong> Av. Floral 1153, Puno</li>
              <li><strong className="font-semibold text-foreground">Página Web:</strong> <Link href="http://www.portal.unap.edu.pe" target="_blank" className="text-primary hover:underline hover:text-primary/80 transition-colors">www.portal.unap.edu.pe</Link></li>
              <li><strong className="font-semibold text-foreground">Programas Acreditados ICACIT:</strong> <Link href="https://webicacit.com/es/acreditacion/programas-acreditados" target="_blank" className="text-primary hover:underline hover:text-primary/80 transition-colors">Ver lista oficial</Link></li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="overflow-x-auto">
          <Table className="bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <TableHeader>
              <TableRow>
                <TableHead className="text-foreground">Programa</TableHead>
                <TableHead className="text-foreground">Criterio del Programa</TableHead>
                <TableHead className="text-foreground">Fecha de Inicio</TableHead>
                <TableHead className="text-foreground">Fecha de Fin</TableHead>
                <TableHead className="text-foreground">Próxima Evaluación</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accreditationData.map((item, index) => (
                <TableRow key={index} className={`${index % 2 === 0 ? 'bg-secondary/50' : 'bg-card'} hover:bg-muted/50 transition-colors duration-200`}>
                  <TableCell className="text-muted-foreground">{item.program}</TableCell>
                  <TableCell className="text-muted-foreground">{item.criterion}</TableCell>
                  <TableCell className="text-muted-foreground">{item.startDate}</TableCell>
                  <TableCell className="text-muted-foreground">{item.endDate}</TableCell>
                  <TableCell className="text-muted-foreground">{item.nextEval}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>
    
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Nuestro Proceso de Acreditación</h2>
        <p className="text-lg text-muted-foreground mb-8">La acreditación ICACIT es un proceso riguroso y detallado que asegura la calidad de nuestro programa educativo. A continuación, se describen las fases principales de este proceso:</p>
        
        <div className="space-y-8">
          {accreditationProcess.map((phase, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center">
                  <div className={`rounded-full p-3 mr-4 ${phase.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                    {phase.icon}
                  </div>
                  <CardTitle className="text-xl text-primary">{phase.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-5">
                  {phase.points.map((point, pIndex) => (
                    <li key={pIndex}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Beneficios de la Acreditación ICACIT</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditationBenefits.map((benefit, index) => (
            <Card key={index} className="p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
              {benefit.icon}
              <CardTitle className="text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
              <CardContent className="text-muted-foreground text-sm p-0">
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
