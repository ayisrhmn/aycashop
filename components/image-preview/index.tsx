import ImageGallery from 'react-image-gallery';

interface Props {
  productImage: any;
}

const ImagePreview = (props: Props) => {
  const {productImage} = props;

  const URL_IMAGE = process.env.NEXT_PUBLIC_IMG;

  const getImages = () => {
    let dataImages: any = [];

    productImage?.map((item: any) => {
      dataImages = [...dataImages, {
        original: `${URL_IMAGE}/${item.filenameImage}`,
        thumbnail: `${URL_IMAGE}/${item.filenameImage}`,
      }]
    });

    return dataImages;
  };

  return (
    <section className="image-gallery mb-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <ImageGallery
              items={getImages()}
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
