import ImageGallery from 'react-image-gallery';

const ImagePreview = () => {
  const images = [
    {
      original: '/img/product/prod-1.jpg',
      thumbnail: '/img/product/prod-1.jpg',
    },
    {
      original: '/img/product/prod-2.jpg',
      thumbnail: '/img/product/prod-2.jpg',
    },
    {
      original: '/img/product/prod-3.jpg',
      thumbnail: '/img/product/prod-3.jpg',
    },
  ];
  
  return (
    <section className="image-gallery mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <ImageGallery
              items={images}
              showNav={false}
              showPlayButton={false}
              thumbnailPosition={'right'}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagePreview;
