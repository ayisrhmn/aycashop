import '../styles/globals.css';
import '../styles/main.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Aycashop.id - Paradise for Women</title>
        <meta property="og:title" content="Aycashop.id - Paradise for Women" />

        {/* AOS Animation */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />

        {/* react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <script src="/scripts/jquery/jquery.min.js"></script>
        <script src="/scripts/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/scripts/navbar-scroll.js"></script>
      </Head>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
