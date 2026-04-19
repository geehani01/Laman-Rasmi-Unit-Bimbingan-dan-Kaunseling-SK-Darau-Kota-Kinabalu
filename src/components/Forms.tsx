import { motion } from 'motion/react';
import { Send, Heart, UserCircle, Ghost } from 'lucide-react';
import { useState } from 'react';

export default function Forms() {
  const [activeTab, setActiveTab] = useState<'appointment' | 'confession'>('appointment');

  return (
    <section id="appointments" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Hubungi Kaunselor</h2>
          <p className="text-lg text-slate-500 font-medium">Pilih jenis permohonan yang anda perlukan di bawah.</p>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white p-2 rounded-full shadow-sm border border-brand-navy/5 mb-10 max-w-md mx-auto">
          <button 
            onClick={() => setActiveTab('appointment')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold transition-all uppercase tracking-widest text-xs ${activeTab === 'appointment' ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Heart size={16} />
            <span>Temujanji</span>
          </button>
          <button 
            onClick={() => setActiveTab('confession')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold transition-all uppercase tracking-widest text-xs ${activeTab === 'confession' ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/20' : 'text-slate-500 hover:bg-slate-50'}`}
          >
            <Ghost size={16} />
            <span>Peti Luahan</span>
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="artistic-card"
        >
          {activeTab === 'appointment' ? (
            <div className="space-y-8">
              <div className="flex items-start gap-5 mb-8 bg-brand-bg p-6 rounded-3xl border border-brand-navy/5">
                <div className="bg-white p-3 rounded-2xl text-brand-primary shadow-sm border border-black/5">
                  <UserCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg">Borang Temujanji Peribadi</h3>
                  <p className="text-slate-500 font-medium text-sm">Sila isi maklumat di bawah, kami akan menghubungi anda dalam masa 24 jam.</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-brand-navy/60 ml-2 uppercase tracking-[0.2em]">Nama Penuh</label>
                  <input type="text" placeholder="Masukkan nama anda" className="w-full px-6 py-4 bg-brand-bg border-2 border-brand-navy/5 rounded-2xl focus:border-brand-primary focus:outline-none transition-all font-medium text-brand-navy" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-brand-navy/60 ml-2 uppercase tracking-[0.2em]">Kelas / Jawatan</label>
                  <input type="text" placeholder="Contoh: 6 Gemilang" className="w-full px-6 py-4 bg-brand-bg border-2 border-brand-navy/5 rounded-2xl focus:border-brand-primary focus:outline-none transition-all font-medium text-brand-navy" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-navy/60 ml-2 uppercase tracking-[0.2em]">Tujuan Perjumpaan</label>
                <div className="relative">
                  <select className="w-full px-6 py-4 bg-brand-bg border-2 border-brand-navy/5 rounded-2xl focus:border-brand-primary focus:outline-none transition-all font-medium appearance-none text-brand-navy">
                    <option>Masalah Peribadi</option>
                    <option>Bimbingan Kerjaya</option>
                    <option>Motivasi Belajar</option>
                    <option>Lain-lain</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-navy/60 ml-2 uppercase tracking-[0.2em]">Catatan Ringkas (Rahsia)</label>
                <textarea rows={4} placeholder="Apa yang anda ingin bincangkan?" className="w-full px-6 py-4 bg-brand-bg border-2 border-brand-navy/5 rounded-2xl focus:border-brand-primary focus:outline-none transition-all font-medium resize-none text-brand-navy"></textarea>
              </div>

              <button className="btn-pill-primary w-full py-5 text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3">
                <Send size={18} />
                <span>Hantar Permohonan</span>
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="flex items-start gap-5 mb-8 bg-brand-teal/5 p-6 rounded-3xl border border-brand-teal/10">
                <div className="bg-white p-3 rounded-2xl text-brand-teal shadow-sm border border-black/5">
                  <Ghost size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-brand-navy text-lg">Peti Luahan Rahsia</h3>
                  <p className="text-slate-500 font-medium text-sm">Luahkan apa sahaja di hati anda. Anda boleh memilih untuk kekal tanpa nama.</p>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-brand-navy/60 ml-2 uppercase tracking-[0.2em]">Luahan Hati Anda</label>
                <textarea rows={6} placeholder="Tuliskan di sini... Jangan takut, kami di sini untuk mendengar." className="w-full px-6 py-4 bg-brand-bg border-2 border-brand-teal/5 rounded-2xl focus:border-brand-teal focus:outline-none transition-all font-medium resize-none text-brand-navy"></textarea>
              </div>

              <div className="flex items-center gap-3 p-5 bg-brand-bg rounded-2xl border border-brand-navy/5">
                <input type="checkbox" className="w-5 h-5 rounded border-brand-navy/20 text-brand-primary focus:ring-brand-primary cursor-pointer" />
                <span className="text-xs font-black text-brand-navy/60 uppercase tracking-[0.15em]">Hantar Tanpa Nama (Anonymous)</span>
              </div>

              <button className="btn-pill-primary w-full py-5 text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 !bg-brand-teal !shadow-brand-teal/20">
                <Send size={18} />
                <span>Hantar Luahan</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
