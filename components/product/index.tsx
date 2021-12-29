import CardProduct from './card-product';

interface Props {
  title: string;
}

const Product = (props: Props) => {
  const {title} = props;

  const listNewProduct = [
    {
      href: '/kategori/t-shirt/t-shirt',
      aosDelay: '100',
      thumbnail: '/img/product/prod-1.jpg',
      title: 'T-Shirt',
      price: 35000,
    },
    {
      href: '/kategori/crewneck/crewneckss',
      aosDelay: '200',
      thumbnail: '/img/product/prod-2.jpg',
      title: 'Crewneck',
      price: 35000,
    },
    {
      href: '/kategori/food/food',
      aosDelay: '300',
      thumbnail: '/img/product/prod-3.jpg',
      title: 'Food',
      price: 35000,
    },
    {
      href: '/kategori/thrift/thrift',
      aosDelay: '400',
      thumbnail: '/img/product/prod-4.jpg',
      title: 'Thrift',
      price: 35000,
    },
  ];
  
  const listPopularProduct = [
    {
      href: '/kategori/t-shirt/t-shirt',
      aosDelay: '100',
      thumbnail: '/img/product/prod-1.jpg',
      title: 'T-Shirt',
      price: 35000,
    },
    {
      href: '/kategori/crewneck/crewneck',
      aosDelay: '200',
      thumbnail: '/img/product/prod-2.jpg',
      title: 'Crewneck',
      price: 35000,
    },
    {
      href: '/kategori/food/food',
      aosDelay: '300',
      thumbnail: '/img/product/prod-3.jpg',
      title: 'Food',
      price: 35000,
    },
    {
      href: '/kategori/thrift/thrift',
      aosDelay: '400',
      thumbnail: '/img/product/prod-4.jpg',
      title: 'Thrift',
      price: 35000,
    },
  ];

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
          {title === 'Produk Baru' ? (
            <>
              {listNewProduct.map((product: any, i: number) => (
                <CardProduct
                  key={i}
                  aosDelay={product.aosDelay}
                  href={product.href}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </>
          ) : (
            <>
              {listPopularProduct.map((product: any, i: number) => (
                <CardProduct
                  key={i}
                  aosDelay={product.aosDelay}
                  href={product.href}
                  thumbnail={product.thumbnail}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
