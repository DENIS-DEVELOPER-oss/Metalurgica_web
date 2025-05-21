import type { Metadata } from 'next';
import { Roboto, Merriweather } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer'; // Assuming Footer will be adapted later
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const merriweather = Merriweather({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Escuela Profesional de Ingeniería Metalúrgica',
  description: 'Formando líderes en la ciencia, tecnología e innovación de materiales metálicos y sus aplicaciones industriales.',
  // Assuming favicon.ico will be placed in public folder
  // icons: {
  //   icon: '/favicon.ico', 
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${roboto.variable} ${merriweather.variable} h-full scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <TopBar />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> {/* Footer will be adapted later based on your HTML */}
        <Toaster />
      </body>
    </html>
  );
}
