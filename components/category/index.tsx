import CardCategory from './card-category';

interface Props {
  title: string;
  category: any;
}

const Category = (props: Props) => {
  const {title, category} = props;

  return (
    <section className="store-trend-categories mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h5 className="font-weight-bold">{title}</h5>
          </div>
        </div>
        <div className="row">
          {category?.map((item: any) => (
            <CardCategory
              key={item._id}
              aosDelay={'200'}
              href={`/kategori/${item._id}`}
              imgCategory={item.filenameImage}
              title={item.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
