import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, whatsappLink } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Kontak & Konsultasi Gratis',
  description:
    'Hubungi tim BuzzerID untuk konsultasi gratis layanan jasa buzzer. Chat via WhatsApp, respon cepat dan profesional.',
  alternates: { canonical: `${siteConfig.url}/kontak` },
};

export default function KontakPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0E1829] to-[#070C18] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Kontak &amp; <span className="text-blue-400">Konsultasi Gratis</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Tim profesional kami siap membantu Anda memilih layanan buzzer yang tepat untuk kebutuhan bisnis Anda.
            Konsultasi gratis, respon cepat.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#070C18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-5">
            <h2 className="text-xl font-bold text-white">Hubungi Kami</h2>

            <div className="bg-[#0E1829] border border-[#1E2D44] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-900/40 rounded-lg flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="#10B981" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">WhatsApp (Chat only)</p>
                  <Link
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    {siteConfig.whatsappDisplay}
                  </Link>
                  <p className="text-xs text-slate-500 mt-1">Respon dalam 1×24 jam</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0E1829] border border-[#1E2D44] rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-900/40 rounded-lg flex items-center justify-center shrink-0 text-lg">
                  📧
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">Email</p>
                  <p className="text-sm text-blue-400">admin@buzzerid.com</p>
                  <p className="text-xs text-slate-500 mt-1">Untuk inquiry formal dan kerjasama</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0E1829] border border-[#1E2D44] rounded-xl p-5">
              <p className="text-sm font-semibold text-white mb-3">Jam Operasional</p>
              <div className="space-y-1.5 text-xs text-slate-400">
                <div className="flex justify-between"><span>Senin – Jumat</span><span className="text-green-400">08.00 – 22.00 WIB</span></div>
                <div className="flex justify-between"><span>Sabtu – Minggu</span><span className="text-green-400">09.00 – 21.00 WIB</span></div>
              </div>
            </div>
          </div>

          {/* Quick CTA */}
          <div>
            <h2 className="text-xl font-bold text-white mb-5">Mulai Konsultasi Sekarang</h2>
            <div className="bg-[#0E1829] border border-[#1E2D44] rounded-xl p-6 space-y-4">
              <p className="text-sm text-slate-400">
                Ceritakan kebutuhan Anda dan tim kami akan memberikan rekomendasi layanan buzzer terbaik sesuai
                target dan budget Anda.
              </p>
              <div className="space-y-3">
                {[
                  { msg: 'Halo BuzzerID, saya ingin tanya layanan FYP TikTok', label: '🎵 Tanya Layanan TikTok' },
                  { msg: 'Halo BuzzerID, saya ingin tanya layanan Trending Twitter', label: '🐦 Tanya Layanan Twitter' },
                  { msg: 'Halo BuzzerID, saya ingin tanya layanan Review Marketplace', label: '🛒 Tanya Layanan Marketplace' },
                  { msg: 'Halo BuzzerID, saya ingin konsultasi layanan buzzer', label: '💬 Konsultasi Umum' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    href={whatsappLink(item.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#131D2E] hover:bg-[#1a2540] border border-[#1E2D44] rounded-lg px-4 py-3 text-sm text-white transition-colors w-full"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
