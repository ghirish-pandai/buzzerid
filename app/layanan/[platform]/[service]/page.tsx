import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allServices, getService, getServicesByPlatform } from '@/lib/services';
import { siteConfig, whatsappLink } from '@/lib/config';

type Params = { platform: string; service: string };

export async function generateStaticParams(): Promise<Params[]> {
  return allServices.map((s) => ({ platform: s.platform, service: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { platform, service } = await params;
  const svc = getService(platform, service);
  if (!svc) return {};
  return {
    title: svc.title,
    description: svc.metaDescription,
    alternates: { canonical: `${siteConfig.url}/layanan/${platform}/${service}` },
    openGraph: {
      title: svc.title,
      description: svc.metaDescription,
      type: 'website',
      locale: 'id_ID',
    },
  };
}

function getPlatformColor(platform: string) {
  const map: Record<string, string> = {
    tiktok: 'from-pink-900/30 to-black',
    instagram: 'from-purple-900/30 to-pink-900/20',
    twitter: 'from-sky-900/30 to-black',
    youtube: 'from-red-900/30 to-black',
    facebook: 'from-blue-900/30 to-black',
    marketplace: 'from-orange-900/30 to-black',
    threads: 'from-slate-800/40 to-black',
  };
  return map[platform] ?? 'from-blue-900/30 to-black';
}

function getServiceBenefits(svc: ReturnType<typeof getService>) {
  if (!svc) return [];
  const { serviceName, platformName, metric } = svc;
  return [
    {
      icon: '📈',
      title: `Tingkatkan ${metric} secara cepat`,
      desc: `Layanan ${serviceName.toLowerCase()} ${platformName} kami menggunakan akun real human organik untuk meningkatkan ${metric} Anda secara signifikan dalam waktu singkat.`,
    },
    {
      icon: '🛡️',
      title: 'Aman & terpercaya',
      desc: `Metode yang kami gunakan sepenuhnya aman untuk akun ${platformName} Anda. Tidak menggunakan bot dan sesuai dengan kebijakan platform.`,
    },
    {
      icon: '⚡',
      title: 'Proses cepat & profesional',
      desc: `Order ${serviceName.toLowerCase()} ${platformName} Anda akan segera diproses oleh tim profesional kami setelah pembayaran dikonfirmasi.`,
    },
    {
      icon: '💬',
      title: 'Konsultasi gratis',
      desc: `Tim konsultan kami siap membantu Anda memilih paket ${serviceName.toLowerCase()} ${platformName} yang paling sesuai dengan tujuan dan budget Anda.`,
    },
  ];
}

function getServiceFaqs(svc: ReturnType<typeof getService>) {
  if (!svc) return [];
  const { serviceName, platformName, metric } = svc;
  return [
    {
      q: `Berapa lama proses jasa ${serviceName.toLowerCase()} ${platformName}?`,
      a: `Proses pengerjaan jasa ${serviceName.toLowerCase()} ${platformName} biasanya dimulai dalam 1×24 jam setelah pembayaran dikonfirmasi. Durasi penyelesaian tergantung pada jumlah ${metric} yang dipesan.`,
    },
    {
      q: `Apakah ${metric} yang diberikan organik?`,
      a: `Ya, semua ${metric} yang kami berikan menggunakan akun real human, bukan bot. Ini memastikan keamanan akun ${platformName} Anda dan kualitas interaksi yang lebih natural.`,
    },
    {
      q: `Apakah ada garansi untuk layanan ini?`,
      a: `Kami memberikan garansi pengerjaan sesuai briefing. Jika hasil tidak sesuai harapan, kami akan memberikan kompensasi atau pengerjaan ulang.`,
    },
    {
      q: `Bagaimana cara memesan jasa ${serviceName.toLowerCase()} ${platformName}?`,
      a: `Hubungi tim kami via WhatsApp, jelaskan kebutuhan ${metric} ${platformName} Anda, pilih paket yang sesuai, lakukan pembayaran, dan layanan akan segera diproses.`,
    },
  ];
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { platform, service } = await params;
  const svc = getService(platform, service);
  if (!svc) notFound();

  const relatedServices = getServicesByPlatform(platform)
    .filter((s) => s.slug !== service)
    .slice(0, 4);

  const benefits = getServiceBenefits(svc);
  const faqs = getServiceFaqs(svc);
  const gradient = getPlatformColor(platform);

  const waMessage = `Halo BuzzerID, saya ingin tanya tentang jasa ${svc.serviceName} ${svc.platformName}`;

  return (
    <>
      {/* Hero */}
      <section className={`relative bg-gradient-to-b ${gradient} py-16 md:py-24`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">{svc.platformEmoji}</span>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">{svc.platformName}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            Jasa {svc.serviceName} {svc.platformName}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mt-1">
              Murah, Organik &amp; Bergaransi
            </span>
          </h1>
          <p className="text-slate-400 text-base mb-8 max-w-2xl mx-auto">
            Tingkatkan {svc.metric} {svc.platformName} Anda dengan layanan profesional dari BuzzerID.
            Menggunakan +20.000 member aktif real human untuk hasil yang natural dan aman.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              💬 Pesan Sekarang
            </Link>
            <Link
              href="/ratecard"
              className="inline-flex items-center justify-center gap-2 bg-[#131D2E] hover:bg-[#1E2D44] border border-[#1E2D44] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              📋 Lihat Harga
            </Link>
          </div>
        </div>
      </section>

      {/* What is this service */}
      <section className="py-14 bg-[#070C18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-5">
            Apa itu Jasa {svc.serviceName} {svc.platformName}?
          </h2>
          <div className="prose prose-invert prose-sm max-w-none text-slate-400 space-y-4">
            <p>
              Jasa {svc.serviceName.toLowerCase()} {svc.platformName} adalah layanan yang membantu Anda meningkatkan{' '}
              {svc.metric} pada akun atau konten {svc.platformName} Anda secara cepat dan efektif. BuzzerID menyediakan
              layanan ini menggunakan jaringan +20.000 member aktif real human yang tersebar di seluruh Indonesia.
            </p>
            <p>
              Dengan meningkatnya {svc.metric} di {svc.platformName}, akun atau konten Anda akan terlihat lebih
              kredibel dan populer di mata audiens organik. Algoritma {svc.platformName} juga cenderung mendistribusikan
              konten yang memiliki engagement tinggi ke lebih banyak pengguna, sehingga peluang viral dan pertumbuhan
              organik Anda semakin besar.
            </p>
            <p>
              BuzzerID telah dipercaya oleh ribuan klien dari berbagai skala bisnis — mulai dari UMKM, brand lokal,
              hingga perusahaan besar — untuk meningkatkan performa digital marketing mereka di {svc.platformName} dan
              platform lainnya.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-[#0E1829]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Manfaat Jasa {svc.serviceName} {svc.platformName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="bg-[#131D2E] border border-[#1E2D44] rounded-xl p-5 flex gap-4">
                <span className="text-2xl shrink-0">{b.icon}</span>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{b.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="py-14 bg-[#070C18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            Cara Pesan Jasa {svc.serviceName} {svc.platformName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n: '1', t: 'Hubungi Tim', d: `Chat WhatsApp dan jelaskan kebutuhan ${svc.metric} ${svc.platformName} Anda.` },
              { n: '2', t: 'Pilih Paket', d: `Pilih paket jasa ${svc.serviceName.toLowerCase()} yang sesuai budget dan target Anda.` },
              { n: '3', t: 'Pembayaran', d: 'Lakukan pembayaran via transfer bank atau e-wallet. Invoice langsung diterbitkan.' },
              { n: '4', t: 'Proses & Report', d: `Tim kami memproses order dan memberikan laporan hasil ${svc.metric} yang telah dikerjakan.` },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="w-12 h-12 bg-blue-900/40 border-2 border-blue-700/50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-400 font-bold">{step.n}</span>
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{step.t}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              💬 Pesan Sekarang via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-[#0E1829]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            FAQ Jasa {svc.serviceName} {svc.platformName}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#131D2E] border border-[#1E2D44] rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-semibold text-white list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-slate-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-14 bg-[#070C18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-6">
              Layanan {svc.platformName} Lainnya
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedServices.map((rel) => (
                <Link
                  key={`${rel.platform}-${rel.slug}`}
                  href={`/layanan/${rel.platform}/${rel.slug}`}
                  className="bg-[#0E1829] border border-[#1E2D44] hover:border-blue-800/60 rounded-xl p-4 text-center transition-all group"
                >
                  <span className="text-xl block mb-2">{rel.platformEmoji}</span>
                  <p className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                    Jasa {rel.serviceName}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{rel.platformName}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-blue-900/30 to-green-900/20 border-t border-[#1E2D44]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Siap Tingkatkan {svc.metric} {svc.platformName} Anda?
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Konsultasikan kebutuhan Anda dengan tim kami sekarang. Gratis konsultasi, respon cepat.
          </p>
          <Link
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-4 rounded-xl transition-colors"
          >
            💬 Hubungi Tim BuzzerID
          </Link>
        </div>
      </section>
    </>
  );
}
