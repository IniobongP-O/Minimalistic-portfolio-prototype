import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">About Me</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Passionate about creating digital experiences
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600 leading-relaxed"
          >
            <p>
              I am a full-stack developer with a keen eye for design and a love for clean code. 
              My journey started with a curiosity for how things work on the web, which quickly turned into a passion for building them myself.
            </p>
            <p>
              I specialize in React, TypeScript, and Node.js, creating seamless and performant applications. 
              Whether it's a complex dashboard or a creative landing page, I approach every project with the same level of dedication and attention to detail.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while brainstorming my next big idea.
            </p>
            
            <div className="pt-4">
               <a href="#contact" className="text-blue-600 font-semibold hover:text-blue-800 inline-flex items-center gap-2 group transition-colors">
                 Let's work together <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>
          </motion.div>
          
          <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.2}
            whileDrag={{ scale: 1.05, cursor: "grabbing" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm relative overflow-hidden cursor-grab active:cursor-grabbing"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-50"></div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 relative z-10">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div>
                <span className="block text-4xl font-bold text-blue-600">5+</span>
                <span className="text-gray-600 text-sm">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-purple-600">50+</span>
                <span className="text-gray-600 text-sm">Projects Completed</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-green-600">20+</span>
                <span className="text-gray-600 text-sm">Happy Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-red-500">100%</span>
                <span className="text-gray-600 text-sm">Commitment</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
