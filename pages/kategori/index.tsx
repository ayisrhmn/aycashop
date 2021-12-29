import React from 'react';
import AOS from 'aos';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Category from '../../components/category';
import Product from '../../components/product';

const AllKategori = () => {
  React.useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <>
      <Navbar active={'kategori'} />

      <div className="page-content page-categories">
        <Category title={'Semua Kategori'} />
        <Product title={'Semua Produk'} />
      </div>

      <Footer />
    </>
  );
};

export default AllKategori;
