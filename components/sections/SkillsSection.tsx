import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiSass,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";

// Data untuk skills
const skillsData = [
  { name: "JavaScript", icon: <DiJavascript1 className="w-16 h-16" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-16 h-16" /> },
  { name: "React", icon: <DiReact className="w-16 h-16" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-16 h-16" /> },
  { name: "Node.js", icon: <DiNodejsSmall className="w-16 h-16" /> },
  { name: "HTML5", icon: <DiHtml5 className="w-16 h-16" /> },
  { name: "CSS3", icon: <DiCss3 className="w-16 h-16" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="w-16 h-16" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="w-16 h-16" /> },
  { name: "MongoDB", icon: <DiMongodb className="w-16 h-16" /> },
  { name: "Docker", icon: <SiDocker className="w-16 h-16" /> },
  { name: "Git", icon: <DiGit className="w-16 h-16" /> },
];

const SkillsSection = () => {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Keahlian Teknologi
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-secondary rounded-lg shadow-lg hover:shadow-accent/50 transition-shadow duration-300"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="text-accent mb-2">{skill.icon}</div>
            <p className="text-white font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
