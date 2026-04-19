import { Phone, Mail, MapPin, Facebook, Instagram, Music2, AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy pt-24 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand and Emergency */}
          <div className="col-span-full lg:col-span-1 space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                UBK
              </div>
              <span className="font-black text-white text-2xl tracking-tight">SK DARAU</span>
            </div>
            <p className="font-medium text-slate-400 leading-relaxed text-sm">
              Komitmen kami memacu kecemerlangan sahsiah dan kesejahteraan mental murid SK Darau.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] flex items-center gap-4 text-white">
              <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center text-brand-gold">
                <AlertCircle size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-1">TALIAN KASIH (24 JAM)</p>
                <p className="font-black text-2xl text-brand-gold leading-none tracking-tight">15999</p>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs opacity-60">Laman</h4>
            <ul className="space-y-4 font-bold text-sm">
              <li><a href="#home" className="hover:text-brand-primary transition-colors uppercase tracking-widest">Utama</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors uppercase tracking-widest">Mengenai</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors uppercase tracking-widest">Perkhidmatan</a></li>
              <li><a href="#activities" className="hover:text-brand-primary transition-colors uppercase tracking-widest">Galeri</a></li>
              <li><a href="#appointments" className="hover:text-brand-primary transition-colors uppercase tracking-widest">Temujanji</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs opacity-60">Info Lokasi</h4>
            <ul className="space-y-5 font-medium text-slate-400 text-sm">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-primary shrink-0" />
                <span className="leading-relaxed uppercase tracking-tight">Lorong Seri Maju, 88400 Kota Kinabalu, Sabah</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-primary shrink-0" />
                <span className="uppercase tracking-widest">+60 88-XXX XXX</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-brand-primary shrink-0" />
                <span className="tracking-widest">ubkskdarau@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 uppercase tracking-widest text-xs opacity-60">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-brand-primary transition-all text-white">
                <Music2 size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© 2026 UBK SK DARAU. ALL RIGHTS RESERVED.</p>
          <p>Membimbing Pemenang, Membentuk Masa Depan</p>
        </div>
      </div>
    </footer>
  );
}
