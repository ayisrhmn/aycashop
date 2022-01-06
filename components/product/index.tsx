import CardProduct from './card-product';

interface Props {
  title: string;
  product: any;
}

const Product = (props: Props) => {
  const {title, product} = props;

  return (
    <section className="store-new-products mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h5
              className="font-weight-bold"
              style={{textTransform: 'capitalize'}}>
              {title}
            </h5>
          </div>
        </div>
        <div className="row">
          {product?.map((item: any) => (
            <CardProduct
              key={item._id}
              aosDelay={'300'}
              href={`/kategori/produk/${item._id}`}
              thumbnail={item.productImage[0].filenameImage}
              title={item.productName}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
