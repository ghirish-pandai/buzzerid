import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { siteConfig, whatsappLink } from '@/lib/config';
import { blogPosts } from '@/lib/services';

type Params = { slug: string };

const postContent: Record<string, { body: string[]; image: string }> = {
  '7-cara-masuk-fyp-tiktok': {
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=900&h=400&fit=crop&q=80',
    body: [
      'Masuk ke For You Page (FYP) TikTok adalah impian setiap content creator dan brand. FYP adalah halaman utama yang dilihat setiap pengguna saat membuka TikTok — jika konten Anda muncul di sini, potensi mendapatkan jutaan views menjadi sangat besar.',
      '## 1. Optimalkan 3 Detik Pertama\nAlgoritma TikTok sangat memperhatikan watch time. Jika penonton melewati video Anda dalam 3 detik pertama, peluang masuk FYP menurun drastis. Mulai video dengan sesuatu yang mengejutkan, mengundang pertanyaan, atau langsung ke inti konten.',
      '## 2. Gunakan Hashtag yang Tepat\nJangan asal menambah hashtag populer. Kombinasikan hashtag besar (#fyp, #viral) dengan hashtag niche yang relevan dengan konten Anda. Ini membantu algoritma mengategorikan dan mendistribusikan video ke audiens yang tepat.',
      '## 3. Posting di Waktu Optimal\nAnalisis akun TikTok Anda untuk menemukan kapan followers Anda paling aktif. Secara umum, pagi hari (06.00–09.00), siang (12.00–14.00), dan malam (19.00–23.00) adalah waktu puncak di Indonesia.',
      '## 4. Tingkatkan Engagement Rate\nTikTok memprioritaskan konten yang mendapat banyak komentar, like, dan share di awal peluncuran. Inilah mengapa banyak brand menggunakan jasa buzzer TikTok untuk membantu "memancing" engagement organik dari penonton lain.',
      '## 5. Buat Konten yang Mendorong Interaksi\nAjukan pertanyaan di caption, minta penonton untuk duet atau stitch video Anda, atau buat konten yang memancing debat positif di kolom komentar. Semakin banyak interaksi, semakin besar jangkauan.',
      '## 6. Konsistensi Jadwal Posting\nAlgoritma TikTok menyukai akun yang aktif dan konsisten. Idealnya posting 1–3 video per hari. Jika tidak memungkinkan, minimal 3–4 video per minggu untuk menjaga momentum.',
      '## 7. Kolaborasi dengan Kreator Lain\nDuet, stitch, atau kolaborasi langsung dengan kreator di niche yang sama dapat langsung mengekspos konten Anda ke audiens baru yang relevan dan meningkatkan kemungkinan masuk FYP.',
      'Dengan menggabungkan strategi organik di atas dengan dukungan jasa buzzer profesional, peluang konten TikTok Anda masuk FYP dan meraih viral akan jauh lebih besar.',
    ],
  },
  'panduan-jasa-buzzer-bisnis-online': {
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=900&h=400&fit=crop&q=80',
    body: [
      'Jasa buzzer adalah layanan yang menggunakan jaringan akun media sosial aktif untuk meningkatkan engagement, visibilitas, dan kredibilitas konten atau brand Anda di platform digital. Ini adalah salah satu strategi digital marketing yang semakin populer di Indonesia.',
      '## Apa Itu Jasa Buzzer?\nBuzzer adalah individu atau akun media sosial yang secara aktif mempromosikan, mengomentar, dan menyebarkan konten tertentu. Berbeda dengan iklan berbayar (paid ads), buzzer memberikan kesan organik dan natural karena berasal dari interaksi akun nyata.',
      '## Bagaimana Cara Kerja Jasa Buzzer?\nPenyedia jasa buzzer seperti BuzzerID memiliki jaringan akun aktif di berbagai platform. Ketika Anda memesan layanan, tim buzzer akan mulai berinteraksi dengan konten Anda sesuai briefing — mulai dari memberikan like, komentar, share, hingga menyebarkan hashtag tertentu.',
      '## Manfaat untuk Bisnis Online\nPertama, meningkatkan social proof: produk dengan ribuan ulasan dan rating tinggi jauh lebih dipercaya calon pembeli. Kedua, mendorong algoritma: engagement tinggi di awal membuat algoritma platform mendistribusikan konten ke lebih banyak pengguna organik. Ketiga, membangun brand awareness: buzzer membantu brand Anda dibicarakan di berbagai platform.',
      '## Tips Memilih Penyedia Jasa Buzzer\nPastikan penyedia menggunakan akun real human, bukan bot. Tanyakan tentang garansi dan apa yang terjadi jika hasil tidak sesuai. Periksa portofolio dan testimoni klien sebelumnya. Hindari penyedia yang menawarkan harga sangat murah tanpa kejelasan metode.',
      '## Berapa Biaya Jasa Buzzer?\nHarga jasa buzzer sangat bervariasi tergantung platform, jenis layanan, dan jumlah yang diinginkan. Di BuzzerID, kami menyediakan rate card transparan sehingga Anda dapat merencanakan budget dengan tepat.',
      'Jasa buzzer yang digunakan dengan benar bukan hanya tentang angka — ini tentang membangun fondasi kredibilitas digital yang membantu bisnis Anda tumbuh secara berkelanjutan.',
    ],
  },
  'strategi-trending-topik-twitter': {
    image: 'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=900&h=400&fit=crop&q=80',
    body: [
      'Trending di Twitter (sekarang X) adalah salah satu cara paling efektif untuk mendapatkan exposure masif bagi brand atau campaign Anda. Ketika sebuah topik trending, ribuan hingga jutaan pengguna akan melihat dan membicarakannya.',
      '## Memahami Cara Kerja Trending Twitter\nTwitter menentukan trending berdasarkan volume percakapan dalam periode waktu tertentu, bukan total jumlah tweet. Artinya, lonjakan percakapan yang tiba-tiba dalam waktu singkat lebih efektif dari percakapan yang stabil dalam waktu lama.',
      '## Siapkan Strategi Hashtag yang Kuat\nPilih hashtag yang singkat, mudah diingat, dan relevan dengan kampanye. Hindari hashtag yang terlalu panjang atau sulit dieja. Pastikan hashtag tidak memiliki arti lain yang bisa disalahartikan.',
      '## Tentukan Waktu yang Tepat\nMomen terbaik untuk memulai campaign trending adalah saat engagement Twitter sedang tinggi: Senin–Jumat pukul 08.00–10.00 WIB (pagi kerja), 12.00–13.00 WIB (makan siang), dan 20.00–22.00 WIB (prime time malam).',
      '## Gunakan Seed Content yang Menarik\nSebelum mengaktifkan buzzer, siapkan konten utama yang menarik: thread informatif, infografis, atau video pendek. Konten seed yang baik akan mendorong pengguna organik untuk ikut berpartisipasi bahkan setelah buzzer selesai bekerja.',
      '## Libatkan Influencer dan KOL\nKombinasikan jasa buzzer dengan dukungan dari Key Opinion Leaders (KOL) di Twitter. Satu tweet dari KOL dengan ratusan ribu followers dapat langsung menciptakan momentum yang signifikan.',
      '## Monitor dan Respons Real-time\nSelama campaign berlangsung, pantau percakapan secara aktif. Balas komentar, retweet konten yang relevan, dan pertahankan momentum. Interaksi aktif dari akun brand menunjukkan kredibilitas dan mendorong lebih banyak orang untuk bergabung.',
      'Dengan strategi yang tepat dan dukungan jasa buzzer trending topik profesional, brand Anda bisa memanfaatkan kekuatan Twitter untuk menjangkau audiens yang jauh lebih luas.',
    ],
  },
  'boost-rating-google-maps': {
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&h=400&fit=crop&q=80',
    body: [
      'Rating Google Maps adalah salah satu faktor terpenting dalam keputusan konsumen modern. Penelitian menunjukkan bahwa 90% konsumen membaca ulasan online sebelum mengunjungi bisnis, dan bisnis dengan rating 4+ bintang mendapatkan 3x lebih banyak kunjungan dibanding yang di bawahnya.',
      '## Mengapa Rating Google Maps Sangat Penting\nGoogle Maps adalah direktori bisnis terbesar di dunia. Saat seseorang mencari "restoran dekat saya" atau "salon di Jakarta Selatan", Google menampilkan bisnis dengan rating tertinggi di urutan teratas. Ini adalah trafik organik yang sangat berharga dan gratis.',
      '## Langkah 1: Klaim dan Optimalkan Google Business Profile\nPastikan profil Google Maps bisnis Anda sudah lengkap: nama, alamat, nomor telepon, jam buka, foto berkualitas tinggi, dan deskripsi yang menarik. Profil yang lengkap mendapat kepercayaan lebih dari algoritma Google.',
      '## Langkah 2: Strategi Mendapatkan Ulasan Organik\nMinta pelanggan puas untuk meninggalkan ulasan segera setelah transaksi. Kirim pesan WhatsApp atau email follow-up dengan link langsung ke halaman ulasan Google Maps Anda. Jadikan ini bagian dari SOP bisnis Anda.',
      '## Langkah 3: Respons Semua Ulasan\nBalas semua ulasan, baik positif maupun negatif. Untuk ulasan positif, ucapkan terima kasih dengan personal. Untuk ulasan negatif, respons secara profesional dan tawarkan solusi. Google menghargai bisnis yang aktif berinteraksi dengan pelanggan.',
      '## Langkah 4: Gunakan Jasa Buzzer Rating\nJasa buzzer ulasan dan rating dari BuzzerID membantu mempercepat peningkatan rating bisnis Anda dengan ulasan dari akun real. Ini memberikan social proof yang kuat dan membantu bisnis Anda naik ke posisi teratas pencarian lokal.',
      '## Langkah 5: Konsistensi dan Jangka Panjang\nRating Google Maps bukan sprint, melainkan maraton. Kombinasikan jasa buzzer untuk momentum awal dengan strategi organik jangka panjang. Pastikan kualitas layanan bisnis Anda terus meningkat agar ulasan positif terus mengalir secara natural.',
      'Dengan rating yang tinggi dan jumlah ulasan yang banyak, bisnis Anda akan menjadi pilihan utama konsumen di area Anda — tanpa harus bersaing dengan iklan berbayar yang mahal.',
    ],
  },
  'jasa-buzzer-marketplace-shopee-tokopedia': {
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=900&h=400&fit=crop&q=80',
    body: [
      'Persaingan di marketplace seperti Shopee dan Tokopedia semakin ketat. Jutaan produk bersaing untuk mendapatkan perhatian pembeli, dan algoritma marketplace sangat memengaruhi produk mana yang muncul di halaman pertama pencarian.',
      '## Bagaimana Algoritma Marketplace Bekerja\nShopee dan Tokopedia menggunakan algoritma yang mempertimbangkan: jumlah terjual, rating toko, ulasan produk, waktu respons, dan tingkat konversi. Produk dengan performa baik di semua faktor ini akan mendapat posisi yang lebih tinggi di hasil pencarian.',
      '## Strategi 1: Tingkatkan Jumlah Terjual\nAngka "terjual" adalah sinyal kepercayaan utama bagi calon pembeli. Produk dengan 10.000+ terjual terlihat jauh lebih terpercaya dibanding produk baru dengan 0 penjualan. Jasa buzzer checkout BuzzerID membantu Anda membangun angka terjual yang kredibel.',
      '## Strategi 2: Kumpulkan Ulasan Bintang 5\nUlasan positif adalah aset terpenting toko Anda. Pembeli cenderung membaca 5–10 ulasan sebelum memutuskan membeli. Ulasan yang spesifik dan detail (menyebut kualitas produk, kecepatan pengiriman, packaging) lebih dipercaya daripada ulasan singkat.',
      '## Strategi 3: Optimalkan Listing Produk\nFoto produk berkualitas tinggi (minimum 6 foto dari berbagai sudut), judul yang mengandung kata kunci pencarian, deskripsi detail, dan harga yang kompetitif adalah fondasi produk yang baik sebelum Anda mulai promosi.',
      '## Strategi 4: Manfaatkan Flash Sale dan Voucher\nIkut serta dalam program flash sale marketplace, buat voucher toko, dan aktifkan fitur gratis ongkir. Ini tidak hanya menarik pembeli baru tapi juga meningkatkan conversion rate yang menjadi sinyal positif bagi algoritma.',
      '## Strategi 5: Kombinasikan Buzzer dengan Iklan Berbayar\nMulai dengan jasa buzzer untuk membangun social proof (ulasan, jumlah terjual), kemudian aktifkan iklan berbayar (Shopee Ads / TopAds). Produk dengan social proof kuat akan mendapat konversi yang jauh lebih baik dari iklan.',
      'Dengan strategi yang tepat dan dukungan jasa buzzer marketplace profesional, produk Anda bisa naik ke halaman pertama pencarian dan menghasilkan penjualan yang konsisten tanpa harus bersaing hanya dengan harga.',
    ],
  },
};

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      locale: 'id_ID',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = postContent[slug];
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#130D22] to-[#0D0719] pt-10 pb-0">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">Beranda</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">{post.title}</span>
          </div>
          <span className="text-xs bg-violet-900/40 text-violet-300 px-2.5 py-1 rounded-full mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-slate-400 text-sm mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-xs text-slate-500 pb-8">
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime} baca</span>
            <span>✍️ Tim BuzzerID</span>
          </div>
        </div>

        {content?.image && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl overflow-hidden h-56 md:h-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={content.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* Article body */}
      <section className="py-12 bg-[#0D0719]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-5">
            {(content?.body ?? []).map((block, i) => {
              if (block.startsWith('## ')) {
                return (
                  <h2 key={i} className="text-lg font-bold text-white mt-8 mb-2">
                    {block.replace('## ', '')}
                  </h2>
                );
              }
              const parts = block.split(/^## .+$/m);
              if (parts.length > 1) {
                const [pre, ...rest] = block.split('\n');
                if (pre.startsWith('## ')) {
                  return (
                    <div key={i}>
                      <h2 className="text-lg font-bold text-white mt-8 mb-2">{pre.replace('## ', '')}</h2>
                      <p className="text-slate-400 text-sm leading-relaxed">{rest.join('\n')}</p>
                    </div>
                  );
                }
              }
              return (
                <p key={i} className="text-slate-400 text-sm leading-relaxed">
                  {block}
                </p>
              );
            })}
          </article>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-violet-900/30 to-green-900/20 border border-violet-800/40 rounded-xl p-6 text-center">
            <h3 className="text-base font-bold text-white mb-2">
              Siap Tingkatkan Performa Media Sosial Anda?
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Konsultasikan strategi terbaik dengan tim BuzzerID. Gratis konsultasi, respon cepat.
            </p>
            <Link
              href={whatsappLink(`Halo BuzzerID, saya baca artikel "${post.title}" dan ingin konsultasi`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm"
            >
              💬 Konsultasi Gratis via WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* More articles */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-[#130D22] border-t border-[#2D1F4E]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-base font-bold text-white mb-6">Artikel Lainnya</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group bg-[#1A1030] border border-[#2D1F4E] hover:border-violet-800/60 rounded-xl p-4 transition-all"
                >
                  <span className="text-xs bg-violet-900/40 text-violet-300 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <h3 className="text-xs font-bold text-white mt-2 mb-1 group-hover:text-violet-400 transition-colors leading-snug line-clamp-2">
                    {p.title}
                  </h3>
                  <span className="text-xs text-slate-500">{p.date}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
