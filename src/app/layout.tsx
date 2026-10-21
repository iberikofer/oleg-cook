import type { Metadata, Viewport } from 'next';
import { Manrope, Unbounded } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../context/CartContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Toast } from '../components/Toast';

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const unbounded = Unbounded({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-unbounded',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oleg-cook.vercel.app'),
  title: 'Фруктовий чай і мікси для лимонадів — Oleg Cook, Вінниця',
  description:
    'Концентрати для фруктового чаю та мікси для лимонадів і коктейлів від Oleg Cook. Від 250 грн, Вінниця · доставка по місту. Гуртові ціни для закладів.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/assets/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    siteName: 'Oleg Cook',
    title: 'Фруктовий чай і мікси для лимонадів — Oleg Cook, Вінниця',
    description:
      'Концентрати для фруктового чаю та мікси для лимонадів і коктейлів від Oleg Cook. Від 250 грн, Вінниця · доставка по місту.',
    images: [
      {
        url: '/assets/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Oleg Cook — Фруктовий чай і мікси для лимонадів',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#1E4A2B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>
        <CartProvider>
          <Header />
          <Toast />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
