import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden bg-brand-bg">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-brand-primary/5 rounded-bl-[100px]" />
      <div className="absolute top-1/4 left-10 -z-10 w-32 h-32 bg-brand-gold rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-10 right-1/4 -z-10 w-40 h-40 bg-brand-teal rounded-full blur-3xl opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles size={14} />
              <span>Unit Bimbingan dan Kaunseling</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-brand-navy leading-[0.95] mb-8 tracking-tighter">
              Sedia <span className="text-brand-primary">Mendengar,</span> <br />
              Sedia Membimbing.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-lg font-medium">
              Unit Bimbingan & Kaunseling SK Darau komited dalam membangunkan sahsiah, emosi dan potensi murid ke arah kecemerlangan holistik.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#appointments" className="btn-pill-primary text-sm uppercase tracking-wider flex items-center gap-3">
                Tempah Sesi Kaunseling
                <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-pill-secondary text-sm uppercase tracking-wider">
                E-Rujukan Guru
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative p-10"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold rounded-full -z-10 blur-xl opacity-30" />
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-[30px_30px_80px_rgba(0,0,0,0.06)] border-8 border-white">
              <img 
                src="https://picsum.photos/seed/school-counseling/800/800" 
                alt="UBK SK Darau" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Visual labels/badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <span className="font-bold tracking-tighter text-xl">100%</span>
              </div>
              <div>
                <p className="font-bold text-slate-900 leading-none">Prihatin</p>
                <p className="text-sm text-slate-500 font-medium whitespace-nowrap">Komitmen Penuh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
