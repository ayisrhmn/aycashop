import React from 'react';
import AOS from 'aos';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Breadcrumb from '../../../components/breadcrumb';
import ImagePreview from '../../../components/image-preview';
import DetailHeading from '../../../components/detail-heading';
import {useRouter} from 'next/router';
import DetailDesc from '../../../components/detail-desc';
import {getDetailProduct} from '../../../config/services';
import {toast} from 'react-toastify';
import Spinner from '../../../components/spinner';

const ProductDetail = () => {
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
      await getDetailProduct(id)
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

          <div className="page-content page-details">
            <Breadcrumb
              firstLink={'/kategori'}
              firstTitle={'Kategori'}
              secondLink={`/kategori/${data.category?._id}`}
              secondTitle={`${data.category?.name}`}
              currTitle={`${data.productName}`}
            />
            <div className="store-details-container" data-aos="fade-up">
              <ImagePreview productImage={data.productImage} />
              <DetailHeading
                title={`${data.productName}`}
                category={`${data.category?.name}`}
                price={data.price}
                link={data.link}
              />
              <DetailDesc description={data.description} />
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default ProductDetail;
