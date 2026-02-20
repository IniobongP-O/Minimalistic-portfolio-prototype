import { motion } from 'motion/react';
import { Code, Server, Wrench, Database, Layout, Smartphone } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vue.js", "Svelte"],
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6 text-green-500" />,
    items: ["Node.js", "Express", "Python", "Django", "GraphQL", "REST APIs", "Go"],
  },
  {
    category: "Database & Cloud",
    icon: <Database className="w-6 h-6 text-yellow-500" />,
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Google Cloud", "Supabase", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    icon: <Wrench className="w-6 h-6 text-red-500" />,
    items: ["Git", "Docker", "Kubernetes", "CI/CD", "Jest", "Webpack", "Vite"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-50/50 relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-purple-600 font-semibold tracking-wide uppercase text-sm">Expertise</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            My Technical Toolkit
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A diverse set of technologies I use to bring ideas to life. Always learning and adapting to new tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.2}
              whileDrag={{ scale: 1.05, cursor: "grabbing" }}
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-grab active:cursor-grabbing"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-50 rounded-xl">
                  {skillGroup.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-900">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-medium border border-gray-100 hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
