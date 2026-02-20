import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      <style>{`
        html { scroll-behavior: smooth; }
        ::selection { background-color: #e8f0fe; color: #1967d2; }
      `}</style>
      <ParticleBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
             <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
