import Link from 'next/link';

interface Props {
  firstLink: string;
  firstTitle: string;
  secondLink?: string;
  secondTitle?: string;
  currTitle: string;
}

const Breadcrumb = (props: Props) => {
  const {
    firstLink = '/',
    firstTitle,
    secondLink = '/',
    secondTitle,
    currTitle,
  } = props;

  return (
    <section
      className="store-breadcrumbs"
      data-aos="fade-down"
      data-aos-delay="100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item"
                  style={{textTransform: 'capitalize'}}>
                  <Link href={firstLink}>{firstTitle}</Link>
                </li>
                {secondTitle !== undefined && (
                  <li
                    className="breadcrumb-item"
                    style={{textTransform: 'capitalize'}}>
                    <Link href={secondLink}>{secondTitle}</Link>
                  </li>
                )}
                <li
                  className="breadcrumb-item active"
                  aria-current="page"
                  style={{textTransform: 'capitalize'}}>
                  {currTitle}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
