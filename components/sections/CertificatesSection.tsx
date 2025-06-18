import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

// Data dummy untuk sertifikat
const certificatesData = [
  {
    title: "Professional Cloud Developer",
    issuer: "Google Cloud",
    image: "https://via.placeholder.com/500x300.png?text=Sertifikat+GCP",
    credentialLink: "https://google.com",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    image: "https://via.placeholder.com/500x300.png?text=Sertifikat+CKA",
    credentialLink: "https://google.com",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    image: "https://via.placeholder.com/500x300.png?text=Sertifikat+AWS",
    credentialLink: "https://google.com",
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">
        Sertifikasi & Kredensial
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
              <p className="text-gray-400 mb-4">{cert.issuer}</p>
              <a
                href={cert.credentialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 text-white bg-accent/80 hover:bg-accent py-2 px-4 rounded-lg transition-colors w-fit"
              >
                Lihat Kredensial <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
