import NumberFormat from 'react-number-format';

interface Props {
  title: string;
  category: string;
  price: number;
  link: string;
}

const DetailHeading = (props: Props) => {
  const {title, category, price, link} = props;

  return (
    <section className="store-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{textTransform: 'capitalize'}}>{title}</h1>
            <div className="owner" style={{textTransform: 'capitalize'}}>
              {category}
            </div>
            <NumberFormat
              value={price}
              className={'price'}
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'Rp '}
            />
          </div>
          <div className="col-lg-3">
            <a
              className="btn btn-success btn-sm nav-link mt-3 mb-2 text-white"
              target="_blank"
              href={link}>
              Lihat Produk
            </a>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default DetailHeading;
