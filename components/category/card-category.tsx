import Link from 'next/link';

interface Props {
  href?: string;
  imgCategory: string;
  title: string;
  aosDelay: string;
}

const CardCategory = (props: Props) => {
  const {href = '/', imgCategory, title, aosDelay} = props;

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;

  return (
    <div
      className="col-6 col-md-3 col-lg-3"
      data-aos="fade-up"
      data-aos-delay={aosDelay}>
      <Link href={href}>
        <a className="component-categories d-block">
          <div className="categories-image">
            <img
              src={`${URL_IMAGE}/${imgCategory}`}
              alt="Gadgets Categories"
              className="w-100"
              style={{borderRadius: '100%'}}
            />
          </div>
          <p className="categories-text">{title}</p>
        </a>
      </Link>
    </div>
  );
};

export default CardCategory;
