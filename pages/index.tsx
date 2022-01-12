import React from 'react';
import AOS from 'aos';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import TypingText from '../components/typing-text';
import Category from '../components/category';
import Product from '../components/product';
import Footer from '../components/footer';
import {getHomePage} from '../config/services';
import {toast} from 'react-toastify';
import Spinner from '../components/spinner';

const Home = () => {
  const [loading, setLoading] = React.useState(false);
  const [banner, setBanner] = React.useState([]) as any;
  const [category, setCategory] = React.useState([]) as any;
  const [productNew, setProductNew] = React.useState([]) as any;
  const [productPopular, setProductPopular] = React.useState([]) as any;

  React.useEffect(() => {
    initData();
    AOS.init();

    return () => {};
  }, []);

  const initData = async () => {
    setLoading(true);

    await getHomePage()
      .then((res) => {
        if (res.error) {
          toast.error(res.message);
        } else {
          setBanner(res.data.banner);
          setCategory(res.data.category);
          setProductNew(res.data.productNew);
          setProductPopular(res.data.productPopular);
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Spinner enabled={loading} />

      {!loading && (
        <>
          <Navbar active={'beranda'} />

          <div className="page-content page-home">
            <Carousel banner={banner} />
            <TypingText />
            <Category title={'Kategori'} category={category} />
            <Product title={'Produk Terlaris'} product={productPopular} />
            <Product title={'Produk Baru'} product={productNew} />
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
