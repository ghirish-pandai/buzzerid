export const siteConfig = {
  name: 'BuzzerID',
  tagline: 'Jasa Buzzer Indonesia Terpercaya',
  description:
    'Platform jasa buzzer Indonesia terpercaya dengan +20.000 member aktif. Tingkatkan engagement, followers, dan branding bisnis Anda di semua platform sosial media dan marketplace.',
  url: 'https://buzzerid.vercel.app',
  whatsapp: '6583385876',
  whatsappDisplay: '+65-8338-5876',
  whatsappMessage: 'Halo BuzzerID, saya ingin konsultasi layanan buzzer',
  stats: [
    { value: '+10.000', label: 'Transaksi buzzer & influencer' },
    { value: '4+', label: 'Tahun berpengalaman' },
    { value: '+3.000', label: 'Client telah percaya' },
    { value: 'Garansi', label: 'Saldo jika tidak sesuai harapan' },
  ],
  paymentMethods: ['BCA', 'Mandiri', 'BRI', 'BNI', 'GoPay', 'OVO', 'DANA', 'ShopeePay', 'Qris'],
};

export function whatsappLink(message?: string) {
  const msg = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}
