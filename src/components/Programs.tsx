import { motion } from 'motion/react';

const activities = [
  {
    title: "Program Ziarah Cakna",
    category: "Komuniti",
    image: "https://picsum.photos/seed/ziarah/600/600"
  },
  {
    title: "Sambutan Hari Kanak-Kanak",
    category: "Program Sekolah",
    image: "https://picsum.photos/seed/children/600/600"
  },
  {
    title: "Minggu Minda Sihat",
    category: "Kesihatan",
    image: "https://picsum.photos/seed/health/600/600"
  },
  {
    title: "Kem Kepimpinan PRS",
    category: "Latihan",
    image: "https://picsum.photos/seed/leadership/600/600"
  },
  {
    title: "Ceramah Motivasi UPSR",
    category: "Akademik",
    image: "https://picsum.photos/seed/focus/600/600"
  },
  {
    title: "Inovasi UBK",
    category: "Pencapaian",
    image: "https://picsum.photos/seed/award/600/600"
  }
];

export default function Programs() {
  return (
    <section id="activities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Galeri Aktiviti & Program</h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">Sorotan aktiviti sepanjang tahun anjuran Unit Bimbingan dan Kaunseling SK Darau.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative overflow-hidden rounded-[40px] md:rounded-[60px] aspect-square cursor-pointer shadow-xl border-4 border-white"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8 md:p-10">
                <span className="text-brand-gold font-black text-[10px] uppercase tracking-[0.2em] mb-2">{item.category}</span>
                <h3 className="text-white font-bold text-xl md:text-2xl leading-[1.1] tracking-tight">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
