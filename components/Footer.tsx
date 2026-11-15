import Link from 'next/link';
import { siteConfig, whatsappLink } from '@/lib/config';

const footerServices = [
  { label: 'Jasa Buzzer TikTok', href: '/layanan/tiktok/buzzer' },
  { label: 'Jasa FYP TikTok', href: '/layanan/tiktok/fyp' },
  { label: 'Jasa Buzzer Instagram', href: '/layanan/instagram/buzzer' },
  { label: 'Jasa Trending Twitter', href: '/layanan/twitter/trending-topik' },
  { label: 'Jasa Buzzer YouTube', href: '/layanan/youtube/buzzer' },
  { label: 'Jasa Review Marketplace', href: '/layanan/marketplace/ulasan-rating' },
  { label: 'Jasa Checkout Marketplace', href: '/layanan/marketplace/checkout' },
  { label: 'Jasa Buzzer Facebook', href: '/layanan/facebook/buzzer' },
];

const footerLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Rate Card', href: '/ratecard' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontak', href: '/kontak' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0719] border-t border-[#2D1F4E] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold text-white">
                Buzzer<span className="text-violet-400">ID</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Platform penyedia jasa buzzer untuk kebutuhan digital marketing sosial media terbaik di Indonesia.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>📧 admin@buzzerid.com</p>
              <p>
                💬 WhatsApp:{' '}
                <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">
                  {siteConfig.whatsappDisplay}
                </Link>
              </p>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Menu</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Layanan Populer</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerServices.map((svc) => (
                <li key={svc.href}>
                  <Link href={svc.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {svc.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2D1F4E] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2025 BuzzerID — All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500">
            Platform jasa buzzer Indonesia terpercaya
          </p>
        </div>
      </div>
    </footer>
  );
}