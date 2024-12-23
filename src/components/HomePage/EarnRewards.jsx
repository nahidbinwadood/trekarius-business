import { Link } from "react-router-dom";
import Container from "../container/Container";
import rewardImg from "../../assets/images/reward.png";

function EarnRewards() {
  return (
    <section className="pb-[60px]">
      <Container>
        <div
          className="py-[150px] custom-2xl:py-[110px] custom-xl:py-[110px] max-md:py-[80px] custom-xs:!py-[50px] px-10 bg-rewardBg rounded-[32px] text-center relative bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${rewardImg})` }}
        >
          <h3 className="text-[48px] max-md:text-[34px] custom-xs:!text-[26px] custom-sm:!text-[28px] font-bold text-white" data-aos="fade-up">
            Earn Rewards
          </h3>
          <p
            className="text-base text-white mt-6 custom-xs:mt-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Take a short quiz to find the perfect camera + accessories for you.{" "}
          </p>
          <div data-aos="fade-up" data-aos-delay="150">
            <Link
              to={"/"}
              className="mt-6 inline-block text-base max-md:text-sm py-3 px-6 border-[2px] border-white rounded-[40px] duration-200 ease-in-out hover:bg-white hover:text-headingColor font-semibold text-white"
            >
              TAKE THE QUIZ
            </Link>
          </div>
          {/* <div>
                <img className="w-[340px] h-[340px] absolute top-[70px] bottom-[70px] left-10" src={bagOne} alt="bagOne" data-aos="zoom-in" />
                <img className="w-[340px] h-[340px] absolute top-[70px] bottom-[70px] right-10" src={bagTwo} alt="bagOne" data-aos="zoom-in" data-aos-delay="100" />
            </div> */}
        </div>
      </Container>
    </section>
  );
}

export default EarnRewards;
