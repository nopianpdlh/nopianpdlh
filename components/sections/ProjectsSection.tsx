import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Data dummy untuk proyek
const projectsData = [
  {
    title: "Aplikasi E-commerce Modern",
    description:
      "Sebuah platform e-commerce dengan fitur lengkap, dibangun menggunakan Next.js, Stripe untuk pembayaran, dan Sanity sebagai CMS.",
    image: "https://via.placeholder.com/500x300.png?text=Proyek+E-commerce",
    tags: ["Next.js", "React", "Stripe", "Sanity"],
    githubLink: "https://github.com",
    liveLink: "https://google.com",
  },
  {
    title: "Sistem Manajemen Proyek",
    description:
      "Aplikasi untuk manajemen tugas dan kolaborasi tim, dengan fitur drag-and-drop board, otentikasi, dan notifikasi real-time.",
    image: "https://via.placeholder.com/500x300.png?text=Proyek+Manajemen",
    tags: ["React", "Firebase", "Tailwind CSS"],
    githubLink: "https://github.com",
    liveLink: "https://google.com",
  },
  // Tambahkan proyek lainnya jika perlu
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Project I've Created
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          // Container untuk efek perspektif 3D
          <div key={index} className="group perspective-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              // Efek 3D saat hover
              className="h-full bg-glass rounded-xl shadow-lg overflow-hidden flex flex-col border border-white/10
                         transition-all duration-500 group-hover:scale-105 group-hover:[transform:rotateX(10deg)_rotateY(-10deg)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover border-b border-white/10"
              />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-800/80 text-accent-blue text-xs font-semibold px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-pink transition-colors flex items-center gap-2"
                  >
                    <FaGithub size={24} /> GitHub
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-pink transition-colors flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={20} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
