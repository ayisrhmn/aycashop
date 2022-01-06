import renderHTML from 'react-render-html';

interface Props {
  description: any;
}

const DetailDesc = (props: Props) => {
  const {description} = props;

  return (
    <section className="store-description">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-12">
            {description !== undefined ? renderHTML(description) : ''}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailDesc;
