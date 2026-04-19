import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const counselors = [
  {
    name: "Cikgu Ahmed Ghazali",
    role: "Guru Bimbingan & Kaunseling (GBKSM)",
    image: "https://picsum.photos/seed/counselor1/400/400",
    bio: "Pakar dalam bimbingan kerjaya dan motivasi murid. Sedia membantu anda mencapai cita-cita."
  },
  {
    name: "Cikgu Nooraidy Mutang",
    role: "Guru Bimbingan & Kaunseling (GBKSM)",
    image: "https://picsum.photos/seed/counselor2/400/400",
    bio: "Berpengalaman dalam menangani isu sahsiah dan disiplin murid dengan pendekatan berhemah."
  }
];

export default function Counselors() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Kenali Kaunselor Anda</h2>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Unit Bimbingan dan Kaunseling SK Darau diketuai oleh guru-guru bimbingan yang berdedikasi dan prihatin terhadap setiap keperluan murid.
              </p>
            </div>

            <div className="space-y-6">
              {counselors.map((c, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-6 p-6 rounded-[32px] bg-brand-bg border border-brand-navy/5 items-center">
                  <img 
                    src={c.image} 
                    alt={c.name} 
                    className="w-24 h-24 rounded-2xl object-cover shadow-sm ring-4 ring-white" 
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-brand-navy text-xl">{c.name}</h4>
                    <p className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-2">{c.role}</p>
                    <p className="text-slate-500 font-medium text-sm leading-relaxed">{c.bio}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[40px] bg-brand-navy text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl -mr-10 -mt-10" />
              <Quote size={40} className="absolute top-4 right-8 text-brand-primary opacity-30" />
              <p className="text-xl font-bold italic mb-6 leading-relaxed relative z-10">
                "Kami di sini sebagai pendengar setia. Masalah anda adalah keutamaan kami. Jangan takut untuk meluahkan, kerana setiap masalah ada jalan penyelesaiannya."
              </p>
              <p className="font-bold uppercase tracking-widest text-xs text-brand-primary relative z-10">— Pesanan UBK SK Darau</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img src="https://picsum.photos/seed/school1/400/500" className="rounded-[50px] w-full h-[320px] object-cover shadow-2xl border-4 border-white" referrerPolicy="no-referrer" />
                <div className="bg-brand-gold rounded-[40px] p-8 text-brand-navy shadow-lg shadow-brand-gold/10">
                  <h3 className="text-3xl font-black mb-3">VISI</h3>
                  <p className="font-extrabold leading-tight tracking-tight uppercase text-sm">Perkhidmatan Bimbingan dan Kaunseling Murid Berkesan.</p>
                </div>
              </div>
              <div className="space-y-6 pt-16">
                <div className="bg-brand-primary rounded-[40px] p-8 text-white shadow-lg shadow-brand-primary/10">
                  <h3 className="text-3xl font-black mb-3">MISI</h3>
                  <p className="font-extrabold leading-tight tracking-tight uppercase text-sm">Menguruskan perkhidmatan bimbingan secara profesional.</p>
                </div>
                <img src="https://picsum.photos/seed/school2/400/500" className="rounded-[50px] w-full h-[320px] object-cover shadow-2xl border-4 border-white" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
