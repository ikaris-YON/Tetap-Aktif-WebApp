export type PhysicalLimitation = 'nyeri_lutut' | 'nyeri_punggung' | 'tidak_ada';
export type MedicalCondition = 'hipertensi' | 'artritis' | 'osteoporosis' | 'tidak_ada';

export interface Exercise {
  id: string;
  name: string;
  description: string;
  steps: string[];
  videoUrl: string;
  sourceUrl: string;
  avoidForLimitations: PhysicalLimitation[];
  avoidForConditions: MedicalCondition[];
  defaultSets: number;
  defaultReps: number;
}

export const EXERCISES: Exercise[] = [
  {
    id: 'e1',
    name: 'Peregangan Leher & Bahu',
    description: 'Gerakan perlahan untuk melemaskan otot leher dan bahu, bisa dilakukan sambil duduk.',
    steps: [
      'Duduk dengan posisi tegak dan rileks, pandangan lurus ke depan.',
      'Perlahan miringkan kepala ke kanan mendekati bahu, rasakan regangan ringan di sisi kiri leher. Tahan 5-10 detik.',
      'Kembali ke tengah, lalu miringkan perlahan ke sebelah kiri. Tahan 5-10 detik.',
      'Angkat kedua bahu ke arah telinga, lalu putar perlahan ke belakang dan turunkan. Ulangi gerakan memutar bahu ini.'
    ],
    videoUrl: '/videos/neck_stretch.mp4',
    sourceUrl: 'https://musclewiki.com/stretches/male/neck',
    avoidForLimitations: [],
    avoidForConditions: [],
    defaultSets: 2,
    defaultReps: 10,
  },
  {
    id: 'e2',
    name: 'Jalan Santai di Tempat (Duduk)',
    description: 'Angkat lutut secara bergantian sambil duduk di kursi. Bagus untuk sirkulasi darah tanpa membebani lutut secara berlebihan.',
    steps: [
      'Duduk di bagian tengah kursi yang stabil (tanpa roda) dengan punggung tegak.',
      'Letakkan kedua kaki datar di lantai.',
      'Angkat lutut kanan perlahan sejauh yang Anda rasa nyaman, lalu turunkan menjejak lantai perlahan.',
      'Gantian angkat lutut kiri, layaknya gerakan berjalan santai.',
      'Atur agar napas tetap stabil selama bergerak.'
    ],
    videoUrl: '/videos/high_knees.mp4',
    sourceUrl: 'https://musclewiki.com/bodyweight/male/quads',
    avoidForLimitations: [], // Safe for most
    avoidForConditions: [],
    defaultSets: 3,
    defaultReps: 15,
  },
  {
    id: 'e3',
    name: 'Mengangkat Kaki (Duduk)',
    description: 'Luruskan satu kaki ke depan secara bergantian saat duduk. Menguatkan paha.',
    steps: [
      'Duduk bersandar tegak pada kursi, pastikan kedua kaki menapak kuat di lantai.',
      'Pegang tepi kursi dengan tangan Anda untuk keseimbangan.',
      'Angkat kaki kanan dari lantai secara perlahan hingga lutut hampir lurus.',
      'Tahan posisi lurus selama 2-3 detik.',
      'Tekuk lutut perlahan dan letakkan kaki kanan kembali di lantai, lalu berganti ke kaki kiri.'
    ],
    videoUrl: '/videos/leg_extensions.mp4',
    sourceUrl: 'https://musclewiki.com/bodyweight/male/quads',
    avoidForLimitations: [],
    avoidForConditions: [],
    defaultSets: 3,
    defaultReps: 12,
  },
  {
    id: 'e4',
    name: 'Berdiri dari Kursi',
    description: 'Bangkit berdiri dari kursi lalu duduk kembali perlahan. Gunakan pegangan jika perlu.',
    steps: [
      'Duduk di kursi berlengan yang kokoh, geser sedikit ke depan sehingga pinggul berada di pertengahan kursi.',
      'Buka kaki selebar bahu dan miringkan tubuh bagian atas sedikit ke depan.',
      'Gunakan otot paha (dan bantuan tangan di pegangan kursi atau lutut) untuk mengangkat tubuh berdiri secara perlahan.',
      'Berdiri tegak sebentar.',
      'Mundurkan pinggul dan turunkan tubuh perlahan-lahan ke kursi dengan kontrol, rasakan kursi di belakang kaki sebelum duduk kembali.'
    ],
    videoUrl: '/videos/Berdiri_dari_kursi.mp4',
    sourceUrl: 'https://musclewiki.com/bodyweight/male/quads',
    avoidForLimitations: ['nyeri_lutut', 'nyeri_punggung'], // Avoid if bad knees or back
    avoidForConditions: ['artritis'],
    defaultSets: 2,
    defaultReps: 8,
  },
  {
    id: 'e5',
    name: 'Peregangan Dada',
    description: 'Buka kedua lengan lebar-lebar untuk meregangkan dada dan memperbaiki postur.',
    steps: [
      'Posisi bisa duduk tegak atau berdiri dengan posisi stabil.',
      'Rentangkan kedua lengan ke samping sejajar dengan bahu, telapak tangan menghadap ke depan.',
      'Perlahan tarik lengan ke belakang, dan busungkan dada.',
      'Tahan posisi ini selama 10-15 detik sembari mengatur napas pelan.',
      'Kembalikan lengan menyilang di dada, dan rileks.'
    ],
    videoUrl: '/videos/Peregangan_dada.mp4',
    sourceUrl: 'https://musclewiki.com/stretches/male/chest',
    avoidForLimitations: [],
    avoidForConditions: [],
    defaultSets: 2,
    defaultReps: 10,
  },
  {
    id: 'e6',
    name: 'Putaran Pergelangan Kaki',
    description: 'Putar pergelangan kaki perlahan searah jarum jam dan sebaliknya.',
    steps: [
      'Duduk rileks dengan menyender di punggung kursi.',
      'Angkat sedikit salah satu kaki bagian bawah agar menggantung bebas (tidak menyentuh tanah).',
      'Putar pergelangan kaki secara melingkar besar, searah jarum jam perlahan-lahan.',
      'Ulangi putaran ke arah sebaliknya (berlawanan jarum jam).',
      'Turunkan kaki dan lakukan gerakan yang sama untuk kaki sebelahnya.'
    ],
    videoUrl: '/videos/Putaran_pergelangan_kaki.mp4',
    sourceUrl: 'https://musclewiki.com/stretches/male/calves',
    avoidForLimitations: [],
    avoidForConditions: [],
    defaultSets: 2,
    defaultReps: 10,
  },
  {
    id: 'e7',
    name: 'Peregangan Punggung Bawah (Duduk)',
    description: 'Duduk tegak, perlahan putar tubuh ke satu sisi sambil menghembuskan napas.',
    steps: [
      'Duduk menjejak kuat di tengah kursi (tanpa roda) dengan punggung lurus.',
      'Letakkan lengan kiri pada bagian luar paha/lutut kanan sebagai penyokong ringan.',
      'Putar tubuh bagian atas ke kanan sambil membuang napas perlahan, pandangan mengikuti arah putaran.',
      'Tahan regangan sekitar 5-10 detik. Jangan sampai memutar melebihi batas nyaman.',
      'Perlahan lepaskan putaran, kembali ke tengah wajah ke depan. Ulangi untuk sisi kiri.'
    ],
    videoUrl: '/videos/Peregangan_punggung_bawah.mp4',
    sourceUrl: 'https://musclewiki.com/stretches/male/lower-back',
    avoidForLimitations: ['nyeri_punggung'], // Avoid for acute back pain
    avoidForConditions: [],
    defaultSets: 2,
    defaultReps: 5,
  },
];

export function getRecommendedExercises(
  limitations: PhysicalLimitation[],
  conditions: MedicalCondition[]
): Exercise[] {
  return EXERCISES.filter(ex => {
    if (limitations.some(lim => ex.avoidForLimitations.includes(lim))) return false;
    if (conditions.some(cond => ex.avoidForConditions.includes(cond))) return false;
    return true;
  });
}
