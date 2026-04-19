import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickLinks from './components/QuickLinks';
import Counselors from './components/Counselors';
import Services from './components/Services';
import Programs from './components/Programs';
import Forms from './components/Forms';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickLinks />
        <Counselors />
        <Services />
        <Programs />
        <Forms />
      </main>
      <Footer />
    </div>
  );
}

