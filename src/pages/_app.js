import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Footer2 } from '@/components/Footer2';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import store from '@/utils/redux/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Contact />
        <div className='mb-20'>
          <Navbar />
        </div>
        <Component {...pageProps} />
        <Footer2 />
      </Provider>
    </>
  );
}
