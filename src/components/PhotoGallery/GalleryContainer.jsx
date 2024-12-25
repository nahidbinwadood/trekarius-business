import ImageGalleryContainer from './ImageGalleryContainer';
import VideoGalleryContainer from './VideoGalleryContainer';

const GalleryContainer = ({ galleryItems }) => {
  return (
    <div className="space-y-5 md:space-y-7 lg:space-y-8 2xl:space-y-10 mt-8 lg:mt-16">
      {galleryItems.map((item, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:grid-cols-4 2xl:gap-8">
          <ImageGalleryContainer
            even={index % 2 === 0}
            image={item?.images[0]}
          />
          {/* video */}
          {item?.videos?.map((video,idx) => (
            <VideoGalleryContainer key={video} idx={idx+1} video={video} />
          ))}
          {/* image */}
          <ImageGalleryContainer
            even={index % 2 === 0}
            image={item?.images[1]}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryContainer;
