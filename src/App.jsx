import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Achievements />
        <Footer />
      </div>
    </div>
  );
}
