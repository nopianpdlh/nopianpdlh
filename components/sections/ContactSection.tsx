import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-4">Contact</h2>
        <p className="text-center text-gray-400 mb-12">
          Saya terbuka untuk diskusi, kolaborasi, atau peluang baru. Jangan ragu
          untuk menghubungi.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informasi Kontak */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-accent text-2xl" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a
                  href="mailto:email@anda.com"
                  className="text-gray-300 hover:text-white"
                >
                  email@anda.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-accent text-2xl" />
              <div>
                <h3 className="text-xl font-semibold">Telepon</h3>
                <p className="text-gray-300">+62 123 4567 890</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-accent text-2xl" />
              <div>
                <h3 className="text-xl font-semibold">Lokasi</h3>
                <p className="text-gray-300">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Form Kontak Sederhana (Hanya UI) */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Nama Anda
              </label>
              <input
                type="text"
                id="name"
                className="bg-[#1E1E1E] border border-gray-600 text-white text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email Anda
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#1E1E1E] border border-gray-600 text-white text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
                placeholder="john.doe@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="bg-[#1E1E1E] border border-gray-600 text-white text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-accent hover:bg-accent/90 focus:ring-4 focus:outline-none focus:ring-accent/50"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
