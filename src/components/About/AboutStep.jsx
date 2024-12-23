function AboutStep({ text, img, shapeColor, isReversed }) {
  return (
    <div className={`flex max-md:flex-col items-center gap-[134px] max-md:gap-10 custom-xs:!gap-8 justify-center mt-[30px] max-md:mt-0 ${isReversed ? 'flex-row-reverse' : ''}`}>
      <div className="w-[530px] custom-sm:w-full custom-xs:w-full max-md:order-2" data-aos={isReversed ? 'fade-left' : 'fade-right'}>
        <p className="text-[24px] custom-md:text-[20px] custom-sm:text-[18px] custom-sm:leading-[30px] custom-xs:text-base custom-xs:leading-[28px] font-semibold text-headingColor leading-[36px]">
          {text}
        </p>
      </div>
      <div className="max-w-[650px] w-full max-md:order-1 h-[520px] custom-sm:h-[335px] custom-xs:h-[300px] p-3 custom-xs:p-0 about-step-img relative z-[1] mt-[30px] max-md:mt-0" data-aos={isReversed ? 'fade-right' : 'fade-left'}>
        <img className="h-full w-full rounded-[20px] object-cover" src={img} alt="img" />
        <div
          className="back-shape absolute w-[97%] h-[96%] custom-2xl:w-[97%] custom-2xl:h-[97%] custom-xl:w-[97%] custom-xl:h-[97%] custom-sm:w-[95%] custom-sm:h-[93%] left-5 top-5 z-[-1] rounded-[20px]"
          style={{ backgroundColor: shapeColor }}
        ></div>
      </div>
    </div>
  );
}

export default AboutStep;
