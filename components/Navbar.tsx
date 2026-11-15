'use client';
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig, whatsappLink } from '@/lib/config';

const navServices = [
  { label: 'TikTok', platform: 'tiktok', services: ['fyp', 'follower', 'like', 'comment', 'view', 'view-live', 'buzzer'] },
  { label: 'Instagram', platform: 'instagram', services: ['follower', 'like', 'comment', 'view', 'post-feed', 'polling', 'buzzer'] },
  { label: 'Twitter/X', platform: 'twitter', services: ['trending-topik', 'follower', 'like', 'retweet', 'buzzer'] },
  { label: 'YouTube', platform: 'youtube', services: ['subscriber', 'like', 'comment', 'view', 'jam-tayang', 'buzzer'] },
  { label: 'Facebook', platform: 'facebook', services: ['follower', 'like', 'comment', 'view-live', 'buzzer'] },
  { label: 'Marketplace', platform: 'marketplace', services: ['checkout', 'ulasan-rating', 'follower', 'like-produk', 'buzzer'] },
];

const serviceLabels: Record<string, string> = {
  fyp: 'FYP TikTok', follower: 'Follower', like: 'Like', comment: 'Komentar',
  view: 'View', 'view-live': 'View Live', buzzer: 'Buzzer',
  'post-feed': 'Post Feed', polling: 'Polling', 'trending-topik': 'Trending Topik',
  retweet: 'Retweet', subscriber: 'Subscriber', 'jam-tayang': 'Jam Tayang',
  checkout: 'Checkout / Terjual', 'ulasan-rating': 'Ulasan & Rating', 'like-produk': 'Favorite Produk',
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0D0719]/95 backdrop-blur border-b border-[#2D1F4E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-xl font-bold text-white">
              Buzzer<span className="text-violet-400">ID</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-300 hover:text-white transition-colors">
              Beranda
            </Link>

            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="text-sm text-slate-300 hover:text-white transition-colors flex items-center gap-1">
                Layanan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-[#130D22] border border-[#2D1F4E] rounded-xl shadow-2xl p-4 grid grid-cols-3 gap-4">
                  {navServices.map((cat) => (
                    <div key={cat.platform}>
                      <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">{cat.label}</p>
                      <ul className="space-y-1">
                        {cat.services.map((svc) => (
                          <li key={svc}>
                            <Link
                              href={`/layanan/${cat.platform}/${svc}`}
                              className="text-xs text-slate-400 hover:text-white transition-colors block py-0.5"
                            >
                              {serviceLabels[svc] ?? svc}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/ratecard" className="text-sm text-slate-300 hover:text-white transition-colors">
              Rate Card
            </Link>
            <Link href="/blog" className="text-sm text-slate-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#faq" className="text-sm text-slate-300 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi Tim
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden text-slate-300 hover:text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#130D22] border-t border-[#2D1F4E] px-4 py-4 space-y-3">
          <Link href="/" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Beranda</Link>
          <Link href="/ratecard" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Rate Card</Link>
          <Link href="/blog" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link href="#faq" className="block text-sm text-slate-300 hover:text-white py-2" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg w-full"
            onClick={() => setMenuOpen(false)}
          >
            Hubungi Tim via WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}