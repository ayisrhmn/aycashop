import React from 'react';
import AOS from 'aos';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Product from '../../components/product';
import Breadcrumb from '../../components/breadcrumb';
import {useRouter} from 'next/router';
import {getProductByCategory} from '../../config/services';
import {toast} from 'react-toastify';
import Spinner from '../../components/spinner';

const Kategori = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]) as any;

  const router = useRouter();

  const {id} = router.query;

  React.useEffect(() => {
    initData(id);
    AOS.init();

    return () => {};
  }, [id]);

  const initData = async (id: any) => {
    setLoading(true);

    if (id !== undefined) {
      await getProductByCategory(id)
        .then((res) => {
          if (res.error) {
            toast.error(res.message);
          } else {
            setData(res.data);
          }
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <>
      <Spinner enabled={loading} />

      {!loading && (
        <>
          <Navbar active={'kategori'} />

          <div className="page-content page-categories">
            <Breadcrumb
              firstLink={'/kategori'}
              firstTitle={'Kategori'}
              currTitle={`${data[0]?.category?.name}`}
            />
            <Product
              title={`Semua Produk (${data[0]?.category?.name})`}
              product={data}
            />
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Kategori;
