const ImageGalleryContainer = ({ image, even }) => {
  return (
    <div
      data-aos="fade-up"
      className={`h-[300px] lg:h-[500px] xl:h-[600px]  2xl:h-[800px] flex ${
        !even ? 'items-start' : 'items-end '
      }`}
    >
      <div className="h-full lg:h-[500px] 2xl:h-[600px] w-full border border-white rounded-xl lg:rounded-2xl overflow-hidden">
        <img className="h-full w-full object-cover" src={image} alt="" />
      </div>
    </div>
  );
};

export default ImageGalleryContainer;
