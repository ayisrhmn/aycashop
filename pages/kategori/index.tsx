import React from 'react';
import AOS from 'aos';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Category from '../../components/category';
import Product from '../../components/product';
import {getCategoryPage} from '../../config/services';
import {toast} from 'react-toastify';
import Spinner from '../../components/spinner';

const AllKategori = () => {
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState([]) as any;
  const [product, setProduct] = React.useState([]) as any;

  React.useEffect(() => {
    initData();
    AOS.init();

    return () => {};
  }, []);

  const initData = async () => {
    setLoading(true);

    await getCategoryPage()
      .then((res) => {
        if (res.error) {
          toast.error(res.message);
        } else {
          setCategory(res.data.category);
          setProduct(res.data.product);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Spinner enabled={loading} />

      {!loading && (
        <>
          <Navbar active={'kategori'} />

          <div className="page-content page-categories">
            <Category title={'Semua Kategori'} category={category} />
            <Product title={'Semua Produk'} product={product} />
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default AllKategori;
