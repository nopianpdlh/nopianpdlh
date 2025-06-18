import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Tentang Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="w-full h-auto flex justify-center">
            <img
              src="https://via.placeholder.com/350x350.png?text=Tentang+Saya"
              alt="About Me"
              className="rounded-lg shadow-lg"
              width={350}
              height={350}
            />
          </div>
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Saya adalah seorang Software Engineer dengan pengalaman dalam
              membangun aplikasi web yang scalable dan efisien. Saya memiliki
              keahlian di seluruh tumpukan teknologi, mulai dari pengembangan
              front-end yang interaktif hingga perancangan back-end yang robust.
            </p>
            <p>
              Saya sangat tertarik pada teknologi cloud, arsitektur
              microservices, dan praktik DevOps untuk mempercepat siklus
              pengembangan. Saya selalu antusias untuk belajar hal-hal baru dan
              berkolaborasi dalam tim untuk menciptakan produk yang berdampak
              positif.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
