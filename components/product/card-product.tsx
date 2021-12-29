import Link from 'next/link';
import NumberFormat from 'react-number-format';

interface Props {
  aosDelay: string;
  href?: string;
  thumbnail: string;
  title: string;
  price: number;
}

const CardProduct = (props: Props) => {
  const {aosDelay, href = '/', thumbnail, title, price} = props;

  return (
    <div
      className="col-6 col-md-4 col-lg-3"
      data-aos="fade-up"
      data-aos-delay={aosDelay}>
      <Link href={href}>
        <a className="component-products d-block">
          <div className="products-thumbnail">
            <div
              className="products-image"
              style={{
                backgroundImage: `url(${thumbnail})`,
              }}></div>
          </div>
          <div className="products-text">{title}</div>
          <NumberFormat
            value={price}
            className={'products-price'}
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={'Rp '}
          />
        </a>
      </Link>
    </div>
  );
};

export default CardProduct;
