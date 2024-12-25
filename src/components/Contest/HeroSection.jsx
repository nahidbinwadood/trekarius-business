import Container from '../container/Container';
import copntestBanner from '../../assets/images/contest-banner.png';
import { Link } from 'react-router-dom';
import CommonButton from '../common/CommonButton';

function HeroSection() {
  return (
    <section className="mt-[90px] custom-xs:mt-[70px]" data-aos="fade-in">
      <Container>
        <div className="">
          <div
            className="bg-cover bg-no-repeat bg-center pt-[542px] custom-xl:pt-[320px] custom-lg:pt-[320px] custom-md:pt-[250px] custom-md:pb-[80px] px-10 pb-[124px] custom-sm:pt-[150px] custom-sm:pb-8 custom-sm:px-6 custom-sm:rounded-[16px] custom-xs:pt-[130px] custom-xs:pb-8 custom-xs:px-6 custom-xs:rounded-[16px] rounded-[16px]"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${copntestBanner})`,
              backgroundColor: 'lightgray',
            }}
          >
            <div className="flex max-md:block items-center justify-between">
              <div className="custom-lg:w-[60%]">
                <h1
                  className="text--xl custom-md:text-[30px] custom-sm:text-[24px] custom-xs:text-[24px] font-bold text-white"
                  data-aos="fade-up"
                >
                  Photo Contest 2025
                </h1>
                <p
                  className="text-[18px] custom-xs:text-base custom-xs:font-medium font-bold text-white mt-4"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Submit Your Best Shots to TREKARIUS Annual Photo Contest
                </p>
              </div>
              <Link
                to={'/contest/photo-contest'}
                className="max-md:mt-6 inline-block"
                data-aos="fade-up"
              >
                <CommonButton
                  text="Join Contest"
                  type="fill"
                  bgColor="#FF7701"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
