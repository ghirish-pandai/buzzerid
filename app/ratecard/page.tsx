'use client';

import Link from 'next/link';
import { useState } from 'react';
import { whatsappLink } from '@/lib/config';

const platforms = [
  { id: 'tiktok', label: 'TikTok', emoji: '🎵' },
  { id: 'instagram', label: 'Instagram', emoji: '📸' },
  { id: 'twitter', label: 'Twitter / X', emoji: '🐦' },
  { id: 'youtube', label: 'YouTube', emoji: '▶️' },
  { id: 'facebook', label: 'Facebook', emoji: '👍' },
  { id: 'marketplace', label: 'Marketplace', emoji: '🛒' },
  { id: 'googlemaps', label: 'Google Maps', emoji: '🗺️' },
];

type Row = { layanan: string; paket: string; harga: string; note?: string };

const rateData: Record<string, Row[]> = {
  tiktok: [
    { layanan: 'Follower', paket: '100 akun', harga: 'Rp 15.000' },
    { layanan: 'Follower', paket: '500 akun', harga: 'Rp 65.000' },
    { layanan: 'Follower', paket: '1.000 akun', harga: 'Rp 120.000' },
    { layanan: 'Follower', paket: '5.000 akun', harga: 'Rp 550.000' },
    { layanan: 'Like', paket: '100 like', harga: 'Rp 5.000' },
    { layanan: 'Like', paket: '500 like', harga: 'Rp 20.000' },
    { layanan: 'Like', paket: '1.000 like', harga: 'Rp 35.000' },
    { layanan: 'Like', paket: '5.000 like', harga: 'Rp 150.000' },
    { layanan: 'Komentar', paket: '10 komentar', harga: 'Rp 25.000', note: 'Teks custom' },
    { layanan: 'Komentar', paket: '50 komentar', harga: 'Rp 100.000', note: 'Teks custom' },
    { layanan: 'Komentar', paket: '100 komentar', harga: 'Rp 180.000', note: 'Teks custom' },
    { layanan: 'View Video', paket: '1.000 view', harga: 'Rp 5.000' },
    { layanan: 'View Video', paket: '5.000 view', harga: 'Rp 20.000' },
    { layanan: 'View Video', paket: '10.000 view', harga: 'Rp 35.000' },
    { layanan: 'View Video', paket: '50.000 view', harga: 'Rp 150.000' },
    { layanan: 'View Live', paket: '100 viewers / 1 jam', harga: 'Rp 50.000' },
    { layanan: 'View Live', paket: '500 viewers / 1 jam', harga: 'Rp 200.000' },
    { layanan: 'View Live', paket: '1.000 viewers / 1 jam', harga: 'Rp 350.000' },
    { layanan: 'FYP Boost', paket: 'Paket Basic (1 konten)', harga: 'Rp 150.000' },
    { layanan: 'FYP Boost', paket: 'Paket Pro (1 konten)', harga: 'Rp 300.000' },
    { layanan: 'FYP Boost', paket: 'Paket Premium (1 konten)', harga: 'Rp 500.000' },
    { layanan: 'Buzzer Campaign', paket: '10 akun buzzer', harga: 'Rp 150.000' },
    { layanan: 'Buzzer Campaign', paket: '50 akun buzzer', harga: 'Rp 650.000' },
    { layanan: 'Buzzer Campaign', paket: '100 akun buzzer', harga: 'Rp 1.200.000' },
    { layanan: 'Share / Repost', paket: '100 share', harga: 'Rp 25.000' },
    { layanan: 'Share / Repost', paket: '500 share', harga: 'Rp 100.000' },
  ],
  instagram: [
    { layanan: 'Follower', paket: '100 akun', harga: 'Rp 15.000' },
    { layanan: 'Follower', paket: '500 akun', harga: 'Rp 65.000' },
    { layanan: 'Follower', paket: '1.000 akun', harga: 'Rp 120.000' },
    { layanan: 'Follower', paket: '5.000 akun', harga: 'Rp 550.000' },
    { layanan: 'Like Post', paket: '100 like', harga: 'Rp 5.000' },
    { layanan: 'Like Post', paket: '500 like', harga: 'Rp 20.000' },
    { layanan: 'Like Post', paket: '1.000 like', harga: 'Rp 35.000' },
    { layanan: 'Komentar', paket: '10 komentar', harga: 'Rp 25.000', note: 'Teks custom' },
    { layanan: 'Komentar', paket: '50 komentar', harga: 'Rp 100.000', note: 'Teks custom' },
    { layanan: 'View Story', paket: '1.000 view', harga: 'Rp 10.000' },
    { layanan: 'View Story', paket: '5.000 view', harga: 'Rp 40.000' },
    { layanan: 'View Reels', paket: '1.000 view', harga: 'Rp 7.000' },
    { layanan: 'View Reels', paket: '5.000 view', harga: 'Rp 30.000' },
    { layanan: 'View Reels', paket: '10.000 view', harga: 'Rp 55.000' },
    { layanan: 'Post Feed', paket: '10 post', harga: 'Rp 200.000', note: 'Konten terjadwal' },
    { layanan: 'Post Feed', paket: '30 post', harga: 'Rp 550.000', note: 'Konten terjadwal' },
    { layanan: 'Polling', paket: '100 vote', harga: 'Rp 30.000' },
    { layanan: 'Polling', paket: '500 vote', harga: 'Rp 120.000' },
    { layanan: 'Buzzer Campaign', paket: '10 akun buzzer', harga: 'Rp 150.000' },
    { layanan: 'Buzzer Campaign', paket: '50 akun buzzer', harga: 'Rp 650.000' },
    { layanan: 'Buzzer Campaign', paket: '100 akun buzzer', harga: 'Rp 1.200.000' },
  ],
  twitter: [
    { layanan: 'Trending Topik', paket: 'Nasional (1 jam)', harga: 'Rp 500.000', note: 'Minimal 500 tweet' },
    { layanan: 'Trending Topik', paket: 'Nasional (3 jam)', harga: 'Rp 1.200.000' },
    { layanan: 'Trending Topik', paket: 'Nasional (6 jam)', harga: 'Rp 2.000.000' },
    { layanan: 'Trending Topik', paket: 'Nasional (12 jam)', harga: 'Rp 3.500.000' },
    { layanan: 'Follower', paket: '100 akun', harga: 'Rp 15.000' },
    { layanan: 'Follower', paket: '500 akun', harga: 'Rp 65.000' },
    { layanan: 'Follower', paket: '1.000 akun', harga: 'Rp 120.000' },
    { layanan: 'Like / Hati', paket: '100 like', harga: 'Rp 5.000' },
    { layanan: 'Like / Hati', paket: '500 like', harga: 'Rp 20.000' },
    { layanan: 'Like / Hati', paket: '1.000 like', harga: 'Rp 35.000' },
    { layanan: 'Retweet', paket: '100 RT', harga: 'Rp 10.000' },
    { layanan: 'Retweet', paket: '500 RT', harga: 'Rp 40.000' },
    { layanan: 'Retweet', paket: '1.000 RT', harga: 'Rp 75.000' },
    { layanan: 'Reply / Komentar', paket: '10 reply', harga: 'Rp 30.000', note: 'Teks custom' },
    { layanan: 'Reply / Komentar', paket: '50 reply', harga: 'Rp 120.000', note: 'Teks custom' },
    { layanan: 'Buzzer Campaign', paket: '10 akun buzzer', harga: 'Rp 150.000' },
    { layanan: 'Buzzer Campaign', paket: '50 akun buzzer', harga: 'Rp 650.000' },
    { layanan: 'Buzzer Campaign', paket: '100 akun buzzer', harga: 'Rp 1.200.000' },
  ],
  youtube: [
    { layanan: 'Subscriber', paket: '100 sub', harga: 'Rp 25.000' },
    { layanan: 'Subscriber', paket: '500 sub', harga: 'Rp 100.000' },
    { layanan: 'Subscriber', paket: '1.000 sub', harga: 'Rp 180.000' },
    { layanan: 'Like Video', paket: '100 like', harga: 'Rp 10.000' },
    { layanan: 'Like Video', paket: '500 like', harga: 'Rp 40.000' },
    { layanan: 'Like Video', paket: '1.000 like', harga: 'Rp 70.000' },
    { layanan: 'View Video', paket: '1.000 view', harga: 'Rp 25.000' },
    { layanan: 'View Video', paket: '5.000 view', harga: 'Rp 100.000' },
    { layanan: 'View Video', paket: '10.000 view', harga: 'Rp 180.000' },
    { layanan: 'Komentar', paket: '10 komentar', harga: 'Rp 30.000', note: 'Teks custom' },
    { layanan: 'Komentar', paket: '50 komentar', harga: 'Rp 120.000', note: 'Teks custom' },
    { layanan: 'Jam Tayang', paket: '500 jam tayang', harga: 'Rp 300.000' },
    { layanan: 'Jam Tayang', paket: '1.000 jam tayang', harga: 'Rp 550.000' },
    { layanan: 'Jam Tayang', paket: '4.000 jam tayang', harga: 'Rp 2.000.000', note: 'Minimal monetisasi' },
    { layanan: 'Buzzer Campaign', paket: '10 akun buzzer', harga: 'Rp 150.000' },
    { layanan: 'Buzzer Campaign', paket: '50 akun buzzer', harga: 'Rp 650.000' },
  ],
  facebook: [
    { layanan: 'Like Page / Follower', paket: '100 akun', harga: 'Rp 15.000' },
    { layanan: 'Like Page / Follower', paket: '500 akun', harga: 'Rp 60.000' },
    { layanan: 'Like Page / Follower', paket: '1.000 akun', harga: 'Rp 110.000' },
    { layanan: 'Like Post', paket: '100 like', harga: 'Rp 5.000' },
    { layanan: 'Like Post', paket: '500 like', harga: 'Rp 20.000' },
    { layanan: 'Like Post', paket: '1.000 like', harga: 'Rp 35.000' },
    { layanan: 'Komentar', paket: '10 komentar', harga: 'Rp 25.000', note: 'Teks custom' },
    { layanan: 'Komentar', paket: '50 komentar', harga: 'Rp 100.000', note: 'Teks custom' },
    { layanan: 'View Video', paket: '1.000 view', harga: 'Rp 7.000' },
    { layanan: 'View Video', paket: '5.000 view', harga: 'Rp 30.000' },
    { layanan: 'View Live', paket: '100 viewers / 1 jam', harga: 'Rp 50.000' },
    { layanan: 'View Live', paket: '500 viewers / 1 jam', harga: 'Rp 200.000' },
    { layanan: 'Share Post', paket: '100 share', harga: 'Rp 20.000' },
    { layanan: 'Share Post', paket: '500 share', harga: 'Rp 80.000' },
    { layanan: 'Buzzer Campaign', paket: '10 akun buzzer', harga: 'Rp 150.000' },
    { layanan: 'Buzzer Campaign', paket: '50 akun buzzer', harga: 'Rp 600.000' },
  ],
  marketplace: [
    { layanan: 'Checkout / Terjual', paket: '10 pcs', harga: 'Rp 50.000', note: 'Shopee / Tokopedia / Lazada' },
    { layanan: 'Checkout / Terjual', paket: '50 pcs', harga: 'Rp 200.000', note: 'Shopee / Tokopedia / Lazada' },
    { layanan: 'Checkout / Terjual', paket: '100 pcs', harga: 'Rp 350.000', note: 'Shopee / Tokopedia / Lazada' },
    { layanan: 'Checkout / Terjual', paket: '500 pcs', harga: 'Rp 1.500.000', note: 'Shopee / Tokopedia / Lazada' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '5 ulasan', harga: 'Rp 50.000', note: 'Teks custom' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '10 ulasan', harga: 'Rp 90.000', note: 'Teks custom' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '25 ulasan', harga: 'Rp 200.000', note: 'Teks custom' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '50 ulasan', harga: 'Rp 375.000', note: 'Teks custom' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '100 ulasan', harga: 'Rp 700.000', note: 'Teks custom' },
    { layanan: 'Follower Toko', paket: '100 follower', harga: 'Rp 20.000' },
    { layanan: 'Follower Toko', paket: '500 follower', harga: 'Rp 80.000' },
    { layanan: 'Follower Toko', paket: '1.000 follower', harga: 'Rp 150.000' },
    { layanan: 'Like / Favorite Produk', paket: '100 like', harga: 'Rp 10.000' },
    { layanan: 'Like / Favorite Produk', paket: '500 like', harga: 'Rp 40.000' },
    { layanan: 'Like / Favorite Produk', paket: '1.000 like', harga: 'Rp 70.000' },
    { layanan: 'Buzzer Toko', paket: '10 akun buzzer', harga: 'Rp 150.000' },
    { layanan: 'Buzzer Toko', paket: '50 akun buzzer', harga: 'Rp 650.000' },
  ],
  googlemaps: [
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '5 ulasan', harga: 'Rp 75.000', note: 'Akun real aktif' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '10 ulasan', harga: 'Rp 130.000', note: 'Akun real aktif' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '25 ulasan', harga: 'Rp 300.000', note: 'Akun real aktif' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '50 ulasan', harga: 'Rp 550.000', note: 'Akun real aktif' },
    { layanan: 'Ulasan & Rating ⭐⭐⭐⭐⭐', paket: '100 ulasan', harga: 'Rp 1.000.000', note: 'Akun real aktif' },
    { layanan: 'Rating Saja (tanpa teks)', paket: '10 rating', harga: 'Rp 60.000' },
    { layanan: 'Rating Saja (tanpa teks)', paket: '25 rating', harga: 'Rp 130.000' },
    { layanan: 'Rating Saja (tanpa teks)', paket: '50 rating', harga: 'Rp 240.000' },
  ],
};

function groupByService(rows: Row[]) {
  const map = new Map<string, Row[]>();
  for (const r of rows) {
    if (!map.has(r.layanan)) map.set(r.layanan, []);
    map.get(r.layanan)!.push(r);
  }
  return map;
}

export default function RateCardPage() {
  const [active, setActive] = useState('tiktok');
  const rows = rateData[active] ?? [];
  const grouped = groupByService(rows);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#130D22] to-[#0D0719] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-violet-400 bg-violet-900/30 px-3 py-1 rounded-full mb-4">
            Daftar Harga Resmi
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Rate Card <span className="text-violet-400">BuzzerID</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8">
            Harga transparan, tidak ada biaya tersembunyi. Semua layanan tersedia untuk berbagai
            platform dengan paket fleksibel sesuai kebutuhan dan budget Anda.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-green-500 rounded-full inline-block" /> Harga dalam Rupiah (IDR)</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-violet-500 rounded-full inline-block" /> Real human, bukan bot</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-yellow-500 rounded-full inline-block" /> Garansi pengerjaan</span>
          </div>
        </div>
      </section>

      {/* Platform tabs */}
      <section className="bg-[#0D0719] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab nav */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {platforms.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active === p.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
                    : 'bg-[#130D22] text-slate-400 hover:text-white hover:bg-[#1A1030] border border-[#2D1F4E]'
                }`}
              >
                <span>{p.emoji}</span> {p.label}
              </button>
            ))}
          </div>

          {/* Table */}
          <div className="bg-[#130D22] border border-[#2D1F4E] rounded-2xl overflow-hidden">
            <div className="px-6 py-4 border-b border-[#2D1F4E] flex items-center justify-between">
              <h2 className="text-base font-bold text-white">
                {platforms.find((p) => p.id === active)?.emoji}{' '}
                Harga Layanan {platforms.find((p) => p.id === active)?.label}
              </h2>
              <Link
                href={whatsappLink(`Halo BuzzerID, saya ingin order layanan ${platforms.find((p) => p.id === active)?.label}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-lg transition-colors font-medium"
              >
                💬 Order Sekarang
              </Link>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1A1030]">
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/3">Layanan</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider w-1/3">Paket</th>
                    <th className="text-right px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Harga</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Keterangan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D1F4E]">
                  {Array.from(grouped.entries()).map(([service, items]) =>
                    items.map((row, i) => (
                      <tr key={`${service}-${i}`} className="hover:bg-[#1A1030]/60 transition-colors">
                        <td className="px-6 py-3 text-white font-medium">
                          {i === 0 ? row.layanan : <span className="text-slate-600">↳</span>}
                        </td>
                        <td className="px-6 py-3 text-slate-300">{row.paket}</td>
                        <td className="px-6 py-3 text-right">
                          <span className="text-green-400 font-semibold">{row.harga}</span>
                        </td>
                        <td className="px-6 py-3 text-slate-500 text-xs">{row.note ?? '—'}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden divide-y divide-[#2D1F4E]">
              {Array.from(grouped.entries()).map(([service, items]) => (
                <div key={service} className="px-4 py-4">
                  <p className="text-xs font-semibold text-violet-400 uppercase tracking-wider mb-2">{service}</p>
                  <div className="space-y-2">
                    {items.map((row, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-xs text-slate-300">{row.paket}</span>
                        <span className="text-sm font-semibold text-green-400">{row.harga}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-[#2D1F4E] bg-[#0C0A1E]">
              <p className="text-xs text-slate-500">
                * Harga dapat berubah sewaktu-waktu. Untuk volume besar atau paket custom, hubungi tim kami.
                Order minimal Rp 50.000. Pembayaran via transfer bank atau e-wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-14 bg-[#130D22]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Ketentuan & Info Pemesanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: '💳', title: 'Metode Pembayaran', desc: 'BCA, Mandiri, BNI, BRI, GoPay, OVO, Dana, ShopeePay. Invoice diterbitkan otomatis setelah konfirmasi order.' },
              { icon: '⚡', title: 'Waktu Pengerjaan', desc: 'Proses dimulai 1×24 jam setelah pembayaran dikonfirmasi. Progress diupdate melalui WhatsApp.' },
              { icon: '🛡️', title: 'Garansi', desc: 'Garansi saldo kembali jika hasil tidak sesuai briefing. Termasuk garansi drop dalam 7 hari setelah selesai.' },
            ].map((item) => (
              <div key={item.title} className="bg-[#1A1030] border border-[#2D1F4E] rounded-xl p-5">
                <span className="text-3xl block mb-3">{item.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-violet-900/30 to-green-900/20 border-t border-[#2D1F4E]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-3">Siap Order atau Ada yang Ingin Ditanyakan?</h2>
          <p className="text-sm text-slate-400 mb-6">
            Konsultasi gratis, respon cepat. Tim kami akan bantu pilih paket yang paling sesuai.
          </p>
          <Link
            href={whatsappLink('Halo BuzzerID, saya ingin order layanan buzzer')}
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