import type { Metadata } from 'next';
import { Geist, Geist_Mono, Sora } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from 'next-themes';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const sora = Sora({
  variable: '--font-sora',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'FinPro - Finanzas Inteligentes',
  description:
    'Gestiona tus finanzas con facilidad. Controla tus gastos, establece metas y alcanza la libertad financiera con nuestra app intuitiva.',
};

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode}>) {

  return (
    <html lang='es' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <LanguageProvider>
            { children}  {/* 👈 children DENTRO del LanguageProvider */}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}