import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { blogPosts } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Blog & Edukasi - Strategi Media Sosial Terbaru',
  description:
    'Pelajari panduan praktis, tren algoritma, dan strategi promosi digital terbaru dari tim ahli BuzzerID. Tips TikTok, Instagram, Twitter, dan marketing digital.',
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-[#0E1829] to-[#070C18] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider block mb-3">Blog & Edukasi</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Wawasan &amp; Strategi Media Sosial Terbaru
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Pelajari panduan praktis, tren algoritma, dan strategi promosi digital dari tim ahli BuzzerID.
          </p>
        </div>
      </section>

      <section className="py-14 bg-[#070C18]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-[#0E1829] border border-[#1E2D44] hover:border-blue-800/60 rounded-xl overflow-hidden transition-all"
              >
                <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 h-44 flex items-center justify-center">
                  <span className="text-5xl opacity-50">📝</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs bg-blue-900/40 text-blue-300 px-2 py-0.5 rounded-full">{post.category}</span>
                    <span className="text-xs text-slate-500">{post.date}</span>
                    <span className="text-xs text-slate-500">· {post.readTime}</span>
                  </div>
                  <h2 className="text-sm font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <span className="inline-block mt-3 text-xs text-blue-400 group-hover:text-blue-300">
                    Baca Selengkapnya →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
