
import HeroSection from '@/components/sections/HeroSection';
import RecursosParaSection from '@/components/sections/RecursosParaSection';
import EventosRealizadosSection from '@/components/sections/EventosRealizadosSection';
import LogrosEstudiantilesSection from '@/components/sections/LogrosEstudiantilesSection';
import ActualidadSection from '@/components/sections/ActualidadSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <RecursosParaSection />
      <EventosRealizadosSection />
      <LogrosEstudiantilesSection />
      <ActualidadSection />
    </>
  );
}
