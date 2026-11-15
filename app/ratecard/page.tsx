import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, whatsappLink } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Rate Card Jasa Buzzer - Daftar Harga Lengkap',
  description:
    'Lihat daftar harga lengkap semua layanan buzzer BuzzerID. Harga terjangkau untuk TikTok, Instagram, Twitter, YouTube, Facebook, Marketplace, dan Google Maps.',
  alternates: { canonical: `${siteConfig.url}/ratecard` },
};

const categories = [
  { emoji: '🎵', label: 'TikTok', desc: 'FYP, Follower, Like, Comment, View, View Live, Buzzer' },
  { emoji: '📸', label: 'Instagram', desc: 'Follower, Like, Comment, View, Post Feed, Polling, Buzzer' },
  { emoji: '🐦', label: 'Twitter/X', desc: 'Trending Topik, Follower, Like, Retweet, Buzzer' },
  { emoji: '▶️', label: 'YouTube', desc: 'Subscriber, Like, Comment, View, Jam Tayang, Buzzer' },
  { emoji: '👍', label: 'Facebook', desc: 'Follower, Like, Comment, View Live, Buzzer' },
  { emoji: '🛒', label: 'Marketplace', desc: 'Checkout/Terjual, Ulasan & Rating, Follower Toko, Buzzer' },
  { emoji: '🗺️', label: 'Google Maps', desc: 'Ulasan, Review & Rating Bintang 5' },
  { emoji: '🧵', label: 'Threads', desc: 'Follower, Like, Comment, Repost, Polling, Buzzer' },
];

export default function RateCardPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0E1829] to-[#070C18] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Rate Card <span className="text-blue-400">BuzzerID</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            Daftar harga lengkap semua layanan jasa buzzer kami. Harga kompetitif, kualitas terjamin,
            dan tersedia untuk semua platform sosial media dan marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={siteConfig.rateCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              📊 Buka Rate Card (Google Sheet)
            </a>
            <Link
              href={whatsappLink('Halo BuzzerID, saya ingin tanya harga layanan buzzer')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              💬 Tanya Harga via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* Rate card embed info */}
      <section className="py-12 bg-[#070C18]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0E1829] border border-[#1E2D44] rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">📋</div>
            <h2 className="text-xl font-bold text-white mb-3">Rate Card Lengkap dalam Google Sheet</h2>
            <p className="text-sm text-slate-400 mb-6 max-w-lg mx-auto">
              Rate card kami tersedia dalam format Google Spreadsheet yang selalu diperbarui.
              Klik tombol di bawah untuk melihat semua daftar harga lengkap.
            </p>
            <a
              href={siteConfig.rateCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              📊 Lihat Rate Card Lengkap
            </a>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-14 bg-[#0E1829]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Kategori Layanan yang Tersedia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <div key={cat.label} className="bg-[#131D2E] border border-[#1E2D44] rounded-xl p-5">
                <span className="text-3xl block mb-3">{cat.emoji}</span>
                <h3 className="text-sm font-bold text-white mb-1">{cat.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing notes */}
      <section className="py-14 bg-[#070C18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Ketentuan Harga</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '💰', title: 'Harga Transparan', desc: 'Semua harga tercantum jelas di rate card. Tidak ada biaya tersembunyi.' },
              { icon: '📦', title: 'Paket Fleksibel', desc: 'Tersedia berbagai paket sesuai kebutuhan dan budget Anda.' },
              { icon: '🎯', title: 'Custom Order', desc: 'Butuh jumlah tertentu yang tidak ada di rate card? Hubungi tim kami untuk harga custom.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#0E1829] border border-[#1E2D44] rounded-xl p-5 text-center">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-900/30 to-green-900/20 border-t border-[#1E2D44]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Ada yang Ingin Ditanyakan?</h2>
          <p className="text-sm text-slate-400 mb-6">
            Tim kami siap membantu konsultasi gratis untuk memilih paket yang tepat sesuai kebutuhan Anda.
          </p>
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-4 rounded-xl transition-colors"
          >
            💬 Konsultasi Gratis via WhatsApp
          </Link>
        </div>
      </section>
    </>
  );
}
