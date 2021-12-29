import CardCategory from './card-category';

interface Props {
  title: string;
}

const Category = (props: Props) => {
  const {title} = props;

  const listCategory = [
    {
      href: '/kategori/t-shirt',
      aosDelay: '100',
      imgCategory: '/img/category/ct-1.jpg',
      title: 'T-Shirt',
    },
    {
      href: '/kategori/crewneck',
      aosDelay: '200',
      imgCategory: '/img/category/ct-2.jpg',
      title: 'Crewneck',
    },
    {
      href: '/kategori/thrift',
      aosDelay: '300',
      imgCategory: '/img/category/ct-3.jpg',
      title: 'Thrift',
    },
    {
      href: '/kategori/food',
      aosDelay: '400',
      imgCategory: '/img/category/ct-4.jpg',
      title: 'Food',
    },
  ];

  return (
    <section className="store-trend-categories mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up">
            <h5 className="font-weight-bold">{title}</h5>
          </div>
        </div>
        <div className="row">
          {listCategory.map((category: any, i: number) => (
            <CardCategory
              key={i}
              aosDelay={category.aosDelay}
              href={category.href}
              imgCategory={category.imgCategory}
              title={category.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
