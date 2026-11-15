import type { Metadata } from 'next';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Rate Card Jasa Buzzer - Daftar Harga Lengkap',
  description:
    'Lihat daftar harga lengkap semua layanan buzzer BuzzerID. Harga terjangkau untuk TikTok, Instagram, Twitter, YouTube, Facebook, Marketplace, dan Google Maps.',
  alternates: { canonical: `${siteConfig.url}/ratecard` },
};

export default function RateCardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
