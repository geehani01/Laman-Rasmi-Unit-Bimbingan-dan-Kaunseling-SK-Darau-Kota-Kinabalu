import { motion } from 'motion/react';
import { MessageCircle, Rocket, ShieldCheck, BarChart3, Users2 } from 'lucide-react';

const services = [
  {
    title: "Kaunseling Individu & Kelompok",
    desc: "Sesi bimbingan peribadi atau berkumpulan yang selamat dan berahsia.",
    icon: MessageCircle,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10"
  },
  {
    title: "Bimbingan Kerjaya",
    desc: "Eksplorasi cita-cita dan minat murid melalui bimbingan pakar.",
    icon: Rocket,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10"
  },
  {
    title: "Pembangunan Sahsiah & Disiplin",
    desc: "Program motivasi dan pembentukan jati diri murid yang cemerlang.",
    icon: ShieldCheck,
    color: "text-brand-gold-dark",
    bg: "bg-brand-gold/10"
  },
  {
    title: "Pentaksiran Psikometrik",
    desc: "Ujian untuk mengenal pasti personaliti, minat dan potensi diri murid.",
    icon: BarChart3,
    color: "text-brand-primary",
    bg: "bg-brand-primary/10"
  },
  {
    title: "Pembimbing Rakan Sebaya (PRS)",
    desc: "Latihan dan aktiviti untuk ahli kelab PRS membantu rakan-rakan.",
    icon: Users2,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Perkhidmatan Kami</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">Kami komited menyediakan pelbagai perkhidmatan bimbingan untuk memastikan kesejahteraan murid diutamakan.</p>
          </div>
          <a href="#appointments" className="text-brand-primary font-bold flex items-center gap-2 hover:underline uppercase tracking-widest text-xs">
            Lihat semua perkhidmatan &rarr;
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="artistic-card transform transition-transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
          {/* Appointment Placeholder Card */}
          <div className="bg-brand-primary p-10 rounded-[32px] flex flex-col justify-between text-white shadow-xl shadow-brand-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-8 -mt-8" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Perlukan bantuan segera?</h3>
              <p className="font-medium text-blue-50 opacity-90 leading-relaxed text-sm">
                Jangan ragu untuk menghubungi kami jika anda memerlukan bimbingan kecemasan atau sesi segera.
              </p>
            </div>
            <a href="#appointments" className="mt-8 bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-center hover:bg-blue-50 transition-colors uppercase tracking-widest text-xs relative z-10 shadow-md">
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
