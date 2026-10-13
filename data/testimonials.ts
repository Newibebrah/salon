export type Testimonial = {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  service: string;
  rating: number;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "salsabila",
    name: "Salsabila Putri",
    initials: "SP",
    avatarBg: "#FCE7F3",
    service: "Hair Coloring",
    rating: 5,
    quote:
      "Warnanya persis seperti referensi yang saya bawa! Stylist-nya sabar banget nyamain, dan rambut tetap lembut walau bleaching. Pasti balik lagi ke Venia ✨",
  },
  {
    id: "amanda",
    name: "Amanda Kristi",
    initials: "AK",
    avatarBg: "#FDF2F8",
    service: "Smoothing",
    rating: 5,
    quote:
      "Awalnya ragu karena rambut saya tipis, ternyata hasil smoothing-nya natural banget, nggak kaku. Suasana salonnya juga homey dan wangi.",
  },
  {
    id: "nadia",
    name: "Nadia Rahman",
    initials: "NR",
    avatarBg: "#FBE4EF",
    service: "Beauty & Makeup",
    rating: 5,
    quote:
      "Makeup wisuda aku flawless dari pagi sampai malam, nggak cakep-cakep. Fotonya bagus semua. Terima kasih tim Hair La Venia Beauty!",
  },
  {
    id: "fitri",
    name: "Fitri Ayu Lestari",
    initials: "FA",
    avatarBg: "#FCE7F3",
    service: "Hair Spa",
    rating: 5,
    quote:
      "Hair spa-nya juara. Pijat kepalanya bikin ngantuk, dan kulit kepala saya yang biasanya kering jadi jauh lebih sehat. Puas banget!",
  },
  {
    id: "clarissa",
    name: "Clarissa Wijaya",
    initials: "CW",
    avatarBg: "#FDF2F8",
    service: "Hair Cut",
    rating: 5,
    quote:
      "Stylist-nya paham banget bentuk wajah saya. Kasih rekomendasi dulu sebelum gunting — hasilnya rapi dan gampang diatur sendiri di rumah.",
  },
  {
    id: "dinda",
    name: "Dinda Maharani",
    initials: "DM",
    avatarBg: "#FBE4EF",
    service: "Hair Extension",
    rating: 5,
    quote:
      "Extension-nya ringan dan natural, nggak ketahuan palsu. Harganya transparan tanpa biaya siluman. Recommended banget, deh!",
  },
];
