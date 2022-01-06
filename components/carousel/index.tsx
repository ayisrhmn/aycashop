import Slider from 'react-slick';

interface Props {
  banner: any;
}

const Carousel = (props: Props) => {
  const {banner} = props;

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    autoplaySpeed: 5000,
  };

  return (
    <section className="store-carousel mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in">
            <Slider {...settings}>
              {banner?.map((item: any) => (
                <div key={item._id}>
                  <div
                    style={{
                      backgroundImage: `url('${URL_IMAGE}/${item.filenameImage}')`,
                    }}
                    className="d-block banner-img"></div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
