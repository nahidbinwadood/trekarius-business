import Container from '@/components/container/Container';
import GalleryContainer from '@/components/PhotoGallery/GalleryContainer';
import GalleryTitleContainer from '@/components/PhotoGallery/GalleryTitleContainer';
import galleryImage1 from '../assets/images/contest/gal-1.png';
import galleryImage2 from '../assets/images/contest/gal-2.png';
import galleryImage3 from '../assets/images/contest/gal-3.png';
import galleryImage4 from '../assets/images/contest/gal-4.avif';
import video1 from '../assets/videos/1.mp4';
import video2 from '../assets/videos/2.mp4';
import video3 from '../assets/videos/3.mp4';
import video4 from '../assets/videos/4.mp4';
const PhotoGallery = () => {
  const galleryItems = [
    {
      images: [galleryImage1, galleryImage2],
      videos: [video1, video2],
    },
    {
      images: [galleryImage3, galleryImage4],
      videos: [video3, video4],
    },
  ];
  return (
    <div className="bg-[#121212] py-10 md:py-14 lg:py-16 xl:py-20 font-montserrat text-white mt-[84px]">
      <Container>
        {/* title */}
        <GalleryTitleContainer />

        {/* gallery section */}
        <GalleryContainer galleryItems={galleryItems} />
      </Container>
    </div>
  );
};

export default PhotoGallery;
