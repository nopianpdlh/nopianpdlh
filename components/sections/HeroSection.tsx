import { TypeAnimation } from "react-type-animation";
import { motion, Variants } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Mendefinisikan varian animasi untuk gambar profil
// Ini akan membuat gambar "melompat" ke posisi saat masuk ke layar
const imageVariants: Variants = {
  offscreen: {
    y: 100, // Mulai dari 100px di bawah posisi akhir
    opacity: 0,
  },
  onscreen: {
    y: 0, // Kembali ke posisi normal
    opacity: 1,
    rotate: -5, // Sedikit berputar untuk efek dinamis
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 lg:grid-cols-12 min-h-[90vh] items-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="col-span-7 place-self-center text-center lg:text-left"
      >
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-pink to-accent-blue">
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
            className="w-full sm:w-fit px-6 py-3 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink hover:saturate-200 text-white font-semibold transition-all duration-300"
          >
            Unduh CV
          </a>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://github.com/nopianpdlh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/novian-fadhilah-a95787268"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-4xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Gambar profil sekarang menggunakan whileInView */}
      <motion.div
        initial="offscreen" // State awal saat elemen di luar layar
        whileInView="onscreen" // State saat elemen masuk ke layar
        viewport={{ once: true, amount: 0.3 }} // Animasi hanya berjalan sekali
        variants={imageVariants} // Menerapkan varian animasi yang sudah dibuat
        className="col-span-5 place-self-center mt-4 lg:mt-0"
      >
        <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden shadow-2xl shadow-accent-purple/20">
          <img
            src="https://avatars.githubusercontent.com/u/139773713?v=4"
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
