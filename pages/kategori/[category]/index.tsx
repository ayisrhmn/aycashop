import React from 'react';
import AOS from 'aos';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Product from '../../../components/product';
import Breadcrumb from '../../../components/breadcrumb';
import {useRouter} from 'next/router';

const Kategori = () => {
  const router = useRouter();

  const {category} = router.query;

  React.useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <>
      <Navbar active={'kategori'} />

      <div className="page-content page-categories">
        <Breadcrumb
          firstLink={'/kategori'}
          firstTitle={'Kategori'}
          currTitle={`${category}`}
        />
        <Product title={`Semua Produk (${category})`} />
      </div>

      <Footer />
    </>
  );
};

export default Kategori;
