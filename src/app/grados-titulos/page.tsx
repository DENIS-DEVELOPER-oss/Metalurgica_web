'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Download, Mail, Printer } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Student {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  avatarHint: string;
  gradeStatus: 'Finalizado' | 'En curso' | 'Pendiente';
  titleStatus: 'Finalizado' | 'En curso' | 'Pendiente';
  progress: number; // Overall progress for the "Estado" bar
}

const initialStudentsData: Student[] = [
  {
    id: '1',
    name: 'Luis Vargas Mendoza',
    email: 'luis.vargas@example.com',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'person portrait man',
    gradeStatus: 'Finalizado',
    titleStatus: 'En curso',
    progress: 75,
  },
  {
    id: '2',
    name: 'Carmen Sánchez Rojas',
    email: 'carmen.sanchez@example.com',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'person portrait woman',
    gradeStatus: 'Finalizado',
    titleStatus: 'Finalizado',
    progress: 100,
  },
  {
    id: '3',
    name: 'Javier Quispe Mamani',
    email: 'javier.quispe@example.com',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'person portrait boy',
    gradeStatus: 'En curso',
    titleStatus: 'Pendiente',
    progress: 40,
  },
  {
    id: '4',
    name: 'Ana Luz Condori',
    email: 'ana.condori@example.com',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'person portrait girl',
    gradeStatus: 'Finalizado',
    titleStatus: 'En curso',
    progress: 80,
  },
  {
    id: '5',
    name: 'Miguel Ángel Huamán',
    email: 'miguel.huaman@example.com',
    avatarUrl: 'https://placehold.co/40x40.png',
    avatarHint: 'person portrait man',
    gradeStatus: 'Pendiente',
    titleStatus: 'Pendiente',
    progress: 10,
  },
];

export default function GradosTitulosPage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterState, setFilterState] = useState('all'); // 'all', 'finalizado', 'en-curso', 'pendiente'
  const [sortState, setSortState] = useState('name-asc'); // 'name-asc', 'name-desc', 'progress-asc', 'progress-desc'

  useEffect(() => {
    // Simulate data fetching
    setStudents(initialStudentsData);
  }, []);

  const getStatusBadgeClass = (status: Student['gradeStatus'] | Student['titleStatus']) => {
    if (status === 'Finalizado') return 'bg-green-100 text-green-800 hover:bg-green-200';
    if (status === 'En curso') return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
    if (status === 'Pendiente') return 'bg-red-100 text-red-800 hover:bg-red-200';
    return 'bg-gray-100 text-gray-800';
  };

  const getProgressIndicatorClass = (progress: number) => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  const filteredAndSortedStudents = useMemo(() => {
    let result = students
      .filter((student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((student) => {
        if (filterState === 'all') return true;
        // Assuming filter applies to titleStatus as per HTML example logic for 'En curso', 'Pendiente'
        if (filterState === 'finalizado') return student.titleStatus === 'Finalizado';
        if (filterState === 'en-curso') return student.titleStatus === 'En curso';
        if (filterState === 'pendiente') return student.titleStatus === 'Pendiente';
        return true;
      });

    switch (sortState) {
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'progress-asc':
        result.sort((a, b) => a.progress - b.progress);
        break;
      case 'progress-desc':
        result.sort((a, b) => b.progress - a.progress);
        break;
    }
    return result;
  }, [students, searchTerm, filterState, sortState]);

  const totalStudents = students.length;
  const gradosFinalizados = students.filter(s => s.gradeStatus === 'Finalizado').length;
  const titulosFinalizados = students.filter(s => s.titleStatus === 'Finalizado').length;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Grados y Títulos</h1>
      
      <Card className="shadow-lg p-6 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="w-full md:flex-1 min-w-[200px]">
            <Input
              type="text"
              placeholder="Buscar estudiante por nombre o email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="w-full md:w-auto min-w-[180px]">
            <Select value={filterState} onValueChange={setFilterState}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="finalizado">Título Finalizado</SelectItem>
                <SelectItem value="en-curso">Título En curso</SelectItem>
                <SelectItem value="pendiente">Título Pendiente</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto min-w-[220px]">
            <Select value={sortState} onValueChange={setSortState}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name-asc">Nombre (A-Z)</SelectItem>
                <SelectItem value="name-desc">Nombre (Z-A)</SelectItem>
                <SelectItem value="progress-asc">Progreso (Menor a Mayor)</SelectItem>
                <SelectItem value="progress-desc">Progreso (Mayor a Menor)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Nombre</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Grado</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Título</TableHead>
                <TableHead className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Estado Progreso</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-card divide-y divide-border">
              {filteredAndSortedStudents.map((student) => (
                <TableRow key={student.id}>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Avatar className="h-10 w-10 flex-shrink-0">
                        <AvatarImage src={student.avatarUrl} alt={student.name} data-ai-hint={student.avatarHint} />
                        <AvatarFallback>{student.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-foreground">{student.name}</div>
                        <div className="text-sm text-muted-foreground">{student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline" className={cn("border-none text-xs", getStatusBadgeClass(student.gradeStatus))}>
                      {student.gradeStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Badge variant="outline" className={cn("border-none text-xs", getStatusBadgeClass(student.titleStatus))}>
                      {student.titleStatus}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <span className="w-12 text-right mr-2">{student.progress}%</span>
                      <Progress value={student.progress} className="h-2 w-full" indicatorClassName={getProgressIndicatorClass(student.progress)} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
           {filteredAndSortedStudents.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No se encontraron estudiantes con los criterios seleccionados.
            </div>
          )}
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Resumen Estadístico</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total de estudiantes:</span>
              <span className="font-bold text-foreground">{totalStudents}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Grados finalizados:</span>
              <span className="font-bold text-green-600">{gradosFinalizados}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Títulos finalizados:</span>
              <span className="font-bold text-green-600">{titulosFinalizados}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Progreso General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex mb-1 items-center justify-between">
                <Badge variant="outline" className="border-blue-500 text-blue-600 bg-blue-100 text-xs">Grados</Badge>
                <span className="text-xs font-semibold text-blue-600">60%</span>
              </div>
              <Progress value={60} className="h-2" indicatorClassName="bg-blue-500" />
            </div>
            <div>
              <div className="flex mb-1 items-center justify-between">
                 <Badge variant="outline" className="border-green-500 text-green-600 bg-green-100 text-xs">Títulos</Badge>
                <span className="text-xs font-semibold text-green-600">20%</span>
              </div>
              <Progress value={20} className="h-2" indicatorClassName="bg-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Download className="mr-2 h-4 w-4" /> Exportar Lista
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700">
              <Mail className="mr-2 h-4 w-4" /> Enviar Notificaciones
            </Button>
            <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-accent-foreground">
              <Printer className="mr-2 h-4 w-4" /> Imprimir Reporte
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
