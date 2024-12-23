import ContestGallery from './ContestGallery';
import gallery1 from '@/assets/images/contest/gal-1.png';
import gallery2 from '@/assets/images/contest/gal-2.png';
import gallery3 from '@/assets/images/contest/gal-3.png';
import contestBg from '@/assets/images/contest/contest-bg-1.png';
import { Link } from 'react-router-dom';
import CommonButton from '../common/CommonButton';
const GalleryInfoSection = () => {
  const gallerySectionsInfo = [
    {
      title: 'Best culture photo',
      description:
        'Capture your most vibrant cultural moment by engaging with the locals during your travels.',
      image: gallery1,
      isReversed: false,
      shapeColor: '#1687C7',
    },
    {
      title: 'Best sunset / sunrise photo',
      description:
        "Experience the stunning allure of the sun during your adventures. Whether you're by the mountains, the ocean, or in a vibrant city, find that perfect moment when the sun dips below the horizon.",
      image: gallery2,
      isReversed: true,
      shapeColor: '#FF7701',
    },
    {
      title: 'Best adventure photo ',
      description:
        'Take an unedited photograph that showcases your travel experiences and the surrounding landscapes.',
      image: gallery3,
      isReversed: false,
      shapeColor: '#1687C7',
    },
  ];
  return (
    <div className="w-full mx-auto px-10 max-md:px-7 custom-sm:!px-5 custom-xs:!px-[18px]">
      {gallerySectionsInfo?.map((item) => (
        <ContestGallery key={item?.title} item={item} />
      ))}

      {/* CTA section */}
      <div
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url(${contestBg})`,
        }}
        className="py-14 sm:py-20 md:py-28 lg:py-32 2xl:py-40 px-5 rounded-2xl flex items-center !bg-center justify-center !bg-cover !bg-no-repeat"
      >
        {/* info */}
        <div className="text-white text-center space-y-3 md:space-y-5">
          <h3
            data-aos="fade-up"
            className="text--xl custom-md:text-[34px] custom-sm:text-[30px] custom-xs:text-[26px] text-white "
          >
            Win up to 500$ and gear
          </h3>
          <p data-aos="fade-up" className="md:text-lg md:w-[55%] mx-auto">
            The end of each 6 months all winners will get out in a vote by the
            community and a further chance to win another 2k from best overall
            photo
          </p>
          <Link
            to={'/contest/photo-contest'}
            className="max-md:mt-6 inline-block"
            data-aos="fade-up"
          >
            <CommonButton text="Join Contest" type="fill" bgColor="#FF7701" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryInfoSection;
