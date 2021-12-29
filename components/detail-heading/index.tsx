import NumberFormat from 'react-number-format';

interface Props {
  title: string;
  category: string;
  price: number;
}

const DetailHeading = (props: Props) => {
  const {title, category, price} = props;

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
        </div>
      </div>
    </section>
  );
};

export default DetailHeading;
