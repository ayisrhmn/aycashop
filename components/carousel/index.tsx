const Carousel = () => {
  return (
    <section className="store-carousel mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="zoom-in">
            <div
              id="storeCarousel"
              className="carousel slide"
              data-ride="carousel">
              <ol className="carousel-indicators">
                <li
                  data-target="#storeCarousel"
                  data-slide-to="0"
                  className="active"></li>
                <li data-target="#storeCarousel" data-slide-to="1"></li>
                <li data-target="#storeCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    style={{
                      backgroundImage: "url('/img/banner/banner-1.jpg')",
                    }}
                    className="d-block banner-img"></div>
                </div>
                <div className="carousel-item">
                  <div
                    style={{
                      backgroundImage: "url('/img/banner/banner-2.jpg')",
                    }}
                    className="d-block banner-img"></div>
                </div>
                <div className="carousel-item">
                  <div
                    style={{
                      backgroundImage: "url('/img/banner/banner-3.jpg')",
                    }}
                    className="d-block banner-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
