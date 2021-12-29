import '../styles/globals.css';
import '../styles/main.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';

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

        <script src="/scripts/jquery/jquery.min.js"></script>
        <script src="/scripts/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/scripts/navbar-scroll.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
