import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cog, Layers, Hammer, ShieldCheck, Wrench } from 'lucide-react';

const services = [
  {
    id: 's1',
    title: 'Custom Fabrication',
    description: 'Tailored metal fabrication services to meet your exact specifications. We work with steel, aluminum, and specialty alloys.',
    icon: <Cog className="h-6 w-6 text-accent" />
  },
  {
    id: 's2',
    title: 'Welding & Assembly',
    description: 'Expert welding services including MIG, TIG, and Stick welding. Precision assembly for complex structures.',
    icon: <Hammer className="h-6 w-6 text-accent" />
  },
  {
    id: 's3',
    title: 'Design & Engineering',
    description: 'Collaborative design and engineering support to optimize your projects for manufacturing and performance.',
    icon: <Layers className="h-6 w-6 text-accent" />
  },
  {
    id: 's4',
    title: 'Finishing & Coating',
    description: 'A variety of finishing options including powder coating, painting, and galvanizing to protect and enhance your products.',
    icon: <ShieldCheck className="h-6 w-6 text-accent" />
  },
];

const products = [
  {
    id: 'p1',
    name: 'Structural Steel Beams',
    description: 'High-strength steel beams for construction and industrial applications.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'steel beams'
  },
  {
    id: 'p2',
    name: 'Custom Machine Guards',
    description: 'Safety guards designed and fabricated for industrial machinery.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'machine guard'
  },
  {
    id: 'p3',
    name: 'Decorative Metal Panels',
    description: 'Artistic metal panels for architectural and interior design.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'metal panel art'
  },
  {
    id: 'p4',
    name: 'Industrial Conveyor Parts',
    description: 'Durable components for conveyor systems, built to last.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'conveyor belt'
  },
];

export default function ProductShowcaseSection() {
  return (
    <section id="products" className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Our Products & Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-xl">
            Delivering excellence in metalwork with a comprehensive range of solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <Wrench className="h-7 w-7 mr-3 text-accent" />
              Core Services
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {services.map((service) => (
                <AccordionItem value={service.id} key={service.id} className="bg-background rounded-lg shadow-md mb-4">
                  <AccordionTrigger className="px-6 py-4 text-lg hover:no-underline">
                    <div className="flex items-center">
                      {service.icon}
                      <span className="ml-3">{service.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted-foreground">
                    {service.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary flex items-center">
              <Layers className="h-7 w-7 mr-3 text-accent" />
              Featured Products
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image 
                      src={product.imageUrl} 
                      alt={product.name} 
                      width={600} 
                      height={400} 
                      className="w-full h-48 object-cover"
                      data-ai-hint={product.imageHint} 
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2 text-primary">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
