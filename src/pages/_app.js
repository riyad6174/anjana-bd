import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Contact />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
