export const siteConfig = {
  name: 'BuzzerID',
  tagline: 'Jasa Buzzer Indonesia Terpercaya',
  description:
    'Platform jasa buzzer Indonesia terpercaya dengan +20.000 member aktif. Tingkatkan engagement, followers, dan branding bisnis Anda di semua platform sosial media dan marketplace.',
  url: 'https://buzzerid.vercel.app',
  whatsapp: '6583385876',
  whatsappDisplay: '+65-8338-5876',
  whatsappMessage: 'Halo BuzzerID, saya ingin konsultasi layanan buzzer',
  rateCardUrl:
    'https://docs.google.com/spreadsheets/d/1NSrxN7PCFVOtSEprHj5cJMbXB1V0ml2_m-KnokVMJEg/edit#gid=0',
  stats: [
    { value: '+5.000', label: 'Transaksi buzzer & influencer' },
    { value: '5+', label: 'Tahun berpengalaman' },
    { value: '+20.000', label: 'SDM organik aktif' },
    { value: '+3.000', label: 'Client telah percaya' },
    { value: 'Garansi', label: 'Saldo jika tidak sesuai harapan' },
  ],
  paymentMethods: ['BCA', 'Mandiri', 'BRI', 'BNI', 'GoPay', 'OVO', 'DANA', 'ShopeePay', 'Qris'],
};

export function whatsappLink(message?: string) {
  const msg = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}
