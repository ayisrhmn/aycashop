import React from 'react';
import AOS from 'aos';
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Breadcrumb from '../../../components/breadcrumb';
import ImagePreview from '../../../components/image-preview';
import DetailHeading from '../../../components/detail-heading';
import {useRouter} from 'next/router';
import DetailDesc from '../../../components/detail-desc';

const ProductDetail = () => {
  const router = useRouter();

  const {category, name} = router.query;

  React.useEffect(() => {
    AOS.init();

    return () => {};
  }, []);

  return (
    <>
      <Navbar active={'kategori'} />

      <div className="page-content page-details">
        <Breadcrumb
          firstLink={'/kategori'}
          firstTitle={'Kategori'}
          secondLink={`/kategori/${category}`}
          secondTitle={`${category}`}
          currTitle={`Detail Produk (${name})`}
        />
        <div className="store-details-container" data-aos="fade-up">
          <ImagePreview />
          <DetailHeading
            title={`${name}`}
            category={`${category}`}
            price={35000}
          />
          <DetailDesc />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;
