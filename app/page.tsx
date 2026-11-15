import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, whatsappLink } from '@/lib/config';
import { mainServices, blogPosts } from '@/lib/services';

export const metadata: Metadata = {
  title: { absolute: 'BuzzerID - Jasa Buzzer Indonesia +5.000.000 Member' },
  description: siteConfig.description,
  alternates: { canonical: siteConfig.url },
};

const painPoints = [
  { icon: '📉', text: 'Branding sosial media hingga marketplace tidak kunjung berhasil dan tidak membuat perkembangan signifikan.' },
  { icon: '🔇', text: 'Konten tidak bisa naik dan mendatangkan analitik yang rendah meski sudah sering upload.' },
  { icon: '👻', text: 'Pengikut sedikit dan membuat sosial media Anda tidak menarik bagi calon pelanggan.' },
  { icon: '📢', text: 'Campaign atau iklan tidak berhasil mendatangkan views, like, hingga komentar yang diharapkan.' },
];

const howItWorks = [
  { step: '01', title: 'Konsultasi dengan Tim Kami', desc: 'Ceritakan kebutuhan campaign atau branding Anda kepada tim konsultan kami via WhatsApp.' },
  { step: '02', title: 'Pilih Layanan yang Dibutuhkan', desc: 'Pilih layanan buzzer yang sesuai dengan tujuan dan platform sosial media Anda.' },
  { step: '03', title: 'Pembayaran & Terbitkan Invoice', desc: 'Lakukan pembayaran sesuai paket yang dipilih, invoice akan diterbitkan otomatis.' },
  { step: '04', title: 'Layanan Segera Kami Proses', desc: 'Tim buzzer profesional kami langsung bekerja sesuai briefing yang diberikan.' },
  { step: '05', title: 'Report Hasil Job Layanan', desc: 'Anda menerima laporan lengkap hasil pekerjaan sebagai bukti layanan yang telah selesai.' },
];

const faqs = [
  {
    q: 'Apa itu BuzzerID?',
    a: 'BuzzerID merupakan platform penyedia jasa buzzer terpercaya di Indonesia. Kami memiliki jaringan lebih dari 5.000.000 member aktif yang siap membantu meningkatkan engagement, followers, dan branding bisnis Anda di semua platform sosial media dan marketplace.',
  },
  {
    q: 'Bagaimana cara buzzer dapat membantu campaign & branding Anda?',
    a: 'Buzzer akan meningkatkan interaksi dengan menambahkan view, like, komentar, hingga follower untuk membantu algoritma platform mendistribusikan konten Anda ke lebih banyak orang. Ini membantu campaign Anda terlihat lebih populer dan mendapatkan kepercayaan audiens organik.',
  },
  {
    q: 'Apa saja metode pembayaran yang dapat dilakukan?',
    a: 'Kami menyediakan berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BRI, BNI) dan dompet digital (GoPay, OVO, DANA, ShopeePay, QRIS) untuk memudahkan transaksi Anda.',
  },
  {
    q: 'Apakah BuzzerID menyediakan garansi?',
    a: 'Ya, kami menyediakan garansi apabila pekerjaan yang dilakukan tidak sesuai dengan briefing atau harapan Anda. Kepuasan klien adalah prioritas utama kami.',
  },
  {
    q: 'Apakah jasa buzzer aman untuk akun saya?',
    a: 'Jasa buzzer yang kami sediakan menggunakan akun organik real human, bukan bot. Metode yang kami gunakan sesuai dengan standar keamanan platform dan tidak berisiko terhadap akun Anda.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#130D22] to-[#0D0719] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-violet-900/40 border border-violet-800/50 text-violet-300 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            +5.000.000 Member Aktif Siap Bekerja
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Jasa Buzzer Indonesia{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
              +5.000.000 Member
            </span>
            <br />
            Bantu Branding Bisnis Anda
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Platform jasa buzzer terpercaya untuk TikTok, Instagram, Twitter, YouTube, Facebook, dan Marketplace.
            Tingkatkan engagement, followers, dan penjualan bisnis Anda hari ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ratecard"
              className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              📋 Lihat Rate Card
            </Link>
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-sm"
            >
              💬 Hubungi Tim Kami
            </Link>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {siteConfig.stats.map((stat) => (
              <div key={stat.value} className="bg-[#1A1030]/80 border border-[#2D1F4E] rounded-xl p-4 text-center">
                <p className="text-xl font-bold text-violet-400">{stat.value}</p>
                <p className="text-xs text-slate-400 mt-1 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-16 md:py-20 bg-[#0D0719]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Apakah Anda{' '}
              <span className="text-yellow-400">pernah merasakan</span> hal ini?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Banyak bisnis menghadapi tantangan yang sama dalam membangun kehadiran digital mereka.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {painPoints.map((pt, i) => (
              <div key={i} className="flex gap-4 items-start bg-[#130D22] border border-[#2D1F4E] rounded-xl p-5">
                <span className="text-2xl shrink-0">{pt.icon}</span>
                <p className="text-sm text-slate-300 leading-relaxed">{pt.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-20 bg-[#130D22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Manfaat Menggunakan Jasa Buzzer{' '}
              <span className="text-violet-400">BuzzerID</span>?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
              Branding sosial media dan online shop menjadi pendorong untuk menghasilkan audiens atau pelanggan yang baik.
              Berikut ini adalah beberapa manfaat menggunakan jasa buzzer dari kami.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainServices.map((svc) => (
              <Link
                key={svc.id}
                href={svc.href}
                className="group bg-[#1A1030] border border-[#2D1F4E] hover:border-violet-800/60 rounded-xl p-6 transition-all hover:bg-[#162035]"
              >
                <span className="text-3xl mb-4 block">{svc.icon}</span>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">{svc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BUZZER EXPLANATION */}
      <section className="py-16 md:py-20 bg-[#0D0719]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
            Pengertian{' '}
            <span className="text-yellow-400">Buzzer</span> &amp; Jasa Buzzer?
          </h2>
          <p className="text-slate-400 text-sm text-center mb-10">
            Sebelum melakukan order layanan, Anda perlu mengetahui apa itu buzzer &amp; jasa buzzer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#130D22] border border-[#2D1F4E] rounded-xl p-6">
              <h3 className="text-lg font-bold text-violet-400 mb-3">Buzzer</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Buzzer adalah kontributor online yang bisa membantu kita untuk berbagai kebutuhan di sosial media maupun
                marketplace atau jualan online. Seorang buzzer memiliki lebih dari 1 akun di berbagai platform sosial
                media ataupun marketplace. Buzzer bertugas untuk melakukan berbagai aksi seperti follow, like, comment,
                share, posting, dan berbagai interaksi lainnya sesuai briefing yang diberikan.
              </p>
            </div>
            <div className="bg-[#130D22] border border-[#2D1F4E] rounded-xl p-6">
              <h3 className="text-lg font-bold text-violet-400 mb-3">Jasa Buzzer</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Jasa buzzer adalah layanan yang menyediakan segala kebutuhan campaign, marketing, personal, dan kebutuhan
                apapun yang membutuhkan banyak dorongan dari SDM yang berhubungan dengan platform sosial media hingga
                marketplace. Contohnya adalah tambahan follower, like, comment, trending topik, review produk, rating
                Google Maps, dan masih banyak lagi layanan yang bisa disesuaikan dengan kebutuhan bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-20 bg-[#130D22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Cara Kerja Jasa Buzzer <span className="text-violet-400">BuzzerID</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Hanya dengan beberapa langkah sederhana, Anda akan langsung bisa meningkatkan branding hingga campaign
              sosial media dan marketplace dibantu jasa buzzer.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-14 h-14 bg-violet-900/40 border-2 border-violet-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-violet-400 font-bold text-sm">{step.step}</span>
                </div>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] right-0 h-0.5 bg-gradient-to-r from-violet-700/40 to-transparent" />
                )}
                <h3 className="text-sm font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-8 py-3 rounded-xl transition-colors text-sm"
            >
              💬 Ngobrol Dulu dengan Tim Kami
            </Link>
          </div>
        </div>
      </section>

      {/* WHY BUZZERID */}
      <section className="py-16 md:py-20 bg-[#0D0719]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Mengapa Harus Jasa Buzzer dari <span className="text-violet-400">BuzzerID</span>?
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Kami telah melakukan ribuan project transaksi jasa buzzer dengan ratusan client dan terus berkembang
              meningkatkan kualitas jasa dan layanan sehingga akan terus membuat Anda puas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {siteConfig.stats.map((stat) => (
              <div key={stat.value} className="bg-[#130D22] border border-[#2D1F4E] rounded-xl p-5 text-center">
                <p className="text-2xl font-extrabold text-violet-400 mb-1">{stat.value}</p>
                <p className="text-xs text-slate-400 leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / RATE CARD */}
      <section id="harga" className="py-16 md:py-20 bg-[#130D22]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Detail Harga Terjangkau <span className="text-yellow-400">Jasa Buzzer</span>
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            Informasi lengkap jasa buzzer bisa Anda lihat pada detail rate card di bawah ini.
          </p>
          <div className="bg-[#1A1030] border border-[#2D1F4E] rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-lg font-bold text-white mb-2">Rate Card BuzzerID</h3>
            <p className="text-sm text-slate-400 mb-6">
              Lihat daftar lengkap harga semua layanan buzzer kami, mulai dari buzzer organik, trending topik,
              FYP TikTok, ulasan marketplace, dan masih banyak lagi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/ratecard"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                📋 Lihat Rate Card
              </Link>
              <Link
                href={whatsappLink('Halo BuzzerID, saya ingin tanya harga layanan buzzer')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                💬 Tanya Harga via WA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT METHODS */}
      <section className="py-12 bg-[#0D0719]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Metode Pembayaran Kami</h2>
          <p className="text-sm text-slate-400 mb-8">
            Sistem pembayaran yang kami gunakan mudah dan fleksibel untuk memudahkan Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.paymentMethods.map((pm) => (
              <span key={pm} className="bg-[#130D22] border border-[#2D1F4E] text-slate-300 text-sm font-medium px-4 py-2 rounded-lg">
                {pm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-[#130D22]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Pertanyaan Seputar Layanan <span className="text-violet-400">BuzzerID</span>
            </h2>
            <p className="text-slate-400 text-sm">
              Dalam upaya memberikan kemudahan kepada Anda, kami telah mengumpulkan pertanyaan dan jawaban yang sering ditanyakan.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-[#1A1030] border border-[#2D1F4E] rounded-xl overflow-hidden">
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
          <div className="text-center mt-8">
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              Masih ada pertanyaan? Tanya tim kami →
            </Link>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-16 md:py-20 bg-[#0D0719]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">Blog & Edukasi</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">
                Wawasan &amp; Strategi Media Sosial Terbaru
              </h2>
            </div>
            <Link href="/blog" className="hidden md:inline-flex text-sm text-violet-400 hover:text-violet-300 transition-colors">
              Lihat Semua Artikel →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#130D22] border border-[#2D1F4E] hover:border-violet-800/60 rounded-xl overflow-hidden transition-all"
              >
                <div className="bg-gradient-to-br from-violet-900/40 to-slate-900 h-40 flex items-center justify-center">
                  <span className="text-4xl opacity-60">📝</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-violet-900/40 text-violet-300 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 group-hover:text-violet-400 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link href="/blog" className="text-sm text-violet-400 hover:text-violet-300">
              Lihat Semua Artikel →
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-900/30 to-green-900/20 border-t border-[#2D1F4E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Siap Tingkatkan Branding Bisnis Anda?
          </h2>
          <p className="text-slate-400 text-sm mb-8">
            Konsultasikan kebutuhan buzzer Anda dengan tim profesional kami. Gratis konsultasi, respon cepat.
          </p>
          <Link
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-10 py-4 rounded-xl transition-colors text-base"
          >
            💬 Mulai Konsultasi Gratis
          </Link>
        </div>
      </section>
    </>
  );
}