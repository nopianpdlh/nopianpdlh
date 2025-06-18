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
  {
    title: "Blog Platform Pribadi",
    description:
      "Platform blog yang dioptimalkan untuk SEO, dibuat dengan Next.js (SSG) dan Markdown untuk konten.",
    image: "https://via.placeholder.com/500x300.png?text=Proyek+Blog",
    tags: ["Next.js", "TypeScript", "Markdown"],
    githubLink: "https://github.com",
    liveLink: "https://google.com",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Proyek Unggulan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-700 text-sm px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FaGithub size={24} /> GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <FaExternalLinkAlt size={20} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
