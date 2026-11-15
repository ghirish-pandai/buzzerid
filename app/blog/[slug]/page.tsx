import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/services';
import { siteConfig, whatsappLink } from '@/lib/config';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.excerpt,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
  };
}

const blogContent: Record<string, string[]> = {
  '7-cara-masuk-fyp-tiktok': [
    'TikTok adalah salah satu platform media sosial yang paling cepat berkembang di dunia. Dengan lebih dari 1 miliar pengguna aktif, TikTok menawarkan peluang luar biasa bagi kreator konten dan bisnis untuk menjangkau audiens yang sangat luas.',
    'For You Page (FYP) adalah halaman utama TikTok di mana konten ditampilkan berdasarkan algoritma kepada pengguna yang belum mengikuti akun tersebut. Masuk FYP adalah kunci untuk mendapatkan eksposur maksimal dan pertumbuhan organik.',
    'Berikut adalah 7 cara ampuh untuk meningkatkan peluang konten Anda masuk FYP TikTok:',
    '1. Optimalkan caption dan hashtag — Gunakan hashtag yang relevan dan trending untuk membantu algoritma mengkategorikan konten Anda dengan tepat.',
    '2. Upload di waktu prime time — Waktu terbaik posting di TikTok Indonesia adalah pukul 07.00–09.00 pagi dan 19.00–22.00 malam.',
    '3. Tingkatkan watch rate — Buat 3 detik pertama video semenarik mungkin. Algoritma TikTok sangat memperhatikan berapa lama pengguna menonton video Anda.',
    '4. Gunakan sound/musik trending — Konten dengan audio populer mendapatkan distribusi lebih luas dari algoritma TikTok.',
    '5. Dorong interaksi — Like, komentar, share, dan save adalah sinyal kuat yang dikirimkan ke algoritma bahwa konten Anda berkualitas.',
    '6. Konsistensi upload — TikTok merekomendasikan upload minimal 1–3 kali per hari untuk pertumbuhan optimal.',
    '7. Gunakan jasa buzzer FYP — Jasa buzzer FYP TikTok profesional seperti BuzzerID dapat membantu memberikan dorongan awal engagement yang dibutuhkan untuk menarik perhatian algoritma.',
    'Dengan menerapkan strategi-strategi di atas secara konsisten, peluang konten TikTok Anda masuk FYP dan viral akan meningkat signifikan. Jika Anda membutuhkan bantuan lebih lanjut untuk meningkatkan performa TikTok Anda, tim BuzzerID siap membantu.',
  ],
  'panduan-jasa-buzzer-bisnis-online': [
    'Dalam era digital seperti sekarang, kehadiran online yang kuat adalah kunci kesuksesan bisnis. Jasa buzzer hadir sebagai solusi untuk membantu bisnis membangun dan memperkuat brand awareness mereka di berbagai platform digital.',
    'Jasa buzzer adalah layanan yang menyediakan jaringan kontributor online (buzzer) yang dapat membantu meningkatkan berbagai metrik di platform sosial media dan marketplace, seperti followers, likes, comments, views, dan lainnya.',
    'Manfaat utama menggunakan jasa buzzer untuk bisnis online antara lain: meningkatkan social proof, memperkuat kepercayaan calon pelanggan, mendorong algoritma platform untuk mendistribusikan konten lebih luas, dan mempercepat pertumbuhan organik.',
    'Jenis-jenis layanan buzzer yang tersedia meliputi: buzzer kampanye untuk meningkatkan engagement konten, buzzer trending topik untuk membuat hashtag viral di Twitter, buzzer FYP untuk membantu konten masuk For You Page TikTok, buzzer review dan rating untuk platform marketplace dan Google Maps, serta buzzer clipper untuk memperbanyak penyebaran konten video.',
    'Ketika memilih penyedia jasa buzzer, pastikan untuk mempertimbangkan kualitas member (real human vs bot), pengalaman dan rekam jejak penyedia, ketersediaan garansi, transparansi harga, dan kecepatan respon layanan pelanggan.',
    'BuzzerID adalah platform jasa buzzer terpercaya di Indonesia yang telah melayani ribuan klien dengan jaringan lebih dari 20.000 member aktif real human. Kami menyediakan layanan untuk semua platform utama dengan harga kompetitif dan garansi kepuasan.',
  ],
  'strategi-trending-topik-twitter': [
    'Trending topik di Twitter (kini X) adalah salah satu cara paling efektif untuk mendapatkan eksposur masif bagi brand atau campaign Anda. Ketika hashtag atau keyword berhasil masuk trending, visibilitas konten Anda melonjak drastis dan berpotensi dilirik media nasional.',
    'Algoritma trending Twitter dipengaruhi oleh volume tweet dalam periode waktu tertentu, kecepatan peningkatan tweet (velocity), relevansi geografis, dan tingkat engagement (likes, retweet, reply).',
    'Strategi yang efektif untuk membuat campaign Anda trending di Twitter mencakup beberapa elemen kunci: pemilihan waktu yang tepat (umumnya pagi hari atau saat jam makan siang memberikan hasil lebih baik), penggunaan hashtag yang spesifik dan mudah diingat, koordinasi dengan komunitas pendukung, dan penggunaan jasa buzzer trending topik profesional.',
    'Pemilihan waktu sangat krusial. Data menunjukkan bahwa trending pada pagi hari (06.00–09.00) di weekday cenderung mendapat coverage media lebih tinggi karena jurnalis aktif mencari topik berita di pagi hari.',
    'BuzzerID menyediakan layanan buzzer trending topik Twitter dengan track record keberhasilan tinggi. Tim kami memiliki pengalaman dalam mengkoordinasi ribuan akun organik untuk mendorong hashtag masuk trending dengan aman dan efektif.',
    'Untuk informasi lebih lanjut tentang paket dan harga layanan trending topik Twitter, hubungi tim kami melalui WhatsApp atau lihat rate card lengkap di halaman harga kami.',
  ],
  'boost-rating-google-maps': [
    'Google Maps telah menjadi referensi utama bagi konsumen Indonesia dalam mencari dan mengevaluasi bisnis lokal. Rating dan ulasan di Google Maps memiliki dampak langsung terhadap kepercayaan calon pelanggan dan peringkat bisnis dalam pencarian lokal.',
    'Penelitian menunjukkan bahwa 90% konsumen membaca ulasan online sebelum mengunjungi bisnis, dan bisnis dengan rating 4.0 ke atas mendapatkan 28% lebih banyak klik dibandingkan bisnis dengan rating lebih rendah.',
    'Cara meningkatkan rating Google Maps secara organik meliputi: memberikan pelayanan prima kepada setiap pelanggan, aktif meminta ulasan dari pelanggan yang puas, merespons semua ulasan (baik positif maupun negatif), dan menggunakan jasa buzzer review Google Maps untuk memberikan dorongan awal.',
    'Jasa buzzer review Google Maps dari BuzzerID menggunakan akun real human dengan riwayat review yang kredibel. Ini memastikan ulasan yang diberikan terlihat natural dan tidak berisiko difilter oleh sistem Google.',
    'Penting untuk memastikan bahwa ulasan yang diberikan relevan dengan kategori bisnis Anda dan menggunakan bahasa yang natural. BuzzerID menyediakan layanan custom review yang bisa disesuaikan dengan kebutuhan spesifik bisnis Anda.',
    'Hubungi tim BuzzerID sekarang untuk konsultasi gratis tentang strategi meningkatkan rating Google Maps bisnis Anda.',
  ],
  'jasa-buzzer-marketplace-shopee-tokopedia': [
    'Marketplace seperti Shopee dan Tokopedia adalah arena persaingan yang semakin ketat. Dengan jutaan produk yang bersaing untuk mendapatkan perhatian pembeli, memiliki strategi yang tepat untuk meningkatkan visibilitas produk Anda adalah hal yang sangat penting.',
    'Algoritma marketplace sangat dipengaruhi oleh jumlah terjual, rating produk, jumlah ulasan, dan tingkat engagement di halaman produk. Produk dengan statistik yang lebih baik akan muncul lebih tinggi dalam hasil pencarian.',
    'Jasa buzzer marketplace dari BuzzerID mencakup berbagai layanan: checkout/terjual (meningkatkan jumlah penjualan yang terlihat), ulasan dan rating bintang 5, penambahan follower toko, like/favorite produk, chat respon untuk meningkatkan responsivitas toko, dan branding toko secara keseluruhan.',
    'Strategi yang kami rekomendasikan untuk bisnis marketplace adalah mengombinasikan beberapa layanan sekaligus. Misalnya, mulai dengan meningkatkan jumlah terjual dan ulasan untuk membangun social proof, kemudian tingkatkan follower toko untuk membangun basis pelanggan setia.',
    'BuzzerID telah membantu ratusan seller marketplace meningkatkan penjualan mereka secara signifikan. Dengan pengalaman lebih dari 5 tahun di industri ini, kami memahami cara kerja algoritma marketplace dan strategi yang paling efektif untuk setiap platform.',
    'Lihat detail harga layanan buzzer marketplace kami di rate card atau hubungi tim kami untuk mendapatkan rekomendasi paket yang sesuai dengan kebutuhan bisnis Anda.',
  ],
};

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = blogContent[slug] ?? [post.excerpt, 'Artikel ini sedang dalam proses penulisan. Hubungi tim kami untuk informasi lebih lanjut.'];
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#0E1829] to-[#070C18] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/blog" className="text-xs text-slate-400 hover:text-white transition-colors">Blog</Link>
            <span className="text-slate-600">›</span>
            <span className="text-xs text-blue-400">{post.category}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white leading-snug mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded-full">{post.category}</span>
            <span>{post.date}</span>
            <span>· {post.readTime} baca</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 bg-[#070C18]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-900/20 to-slate-900/40 rounded-xl h-52 flex items-center justify-center mb-10 border border-[#1E2D44]">
            <span className="text-6xl opacity-40">📝</span>
          </div>

          <article className="space-y-5">
            {content.map((paragraph, i) => (
              <p key={i} className="text-sm text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </article>

          {/* CTA in article */}
          <div className="mt-10 bg-[#0E1829] border border-blue-800/40 rounded-xl p-6 text-center">
            <p className="text-sm font-semibold text-white mb-2">
              Butuh bantuan tingkatkan performa sosial media Anda?
            </p>
            <p className="text-xs text-slate-400 mb-4">
              Konsultasikan kebutuhan buzzer Anda dengan tim profesional BuzzerID.
            </p>
            <Link
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              💬 Konsultasi Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      <section className="py-12 bg-[#0E1829]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-white mb-6">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group bg-[#131D2E] border border-[#1E2D44] hover:border-blue-800/60 rounded-xl p-5 transition-all"
              >
                <span className="text-xs bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded-full inline-block mb-3">{p.category}</span>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-1">{p.title}</h3>
                <p className="text-xs text-slate-500">{p.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
