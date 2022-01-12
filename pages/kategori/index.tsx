import React from 'react';
import AOS from 'aos';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Category from '../../components/category';
import Product from '../../components/product';
import {getCategoryPage} from '../../config/services';
import {toast} from 'react-toastify';
import Spinner from '../../components/spinner';
import Pagination from '../../components/pagination';

const AllKategori = () => {
  const [loading, setLoading] = React.useState(false);
  const [category, setCategory] = React.useState([]) as any;
  const [product, setProduct] = React.useState([]) as any;
  const [currItems, setCurrItems] = React.useState([]) as any;
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(12);

  React.useEffect(() => {
    initData();
    AOS.init();

    return () => {};
  }, []);

  const initData = async () => {
    setItemsPerPage(12);
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

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrItems(product.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(product.length / itemsPerPage));

    return () => {};
  }, [itemOffset, itemsPerPage, product]);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % product.length;
    console.log(
      `User requested page number ${e.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Spinner enabled={loading} />

      {!loading && (
        <>
          <Navbar active={'kategori'} />

          <div className="page-content page-categories">
            <Category title={'Semua Kategori'} category={category} />
            <Product title={'Semua Produk'} product={currItems} />
            <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default AllKategori;
