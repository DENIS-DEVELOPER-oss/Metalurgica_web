// src/components/sections/LogrosEstudiantilesSection.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, GraduationCap, FlaskConical, Star, ExternalLink, Users, ZoomIn, CheckCircle, BookOpen, Info, Quote, X } from 'lucide-react';

export default function LogrosEstudiantilesSection() {
  const [isRenacytModalOpen, setIsRenacytModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-background to-blue-50 dark:from-slate-900 dark:to-slate-800 py-16" id="logros-estudiantiles">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Award className="text-primary-foreground h-6 w-6" />
            </div>
            <h3 className="text-3xl font-bold text-foreground relative">
              Logros Estudiantiles
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary rounded-full"></span>
            </h3>
          </div>
          
          <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-primary p-4 rounded-r-lg shadow-sm">
            <p className="text-primary/80 dark:text-blue-300/90 text-sm flex items-start">
              <Quote className="text-blue-400 dark:text-blue-500 mr-2 h-5 w-5 flex-shrink-0 transform scale-x-[-1]" />
              Nuestros estudiantes destacan por su excelencia académica y compromiso con la investigación científica, representando el futuro brillante de la ingeniería metalúrgica en el Perú.
              <Quote className="text-blue-400 dark:text-blue-500 ml-2 h-5 w-5 flex-shrink-0" />
            </p>
          </div>
          
          {/* MODIFICACIÓN: Quitado lg:items-start para que las tarjetas igualen altura */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> 
            {/* MODIFICACIÓN: Añadido h-full a la tarjeta del estudiante */}
            <Card className="lg:col-span-2 rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-card h-full">
              <div className="relative w-40 h-40 mb-4 md:mb-0 md:mr-6 overflow-hidden rounded-lg shadow-md flex-shrink-0">
                <Image 
                  src="/images/renacyt/estudiante.jpg" 
                  alt="Estudiante RENACYT Alexander Aguilar Ramirez" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  data-ai-hint="student portrait"
                />
              </div>
              
              <div className="flex-grow flex flex-col justify-center"> {/* Añadido flex flex-col justify-center para mejor distribución vertical del texto */}
                <div className="relative inline-block mb-2 self-start md:self-auto"> {/* Alineación para el título */}
                  <h4 className="text-2xl font-bold text-foreground">Alexander Aguilar Ramirez</h4>
                  <div className="absolute -bottom-1 left-0 h-1 w-1/2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center dark:bg-blue-900/50 dark:text-blue-300">
                    <GraduationCap className="mr-1 h-3 w-3" /> Ingeniería Metalúrgica
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center dark:bg-green-900/50 dark:text-green-300">
                    <FlaskConical className="mr-1 h-3 w-3" /> Investigador
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center dark:bg-yellow-900/50 dark:text-yellow-300">
                    <Star className="mr-1 h-3 w-3" /> 6to Semestre
                  </span>
                </div>
                
                <p className="text-muted-foreground text-base mb-4">
                  Estudiante destacado reconocido por <strong className="text-primary">CONCYTEC</strong> e incorporado al <strong className="text-primary">RENACYT</strong> como joven investigador en metalurgia extractiva. Su enfoque innovador y compromiso con la investigación han sido claves para fortalecer la cultura científica en nuestra escuela.
                </p>
                
                <div className="bg-gray-50 dark:bg-slate-800 p-3 rounded-lg border-l-4 border-primary mb-4">
                  <p className="text-muted-foreground text-sm italic">
                    "Destaca por su pasión por los procesos de transformación de minerales y su interés por generar soluciones sostenibles. Actualmente se encuentra en proceso de consolidarse como uno de los futuros referentes en su especialidad."
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-auto"> {/* mt-auto para empujar botones abajo si hay espacio */}
                  <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transform hover:-translate-y-px duration-300">
                    <Link href="https://directorio.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=000000000000000000000000" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Ver CV en CTI Vitae
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="text-primary border-primary/30 hover:border-primary/70 hover:text-primary shadow-sm hover:shadow-md transform hover:-translate-y-px duration-300">
                    <Link href="#">
                      <Users className="mr-2 h-4 w-4" /> Proyectos de investigación
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* MODIFICACIÓN: Añadido flex flex-col h-full a la tarjeta RENACYT */}
            <Card 
              className="rounded-xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 bg-card flex flex-col h-full"
              onClick={() => setIsRenacytModalOpen(true)}
            >
              <CardHeader className="bg-primary text-primary-foreground p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-bold">Ficha RENACYT</CardTitle>
                  <span className="bg-primary-foreground text-primary text-xs px-2 py-1 rounded-full">Oficial</span>
                </div>
                <p className="text-blue-100 dark:text-blue-300 text-xs mt-1">
                  Registro Nacional de Ciencia, Tecnología e Innovación Tecnológica
                </p>
              </CardHeader>
              {/* MODIFICACIÓN: Añadido flex-grow flex flex-col para que el contenido se expanda */}
              <CardContent className="p-4 relative overflow-hidden flex-grow flex flex-col"> 
                {/* MODIFICACIÓN: Cambiado aspect-[4/5.6] a h-96 (o la altura que prefieras) y flex-shrink-0 */}
                <div className="relative w-full h-96 group-hover:opacity-90 transition-opacity duration-300 flex-shrink-0"> 
                  <Image 
                    src="/images/renacyt/ficha.jpeg" 
                    alt="Ficha RENACYT de Alexander Aguilar Ramirez" 
                    layout="fill"
                    objectFit="contain" 
                    className="rounded-lg"
                  />
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute bottom-6 right-6 bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none"
                  onClick={(e) => { e.stopPropagation(); setIsRenacytModalOpen(true);}}
                  aria-label="Ampliar Ficha RENACYT"
                >
                  <ZoomIn className="h-5 w-5" />
                </Button>
              </CardContent>
              <div className="p-4 bg-gray-50 dark:bg-slate-800 mt-auto"> {/* mt-auto para el footer */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Registro: 2025</span>
                  <span className="text-sm text-green-600 dark:text-green-400 flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4" /> Vigente
                  </span>
                </div>
                <p className="text-sm text-muted-foreground flex items-start">
                  <Info className="text-primary mr-1 h-4 w-4 mt-px flex-shrink-0" />
                  Acreditación que reconoce las competencias para realizar labores de investigación científica.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: <FlaskConical />, title: "Líneas de Investigación", text: "Hidrometalurgia, Metalurgia extractiva, Procesamiento de minerales", color: "blue" },
              { icon: <Award />, title: "Reconocimientos", text: "Investigador RENACYT Nivel VII, Mérito a la Excelencia Académica", color: "green" },
              { icon: <BookOpen />, title: "Publicaciones", text: "Capítulos de libro científicos en revistas indexadas, Software de simulación de procesos registrados en INDECOPI", color: "purple" }
            ].map((item, index) => (
              <Card key={index} className={`p-3 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow bg-card`}>
                <div className={`bg-${item.color}-100 text-${item.color}-600 dark:bg-${item.color}-900/30 dark:text-${item.color}-400 p-3 rounded-full mr-3`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: `h-5 w-5 text-${item.color}-600 dark:text-${item.color}-400`})}
                </div>
                <div>
                  <h5 className="font-semibold mb-1 text-foreground">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isRenacytModalOpen} onOpenChange={setIsRenacytModalOpen}>
        {/* ... (contenido del Dialog sin cambios) ... */}
        <DialogContent className="sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] p-0 bg-background border-border flex flex-col">
          <DialogHeader className="p-3 border-b border-border">
            <DialogTitle className="text-primary">Ficha RENACYT - Alexander Aguilar Ramirez</DialogTitle>
            <DialogDescription>Documento oficial de CONCYTEC que acredita al investigador.</DialogDescription>
          </DialogHeader>
          <div className="p-4 flex-grow overflow-auto flex justify-center items-center">
            <div className="relative max-w-full max-h-full">
              <Image 
                src="/images/renacyt/ficha.JPEG" 
                alt="Ficha RENACYT Ampliada de Alexander Aguilar Ramirez" 
                width={1083} 
                height={793} 
                objectFit="contain"
                className="max-w-full max-h-[calc(80vh-100px)] rounded-md shadow-lg"
              />
            </div>
          </div>
          <DialogFooter className="p-4 border-t border-border">
            <Button asChild size="sm" className="bg-green-600 hover:bg-green-700 text-white">
              <Link href="http://renacyt.concytec.gob.pe/constancias.zul?cod=P0394243" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Verificar Constancia en RENACYT
              </Link>
            </Button>
            <DialogClose asChild>
              <Button variant="outline" size="sm">
                <X className="mr-2 h-4 w-4" />
                Cerrar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}