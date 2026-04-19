import { motion } from 'motion/react';
import { Menu, X, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow-md border border-brand-navy/5">
              <img 
                src="https://i.postimg.cc/hJb7YMjZ/LOGO-SEKOLAH-LATEST.png" 
                alt="Logo SK Darau" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/school-logo/100/100";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-brand-navy leading-none text-lg tracking-tight">SK DARAU</span>
              <span className="text-[10px] text-brand-navy/60 font-bold tracking-widest uppercase">KOTA KINABALU</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 font-bold text-brand-navy uppercase tracking-wider text-xs">
            <a href="#home" className="hover:text-brand-primary transition-colors">Utama</a>
            <a href="#about" className="hover:text-brand-primary transition-colors">Mengenai</a>
            <a href="#services" className="hover:text-brand-primary transition-colors">Perkhidmatan</a>
            <a href="#activities" className="hover:text-brand-primary transition-colors">Aktiviti</a>
            <a href="#appointments" className="bg-brand-primary text-white px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-all shadow-md active:scale-95">
              <Calendar size={16} />
              <span>Temujanji</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-200 py-6 px-4 space-y-4"
        >
          <a href="#home" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-800">Utama</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-800">Mengenai</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-800">Perkhidmatan</a>
          <a href="#activities" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-slate-800">Aktiviti</a>
          <a href="#appointments" onClick={() => setIsOpen(false)} className="block bg-blue-600 text-white text-center py-3 rounded-xl font-bold">
            Tempah Sesi Kaunseling
          </a>
        </motion.div>
      )}
    </nav>
  );
}
