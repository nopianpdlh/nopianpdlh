import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Header akan tampil di semua halaman */}
      <Header />
      <Component {...pageProps} />
    </>
  );
}
