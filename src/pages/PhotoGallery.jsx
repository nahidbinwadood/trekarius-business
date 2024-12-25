import Container from '@/components/container/Container';
import GalleryContainer from '@/components/PhotoGallery/GalleryContainer';
import GalleryTitleContainer from '@/components/PhotoGallery/GalleryTitleContainer';
import galleryImage1 from '../assets/images/contest/gal-1.png';
import galleryImage2 from '../assets/images/contest/gal-2.png';
import galleryImage3 from '../assets/images/contest/gal-3.png';
import galleryImage4 from '../assets/images/contest/gal-4.avif';
const PhotoGallery = () => {
  const galleryItems = [
    {
      images: [galleryImage1, galleryImage2],
      videos: [
        'https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4',
        'https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_24fps.mp4',
      ],
    },
    {
      images: [galleryImage3, galleryImage4],
      videos: [
        'https://videos.pexels.com/video-files/2257010/2257010-uhd_2560_1440_24fps.mp4',
        'https://videos.pexels.com/video-files/2894895/2894895-uhd_2560_1440_24fps.mp4',
      ],
    },
  ];
  return (
    <div className="bg-[#121212] py-10 md:py-14 lg:py-16 xl:py-20 font-montserrat text-white mt-[84px]">
      <Container>
        {/* title */}
        <GalleryTitleContainer />

        {/* gallery section */}
        <GalleryContainer  galleryItems={galleryItems}/>
      </Container>
    </div>
  );
};

export default PhotoGallery;
