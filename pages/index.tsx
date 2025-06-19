import Head from "next/head";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import ContactSection from "@/components/sections/ContactSection";

// Penjelasan tentang SSG:
// Jika data (misalnya daftar proyek) diambil dari CMS atau database eksternal,
// kita bisa menggunakan getStaticProps untuk mengambil data saat build time.
// Ini akan membuat halaman menjadi statis dan sangat cepat.
// Contoh:
// export async function getStaticProps() {
//   const projects = await fetch('https://api.example.com/projects').then(res => res.json());
//   return { props: { projects } };
// }
// Namun, karena data kita di-hardcode, kita tidak memerlukan getStaticProps di sini.

export default function Home() {
  return (
    <>
      {/* Konfigurasi SEO untuk halaman utama */}
      <Head>
        <title>Novian Fadhilah</title>
        <meta
          name="description"
          content="Portofolio pribadi Novian Fadhilah, seorang Software Engineer yang bersemangat dalam membangun aplikasi web modern."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 sm:px-12 py-4">
        {/* Semua bagian halaman dirender di sini */}
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </>
  );
}
