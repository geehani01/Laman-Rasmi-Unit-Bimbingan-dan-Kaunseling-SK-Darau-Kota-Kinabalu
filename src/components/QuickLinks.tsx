import { motion } from 'motion/react';
import { GraduationCap, Users, UserRound, ArrowUpRight } from 'lucide-react';

const links = [
  {
    title: "Portal Murid",
    description: "Tips belajar, kuiz kerjaya & luahan perasaan rahsia.",
    icon: GraduationCap,
    color: "text-brand-primary",
    borderColor: "border-brand-primary",
    link: "#"
  },
  {
    title: "Sudut Ibu Bapa",
    description: "Panduan keibubapaan & borang kebenaran sesi.",
    icon: Users,
    color: "text-brand-gold-dark",
    borderColor: "border-brand-gold",
    link: "#"
  },
  {
    title: "Program Terkini",
    description: "Minggu Minda Sihat & Ujian Psikometrik Tahun 6.",
    icon: UserRound,
    color: "text-brand-teal",
    borderColor: "border-brand-teal",
    link: "#"
  }
];

export default function QuickLinks() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="artistic-card">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-8 text-center">Akses Pantas</h2>
          
          <div className="grid gap-5">
            {links.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className={`artistic-item border-l-4 ${item.borderColor}`}
              >
                <div className={`p-3 rounded-xl bg-white shadow-sm ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className={`text-lg font-bold ${item.color}`}>{item.title}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
