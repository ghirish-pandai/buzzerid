export type ServiceEntry = {
  platform: string;
  platformName: string;
  platformEmoji: string;
  slug: string;
  serviceName: string;
  metric: string;
  targetKeyword: string;
  title: string;
  metaDescription: string;
};

const platforms: { slug: string; name: string; emoji: string }[] = [
  { slug: 'tiktok', name: 'TikTok', emoji: '🎵' },
  { slug: 'instagram', name: 'Instagram', emoji: '📸' },
  { slug: 'twitter', name: 'Twitter/X', emoji: '🐦' },
  { slug: 'youtube', name: 'YouTube', emoji: '▶️' },
  { slug: 'facebook', name: 'Facebook', emoji: '👍' },
  { slug: 'marketplace', name: 'Marketplace', emoji: '🛒' },
  { slug: 'threads', name: 'Threads', emoji: '🧵' },
];

type RawService = {
  slug: string;
  name: string;
  metric: string;
  platforms: string[];
};

const rawServices: RawService[] = [
  { slug: 'follower', name: 'Follower', metric: 'followers', platforms: ['tiktok', 'instagram', 'twitter', 'facebook', 'marketplace', 'threads'] },
  { slug: 'subscriber', name: 'Subscriber', metric: 'subscribers', platforms: ['youtube'] },
  { slug: 'like', name: 'Like', metric: 'likes', platforms: ['tiktok', 'instagram', 'twitter', 'youtube', 'facebook', 'threads'] },
  { slug: 'comment', name: 'Komentar', metric: 'komentar', platforms: ['tiktok', 'instagram', 'twitter', 'youtube', 'facebook', 'threads'] },
  { slug: 'view', name: 'View', metric: 'views', platforms: ['tiktok', 'instagram', 'twitter', 'youtube', 'facebook', 'threads'] },
  { slug: 'share', name: 'Share', metric: 'shares', platforms: ['tiktok', 'instagram', 'facebook', 'marketplace'] },
  { slug: 'retweet', name: 'Retweet', metric: 'retweets', platforms: ['twitter'] },
  { slug: 'reply', name: 'Reply', metric: 'replies', platforms: ['twitter'] },
  { slug: 'tweet', name: 'Tweet', metric: 'tweets', platforms: ['twitter'] },
  { slug: 'view-live', name: 'View Live Streaming', metric: 'penonton live', platforms: ['tiktok', 'instagram', 'twitter', 'youtube', 'facebook', 'threads'] },
  { slug: 'buzzer', name: 'Buzzer', metric: 'interaksi organik', platforms: ['tiktok', 'instagram', 'twitter', 'youtube', 'facebook', 'marketplace', 'threads'] },
  { slug: 'fyp', name: 'FYP (For You Page)', metric: 'jangkauan FYP', platforms: ['tiktok'] },
  { slug: 'posting', name: 'Posting Konten', metric: 'konten terposting', platforms: ['tiktok', 'facebook'] },
  { slug: 'share-story', name: 'Share Story', metric: 'story shares', platforms: ['instagram'] },
  { slug: 'post-feed', name: 'Post Feed', metric: 'postingan feed', platforms: ['instagram'] },
  { slug: 'polling', name: 'Voting / Polling', metric: 'suara polling', platforms: ['instagram', 'twitter', 'youtube', 'facebook', 'threads'] },
  { slug: 'trending-topik', name: 'Trending Topik', metric: 'posisi trending', platforms: ['twitter'] },
  { slug: 'jam-tayang', name: 'Jam Tayang', metric: 'jam tayang', platforms: ['youtube'] },
  { slug: 'monetisasi', name: 'Monetisasi Channel', metric: 'monetisasi', platforms: ['youtube'] },
  { slug: 'checkout', name: 'Checkout / Terjual', metric: 'jumlah terjual', platforms: ['marketplace'] },
  { slug: 'ulasan-rating', name: 'Ulasan & Rating', metric: 'ulasan bintang 5', platforms: ['marketplace'] },
  { slug: 'chat-respon', name: 'Chat Respon', metric: 'chat respon', platforms: ['marketplace'] },
  { slug: 'branding', name: 'Branding Toko', metric: 'branding', platforms: ['marketplace'] },
  { slug: 'like-produk', name: 'Favorite / Like Produk', metric: 'favorites', platforms: ['marketplace'] },
  { slug: 'repost', name: 'Repost', metric: 'reposts', platforms: ['threads'] },
  { slug: 'top-comment', name: 'Top Komentar', metric: 'top komentar', platforms: ['threads'] },
  { slug: 'storytelling', name: 'Storytelling', metric: 'engagement storytelling', platforms: ['threads'] },
];

export const allServices: ServiceEntry[] = rawServices.flatMap((svc) =>
  svc.platforms.map((pSlug) => {
    const p = platforms.find((x) => x.slug === pSlug)!;
    const keyword = `jasa ${svc.slug.replace('-', ' ')} ${p.name.toLowerCase()}`;
    return {
      platform: p.slug,
      platformName: p.name,
      platformEmoji: p.emoji,
      slug: svc.slug,
      serviceName: svc.name,
      metric: svc.metric,
      targetKeyword: keyword,
      title: `Jasa ${svc.name} ${p.name} Murah & Organik`,
      metaDescription: `Tingkatkan ${svc.metric} ${p.name} Anda dengan jasa ${svc.name.toLowerCase()} ${p.name} dari BuzzerID. Organik, terpercaya, bergaransi. Hubungi sekarang!`,
    };
  })
);

export function getService(platform: string, slug: string): ServiceEntry | undefined {
  return allServices.find((s) => s.platform === platform && s.slug === slug);
}

export function getServicesByPlatform(platform: string): ServiceEntry[] {
  return allServices.filter((s) => s.platform === platform);
}

export const mainServices = [
  {
    id: 'campaign',
    icon: '📣',
    title: 'Buzzer Campaign',
    description:
      'Buzzer kami siap membantu sukseskan campaign Anda. Interaksi yang tinggi pada campaign membantu perluas jangkauan sehingga campaign dapat dilihat banyak orang.',
    href: '/layanan/instagram/buzzer',
  },
  {
    id: 'trending',
    icon: '🔥',
    title: 'Buzzer Trending Topik',
    description:
      'Naiknya hashtag dan keyword di trending topik Twitter dengan bantuan buzzer membantu campaign bisnis viral bahkan dilirik media nasional.',
    href: '/layanan/twitter/trending-topik',
  },
  {
    id: 'fyp',
    icon: '🎵',
    title: 'Buzzer FYP',
    description:
      'Ribuan akun buzzer aktif dapat menghasilkan konten TikTok Anda mudah masuk FYP dan hasilkan interaksi yang tinggi.',
    href: '/layanan/tiktok/fyp',
  },
  {
    id: 'review',
    icon: '⭐',
    title: 'Buzzer Review & Rating',
    description:
      'Tempat bisnis Anda di Google Maps bisa menghasilkan ribuan review dan rating bintang 5 dengan buzzer kami. Jadikan tempat bisnis Anda populer.',
    href: '/layanan/marketplace/ulasan-rating',
  },
  {
    id: 'clipper',
    icon: '🎬',
    title: 'Buzzer Clipper',
    description:
      'Konten original Anda dapat menghasilkan ribuan clip dan posting yang dilakukan oleh buzzer clipper video dari kami. Semakin mudah orang menemukan konten Anda.',
    href: '/layanan/tiktok/posting',
  },
  {
    id: 'marketplace',
    icon: '🛒',
    title: 'Buzzer Terjual & Ulasan',
    description:
      'Ribuan buzzer kami mampu menghasilkan ribuan bahkan puluhan ribu jumlah terjual serta ulasan pada produk Anda di marketplace. Produk lebih menarik dilihat.',
    href: '/layanan/marketplace/checkout',
  },
];

export const blogPosts = [
  {
    slug: '7-cara-masuk-fyp-tiktok',
    title: '7 Cara Ampuh Masuk FYP TikTok di 2025',
    excerpt:
      'Pelajari strategi terbukti untuk membuat konten TikTok Anda masuk For You Page dan meraih jutaan views secara organik.',
    category: 'TikTok',
    date: '10 Nov 2025',
    readTime: '5 menit',
  },
  {
    slug: 'panduan-jasa-buzzer-bisnis-online',
    title: 'Panduan Lengkap Jasa Buzzer untuk Bisnis Online',
    excerpt:
      'Semua yang perlu Anda ketahui tentang jasa buzzer: cara kerja, manfaat, dan bagaimana memilih penyedia yang tepat untuk bisnis Anda.',
    category: 'Tips',
    date: '5 Nov 2025',
    readTime: '7 menit',
  },
  {
    slug: 'strategi-trending-topik-twitter',
    title: 'Strategi Trending Topik Twitter yang Efektif untuk Brand',
    excerpt:
      'Bagaimana cara membuat campaign bisnis Anda trending di Twitter dan mendapatkan exposure media nasional secara organik.',
    category: 'Twitter',
    date: '28 Okt 2025',
    readTime: '6 menit',
  },
  {
    slug: 'boost-rating-google-maps',
    title: 'Cara Boost Rating Google Maps Bisnis Anda ke Bintang 5',
    excerpt:
      'Strategi meningkatkan rating dan ulasan Google Maps agar bisnis Anda tampil lebih menarik dan dipercaya calon pelanggan.',
    category: 'Google Maps',
    date: '20 Okt 2025',
    readTime: '5 menit',
  },
  {
    slug: 'jasa-buzzer-marketplace-shopee-tokopedia',
    title: 'Tingkatkan Penjualan Shopee & Tokopedia dengan Jasa Buzzer',
    excerpt:
      'Cara efektif menggunakan jasa buzzer marketplace untuk meningkatkan jumlah terjual, ulasan positif, dan peringkat produk Anda.',
    category: 'Marketplace',
    date: '15 Okt 2025',
    readTime: '6 menit',
  },
];
