import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

const skillsData = [
  { name: "JavaScript", icon: <DiJavascript1 className="w-12 h-12" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12" /> },
  { name: "React", icon: <DiReact className="w-12 h-12" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" /> },
  { name: "Node.js", icon: <DiNodejsSmall className="w-12 h-12" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-12 h-12" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12" /> },
  { name: "Docker", icon: <SiDocker className="w-12 h-12" /> },
];

const SkillsSection = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 50 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index, duration: 0.5 },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="group perspective-container">
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
              // Panel kaca dengan efek 3D hover
              className="flex flex-col items-center justify-center p-6 bg-glass rounded-xl shadow-lg border border-white/10
                               transition-all duration-300 group-hover:scale-110 group-hover:[transform:rotateY(15deg)]
                               hover:border-accent-blue"
            >
              <div className="text-accent-blue mb-3 group-hover:text-white transition-colors duration-300">
                {skill.icon}
              </div>
              <p className="text-white font-semibold text-center">
                {skill.name}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
