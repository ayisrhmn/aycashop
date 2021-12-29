import React from 'react';
import AOS from 'aos';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import TypingText from '../components/typing-text';
import Category from '../components/category';
import Product from '../components/product';
import Footer from '../components/footer';

const Home = () => {
  React.useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <>
      <Navbar active={'beranda'} />

      <div className="page-content page-home">
        <Carousel />
        <TypingText />
        <Category title={'Kategori'} />
        <Product title={'Produk Baru'} />
        <Product title={'Produk Terlaris'} />
      </div>

      <Footer />
    </>
  );
};

export default Home;
