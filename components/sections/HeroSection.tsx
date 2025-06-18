import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-12 min-h-[85vh] items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="col-span-7 place-self-center text-center lg:text-left"
      >
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Halo, Saya Novian Fadhilah
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1500,
              "Web Developer",
              1500,
              "Full-Stack Developer",
              1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl sm:text-3xl lg:text-4xl"
          />
        </h1>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Selamat datang di portofolio saya. Saya adalah seorang engineer yang
          bersemangat dalam merancang dan membangun solusi digital yang
          inovatif.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <a
            href="/CV.pdf"
            download
            className="w-full sm:w-fit px-6 py-3 rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 hover:bg-slate-200 text-white font-semibold transition-all duration-300"
          >
            Unduh CV
          </a>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/[username]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/[username]"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-4xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="col-span-5 place-self-center mt-4 lg:mt-0"
      >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
          {/* Ganti dengan URL gambar profil Anda di /public */}
          <img
            src="https://via.placeholder.com/400x400.png?text=Profil"
            alt="Gambar Profil"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={400}
            height={400}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
