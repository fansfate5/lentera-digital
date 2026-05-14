export type Reference = { title: string; url: string };

export type Article = {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedAt: string;
  abstract: string;
  sections: { heading: string; body: string[] | { type: "list"; items: string[] }[] }[];
  conclusion?: { heading: string; body: string[] };
  references: Reference[];
};

export const AUTHOR = {
  name: "Muhammad Izzul Fahmi Mustofa",
  nim: "25.12.3693",
  program: "Sistem Informasi — Universitas AMIKOM Yogyakarta",
};

export const articles: Article[] = [
  {
    slug: "efek-domino-konflik-global-pendidikan",
    title:
      "Efek Domino Konflik Global: Dari Runtuhnya Ruang Kelas hingga Krisis Sistemik Pendidikan",
    category: "Pendidikan & Geopolitik",
    readTime: "8 menit",
    publishedAt: "12 Mei 2026",
    abstract:
      "Artikel ini membahas dampak multidimensional perang terhadap sektor pendidikan, baik secara langsung di zona konflik maupun secara tidak langsung di seluruh dunia. Kerusakan fisik sekolah, trauma psikologis, pergeseran prioritas anggaran negara, krisis pangan, kesenjangan digital, hingga melambatnya riset akademik membentuk efek domino yang mengancam kualitas pendidikan global. Pembahasan diakhiri dengan urgensi strategi pendidikan adaptif dan berkelanjutan agar generasi mendatang tidak menjadi korban krisis sistemik akibat konflik geopolitik.",
    sections: [
      {
        heading: "1. Kehancuran Langsung di Zona Konflik",
        body: [
          "Sekolah dan universitas sering kali menjadi korban peperangan. Banyak bangunan pendidikan rusak akibat serangan bersenjata atau dialihfungsikan menjadi tempat perlindungan maupun pangkalan militer. Guru dan siswa juga terpaksa mengungsi sehingga proses belajar terhenti.",
          "Selain kerusakan fisik, perang menyebabkan trauma psikologis seperti PTSD (Post-Traumatic Stress Disorder) yang menurunkan kemampuan belajar dan mengajar. Dalam jangka panjang, kondisi ini dapat memunculkan lost generation, yaitu generasi yang kehilangan akses pendidikan formal selama bertahun-tahun.",
        ],
      },
      {
        heading: "2. Pergeseran Prioritas Anggaran",
        body: [
          "Konflik global menyebabkan kenaikan harga energi dan pangan dunia. Pemerintah di banyak negara harus mengalihkan anggaran untuk subsidi energi dan stabilitas ekonomi. Akibatnya, pembangunan sektor pendidikan seperti renovasi sekolah, bantuan pendidikan, serta peningkatan kesejahteraan guru menjadi terhambat.",
        ],
      },
      {
        heading: "3. Ancaman Ketahanan Pangan dan Kognitif Siswa",
        body: [
          "Gangguan rantai pasok global akibat perang memicu inflasi harga pangan dan pupuk. Kondisi ini menurunkan kualitas nutrisi anak-anak, terutama di negara berkembang. Kekurangan gizi kronis dapat menghambat perkembangan otak dan menurunkan kemampuan siswa dalam memahami materi pelajaran.",
        ],
      },
      {
        heading: "4. Krisis Kesehatan Mental dan Sosial",
        body: [
          "Tekanan ekonomi akibat perang berdampak langsung pada keluarga. Banyak orang tua mengalami stres karena biaya hidup meningkat, sehingga perhatian terhadap pendidikan anak menurun. Dalam beberapa kasus, anak terpaksa bekerja dan putus sekolah demi membantu ekonomi keluarga.",
        ],
      },
      {
        heading: "5. Kesenjangan Digital",
        body: [
          "Digitalisasi pendidikan semakin berkembang sebagai respons terhadap berbagai krisis. Namun, tidak semua wilayah memiliki akses internet dan perangkat digital yang memadai. Akibatnya, siswa di daerah terpencil tertinggal jauh dibandingkan siswa di kota besar.",
        ],
      },
      {
        heading: "6. Kurikulum dan Teknologi Masa Depan",
        body: [
          "Dunia modern membutuhkan keterampilan baru seperti Artificial Intelligence, Cyber Security, dan Data Analytics. Jika kurikulum pendidikan tidak mampu beradaptasi, lulusan akan kesulitan bersaing dalam pasar kerja global dan hanya menjadi pengguna teknologi, bukan inovator.",
        ],
      },
      {
        heading: "7. Krisis Mobilitas Akademik dan Riset",
        body: [
          "Ketidakstabilan ekonomi global menyebabkan biaya penelitian, impor alat laboratorium, dan akses jurnal internasional meningkat. Hal ini memperlambat perkembangan riset universitas dan menurunkan daya saing intelektual suatu bangsa.",
        ],
      },
    ],
    conclusion: {
      heading: "Kesimpulan",
      body: [
        "Perang memberikan dampak multidimensional terhadap pendidikan, baik secara langsung maupun tidak langsung. Pendidikan tidak lagi hanya bergantung pada ruang kelas dan kurikulum, tetapi juga pada ketahanan ekonomi, pangan, dan infrastruktur digital suatu negara. Oleh karena itu, diperlukan strategi pendidikan yang adaptif dan berkelanjutan agar generasi masa depan tidak menjadi korban dari krisis global.",
      ],
    },
    references: [
      { title: "UNESCO – Education in Emergencies", url: "https://www.unesco.org/en/emergencies/education" },
      { title: "UNESCO – What You Need to Know About Education in Emergencies", url: "https://www.unesco.org/en/emergencies/education/need-know" },
      { title: "Reuters – War Increasing Food Prices and Food Insecurity", url: "https://www.reuters.com/world/imf-world-bank-uns-world-food-program-say-war-is-increasing-food-insecurity-2026-04-08/" },
      { title: "Reuters – War, Drought, and Hunger Crisis", url: "https://www.reuters.com/world/americas/war-drought-aid-shortfall-fuel-hunger-2026-global-report-says-2026-04-24/" },
      { title: "The Guardian – Children Plunged Into Crisis by War", url: "https://www.theguardian.com/world/2026/apr/04/children-us-israel-iran-war-middle-east" },
      { title: "A Resilient ICT4D Approach to Education Response During Crisis", url: "https://arxiv.org/abs/2108.09742" },
      { title: "The Learning Crisis: Three Years After COVID-19", url: "https://arxiv.org/abs/2501.01260" },
    ],
  },
  {
    slug: "peluang-bisnis-layanan-ai-mahasiswa-si",
    title:
      "Peluang Bisnis Layanan Artificial Intelligence: Strategi Mahasiswa Sistem Informasi Memasuki Pasar Digital",
    category: "Bisnis Digital & AI",
    readTime: "7 menit",
    publishedAt: "13 Mei 2026",
    abstract:
      "Perkembangan kecerdasan buatan membuka peluang bisnis baru yang sangat luas, mulai dari layanan otomasi pemasaran hingga sistem rekomendasi cerdas untuk UMKM. Artikel ini menganalisis peluang bisnis layanan AI yang relevan bagi mahasiswa Sistem Informasi, dengan menyoroti model bisnis yang dapat dijalankan dari skala kecil, kompetensi teknis yang dibutuhkan, serta tantangan etis dan regulatif. Pembahasan ditujukan untuk memberikan kerangka praktis bagi mahasiswa dalam memanfaatkan latar belakang akademik mereka sebagai modal awal untuk berwirausaha di era digital.",
    sections: [
      {
        heading: "1. Latar Belakang: Mengapa AI dan Mengapa Sekarang",
        body: [
          "Adopsi AI di Indonesia tumbuh signifikan setelah ketersediaan model bahasa besar (Large Language Models) dan API publik dari penyedia seperti OpenAI, Google, dan Anthropic. UMKM, kreator konten, hingga perusahaan menengah membutuhkan integrator yang dapat menerjemahkan teknologi ini menjadi solusi bisnis yang nyata.",
          "Mahasiswa Sistem Informasi memiliki posisi strategis: mereka memahami proses bisnis sekaligus mampu menulis kode dan mengintegrasikan API. Kombinasi inilah yang dicari pasar saat ini.",
        ],
      },
      {
        heading: "2. Model Bisnis yang Layak Dijalankan",
        body: [
          { type: "list", items: [
            "AI Consulting Sprint — paket pendampingan singkat (2–4 minggu) untuk membantu UMKM mengidentifikasi proses yang dapat diotomasi.",
            "Custom Chatbot & Customer Service AI — pembuatan chatbot WhatsApp/Instagram berbasis LLM untuk merchant lokal.",
            "Content Automation — layanan pembuatan konten media sosial otomatis dengan workflow Make/n8n + OpenAI.",
            "AI Tutor Niche — platform belajar untuk topik spesifik (misal sertifikasi cloud, bahasa daerah) berbasis Retrieval-Augmented Generation.",
            "Data Insight as a Service — dashboard analitik mingguan untuk UMKM e-commerce.",
          ]},
        ],
      },
      {
        heading: "3. Kompetensi Inti yang Harus Dikuasai",
        body: [
          "Penguasaan dasar prompt engineering, API integration, manajemen vector database, dan keamanan data menjadi fondasi penting. Selain itu, kemampuan komunikasi bisnis untuk menjelaskan kapabilitas dan batasan AI kepada klien non-teknis sama pentingnya dengan kemampuan teknis itu sendiri.",
        ],
      },
      {
        heading: "4. Tantangan: Etika, Regulasi, dan Persaingan",
        body: [
          "UU Perlindungan Data Pribadi (PDP) menuntut pelaku usaha berbasis AI untuk transparan dalam pengolahan data. Risiko bias model, halusinasi, dan ketergantungan pada vendor pihak ketiga juga harus dimitigasi sejak awal melalui kebijakan privasi yang jelas serta arsitektur sistem yang akuntabel.",
        ],
      },
      {
        heading: "5. Strategi Masuk Pasar untuk Mahasiswa",
        body: [
          "Mulailah dari klien terdekat: bisnis keluarga, komunitas kampus, atau UMKM mitra inkubator AMIKOM. Bangun studi kasus yang terdokumentasi, gunakan portofolio digital, dan kembangkan jejaring melalui komunitas seperti Indonesia AI Society atau Hugging Face. Pendapatan awal sebaiknya diinvestasikan kembali ke peningkatan kompetensi dan tools.",
        ],
      },
    ],
    conclusion: {
      heading: "Kesimpulan",
      body: [
        "Layanan berbasis AI bukan lagi domain eksklusif perusahaan besar. Mahasiswa Sistem Informasi yang berani memulai dari skala kecil, fokus pada nilai bisnis nyata, dan menjaga prinsip etis dapat membangun usaha yang berkelanjutan dan relevan di tengah transformasi digital nasional.",
      ],
    },
    references: [
      { title: "McKinsey – The Economic Potential of Generative AI", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" },
      { title: "OpenAI Platform Documentation", url: "https://platform.openai.com/docs" },
      { title: "UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi", url: "https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022" },
      { title: "World Economic Forum – Future of Jobs Report 2025", url: "https://www.weforum.org/publications/the-future-of-jobs-report-2025/" },
      { title: "Stanford HAI – AI Index Report 2024", url: "https://aiindex.stanford.edu/report/" },
    ],
  },
  {
    slug: "peluang-pengembangan-aplikasi-era-digital",
    title:
      "Peluang Pengembangan Aplikasi di Era Digital: Strategi Wirausaha bagi Mahasiswa Sistem Informasi",
    category: "Bisnis Digital & Software",
    readTime: "6 menit",
    publishedAt: "14 Mei 2026",
    abstract:
      "Industri perangkat lunak di Indonesia terus berkembang seiring meningkatnya kebutuhan digitalisasi UMKM, layanan publik, dan ekonomi kreatif. Artikel ini membahas peluang bisnis di bidang pengembangan aplikasi mobile dan web, model monetisasi yang umum digunakan, serta strategi mahasiswa Sistem Informasi memanfaatkan keahlian teknis dan jejaring kampus untuk membangun produk digital yang berdaya saing. Pembahasan juga mencakup risiko teknis dan bisnis yang harus diperhatikan agar produk tidak hanya rilis, tetapi juga berkelanjutan.",
    sections: [
      {
        heading: "1. Lanskap Pasar Aplikasi di Indonesia",
        body: [
          "Pengguna internet Indonesia telah melampaui 220 juta jiwa, dengan adopsi smartphone yang dominan. Permintaan terhadap aplikasi POS, manajemen toko online, layanan kesehatan, edukasi, dan logistik mikro terus meningkat. Hal ini membuka ruang luas bagi developer independen untuk menyasar segmen yang belum digarap pemain besar.",
        ],
      },
      {
        heading: "2. Niche yang Menjanjikan",
        body: [
          { type: "list", items: [
            "SaaS untuk UMKM — aplikasi kasir, inventaris, dan laporan keuangan sederhana berbasis cloud.",
            "EdTech Vertikal — aplikasi belajar fokus pada bidang spesifik seperti coding, bahasa Jepang, atau persiapan sertifikasi profesi.",
            "Marketplace Komunitas — aplikasi penghubung produsen lokal dengan konsumen di kota tertentu.",
            "Internal Tools — pengembangan dashboard internal untuk perusahaan menengah dengan model project-based.",
            "Mobile Productivity — aplikasi catatan, pelacak kebiasaan, dan manajemen tugas dengan integrasi AI.",
          ]},
        ],
      },
      {
        heading: "3. Model Monetisasi",
        body: [
          "Pilihan monetisasi mencakup model freemium, langganan bulanan (subscription), iklan tertarget, in-app purchase, hingga lisensi white-label kepada perusahaan. Pemilihan model harus disesuaikan dengan kebiasaan pengguna target, bukan sekadar tren industri.",
        ],
      },
      {
        heading: "4. Stack Teknologi yang Efisien untuk Solo Developer",
        body: [
          "Penggunaan framework modern seperti React Native/Flutter untuk mobile, Next.js atau TanStack Start untuk web, serta backend-as-a-service seperti Supabase/Firebase memungkinkan satu orang membangun MVP dalam hitungan minggu. Otomasi melalui CI/CD (Vercel, GitHub Actions) memperpendek siklus rilis secara signifikan.",
        ],
      },
      {
        heading: "5. Risiko dan Cara Mengelolanya",
        body: [
          "Risiko utama meliputi kegagalan menemukan product-market fit, biaya infrastruktur yang membengkak, serta isu keamanan data. Validasi ide melalui wawancara pengguna, perencanaan biaya cloud yang konservatif, serta penerapan praktik DevSecOps sejak awal dapat mengurangi risiko tersebut.",
        ],
      },
      {
        heading: "6. Strategi Mahasiswa Sistem Informasi",
        body: [
          "Mahasiswa dapat mengoptimalkan tugas akhir, magang, dan kompetisi sebagai laboratorium produk. Dengan memanfaatkan inkubator kampus seperti yang tersedia di AMIKOM, mahasiswa dapat memvalidasi ide, mendapatkan mentorship, dan akses pendanaan awal untuk produk mereka.",
        ],
      },
    ],
    conclusion: {
      heading: "Kesimpulan",
      body: [
        "Pengembangan aplikasi tetap menjadi salah satu peluang bisnis paling realistis bagi mahasiswa Sistem Informasi. Modal utamanya bukan kapital besar, melainkan keterampilan teknis, pemahaman bisnis, dan kemampuan eksekusi yang konsisten. Dengan pendekatan yang tepat, sebuah aplikasi yang lahir dari kamar kost mahasiswa berpotensi tumbuh menjadi startup yang berdampak.",
      ],
    },
    references: [
      { title: "APJII – Survei Penetrasi Internet Indonesia 2024", url: "https://apjii.or.id/" },
      { title: "Statista – Mobile App Revenue Worldwide", url: "https://www.statista.com/statistics/269025/worldwide-mobile-app-revenue-forecast/" },
      { title: "Google – Android Developer Documentation", url: "https://developer.android.com/" },
      { title: "Vercel – Frontend Cloud Documentation", url: "https://vercel.com/docs" },
      { title: "Supabase – Backend as a Service", url: "https://supabase.com/docs" },
      { title: "Y Combinator – Startup Library", url: "https://www.ycombinator.com/library" },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
