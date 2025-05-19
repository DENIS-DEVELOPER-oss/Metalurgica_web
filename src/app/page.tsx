import HeroSection from '@/components/sections/HeroSection';
import ProductShowcaseSection from '@/components/sections/ProductShowcaseSection';
import ProjectGallerySection from '@/components/sections/ProjectGallerySection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductShowcaseSection />
      <ProjectGallerySection />
      <ContactSection />
    </>
  );
}
