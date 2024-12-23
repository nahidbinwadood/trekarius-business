import AboutStep from '../About/AboutStep';

const ContestGallery = ({ item }) => {
  return (
    <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[60px]">
      <h2
        className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center"
        data-aos="fade-up"
      >
        {item?.title}
      </h2>
      <AboutStep
        text={item?.description}
        img={item?.image}
        shapeColor={item?.shapeColor}
        isReversed={item?.isReversed}
      />
    </div>
  );
};

export default ContestGallery;
