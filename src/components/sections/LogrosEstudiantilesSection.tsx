
"use client";

import React from 'react'; // Added this line
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, GraduationCap, FlaskConical, Star, ExternalLink, Users, ZoomIn, CheckCircle, BookOpen, Info, Quote, X } from 'lucide-react';

export default function LogrosEstudiantilesSection() {
  const [isRenacytModalOpen, setIsRenacytModalOpen] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-b from-background to-blue-50 py-16" id="logros-estudiantiles">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-10">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 shadow-lg">
              <Award className="text-primary-foreground text-xl" />
            </div>
            <h3 className="text-3xl font-bold text-foreground relative">
              Logros Estudiantiles
              <span className="absolute bottom-0 left-0 w-24 h-1 bg-primary rounded-full"></span>
            </h3>
          </div>
          
          <div className="mb-8 bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg shadow-sm">
            <p className="text-primary/80 text-sm flex items-start">
              <Quote className="text-blue-400 mr-2 h-5 w-5 flex-shrink-0 transform scale-x-[-1]" />
              Nuestros estudiantes destacan por su excelencia académica y compromiso con la investigación científica, representando el futuro brillante de la ingeniería metalúrgica en el Perú.
              <Quote className="text-blue-400 ml-2 h-5 w-5 flex-shrink-0" />
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2 rounded-xl shadow-xl p-6 flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <div className="relative w-40 h-40 mb-4 md:mb-0 md:mr-6 overflow-hidden rounded-lg shadow-md flex-shrink-0">
                <Image 
                  src="https://placehold.co/200x200.png?text=Estudiante" 
                  alt="Estudiante RENACYT" 
                  width={200}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  data-ai-hint="student portrait"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full shadow-md">
                  RENACYT
                </div>
              </div>
              
              <div className="flex-grow">
                <div className="relative inline-block mb-2">
                  <h4 className="text-2xl font-bold text-foreground">Alexander Aguilar Ramirez</h4>
                  <div className="absolute -bottom-1 left-0 h-1 w-1/2 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full"></div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <GraduationCap className="mr-1 h-3 w-3" /> Ingeniería Metalúrgica
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <FlaskConical className="mr-1 h-3 w-3" /> Investigador
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <Star className="mr-1 h-3 w-3" /> 6to Semestre
                  </span>
                </div>
                
                <p className="text-muted-foreground text-base mb-4">
                  Estudiante destacado reconocido por <strong className="text-primary">CONCYTEC</strong> e incorporado al <strong className="text-primary">RENACYT</strong> como joven investigador en metalurgia extractiva. Su enfoque innovador y compromiso con la investigación han sido claves para fortalecer la cultura científica en nuestra escuela.
                </p>
                
                <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-primary mb-4">
                  <p className="text-muted-foreground text-sm italic">
                    "Destaca por su pasión por los procesos de transformación de minerales y su interés por generar soluciones sostenibles. Actualmente se encuentra en proceso de consolidarse como uno de los futuros referentes en su especialidad."
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3">
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
            
            <Card 
              className="rounded-xl shadow-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              onClick={() => setIsRenacytModalOpen(true)}
            >
              <CardHeader className="bg-primary text-primary-foreground p-4">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-bold">Ficha RENACYT</CardTitle>
                  <span className="bg-primary-foreground text-primary text-xs px-2 py-1 rounded-full">Oficial</span>
                </div>
                <p className="text-blue-100 text-xs mt-1">
                  Registro Nacional de Ciencia, Tecnología e Innovación Tecnológica
                </p>
              </CardHeader>
              <CardContent className="p-4 relative overflow-hidden">
                <Image 
                  src="https://placehold.co/400x560.png?text=Ficha+RENACYT" 
                  alt="Ficha RENACYT" 
                  width={400}
                  height={560}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105 rounded-lg"
                  data-ai-hint="official document certificate"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute bottom-6 right-6 bg-black/50 hover:bg-primary text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none"
                  onClick={(e) => { e.stopPropagation(); setIsRenacytModalOpen(true);}}
                >
                  <ZoomIn className="text-lg" />
                </Button>
              </CardContent>
              <div className="p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">Registro: 2025</span>
                  <span className="text-sm text-green-600 flex items-center">
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
              { icon: <Award />, title: "Reconocimientos", text: "Investigador RENACYT Nivel I, Mérito a la Excelencia Académica 2024", color: "green" },
              { icon: <BookOpen />, title: "Publicaciones", text: "Capítulos de libro científicos en revistas indexadas, Software de simulación de procesos registrados en INDECOPI", color: "purple" }
            ].map((item, index) => (
              <Card key={index} className={`p-4 rounded-lg shadow-md flex items-start hover:shadow-lg transition-shadow bg-card`}>
                <div className={`bg-${item.color}-100 text-${item.color}-600 p-3 rounded-full mr-3`}>
                  {React.cloneElement(item.icon as React.ReactElement, { className: `h-5 w-5 text-${item.color}-600`})}
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
        <DialogContent className="sm:max-w-4xl max-h-[90vh] p-0 bg-black bg-opacity-90 border-none flex items-center justify-center">
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden">
            <Image 
              src="https://placehold.co/800x1120.png?text=Ficha+RENACYT+Ampliada" 
              alt="Ficha RENACYT Ampliada" 
              width={800}
              height={1120}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              data-ai-hint="official document certificate"
            />
             <DialogHeader className="absolute bottom-0 left-0 right-0 bg-black/50 text-primary-foreground p-3 rounded-b-lg">
                <DialogTitle className="text-lg font-medium text-white">Ficha RENACYT</DialogTitle>
                <DialogDescription className="text-sm text-gray-300">Documento oficial de CONCYTEC que acredita al investigador</DialogDescription>
            </DialogHeader>
             <DialogClose asChild>
                <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-colors duration-300">
                    <X />
                    <span className="sr-only">Close</span>
                </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
