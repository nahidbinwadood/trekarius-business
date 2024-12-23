import Container from "../container/Container";
import AboutStep from "./AboutStep";
import stepOneImg from "../../assets/images/about-step-1.png";
import stepTwoImg from "../../assets/images/about-step-2.png";
import stepThreeImg from "../../assets/images/about-step-3.png";
import stepThreeFour from "../../assets/images/a-step-4.jpg";
import stepThreeFive from "../../assets/images/a-step-5.jpg";
import EarnRewards from "../HomePage/EarnRewards";

function MissionStatement() {
  return (
    <section>
      <Container>
        <div>
          {/* mission statement  */}
          <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[60px]">
            <h2 className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center" data-aos="fade-up">
              Our Mission Statement
            </h2>
            <AboutStep
              text="Inspire travel, diversity of cultures and feeling of freedom, as we empower and connect people globally as we provide durable and innovative travel products for the travellers convenience..."
              img={stepOneImg}
              shapeColor="#1687C7"
              isReversed={false}
            />
          </div>
          {/* Our Vision Statement  */}
          <div className="py-[120px] custom-md:pt-[20px] custom-md:pb-[90px] custom-sm:pt-[0px] custom-sm:pb-[70px] custom-xs:pt-[0px] custom-xs:pb-[60px]">
            <h2 className="text--xl text-headingColor mb-[30px] custom-xs:mb-[25px] text-center" data-aos="fade-up">
              Our Vision Statement
            </h2>
            <AboutStep
              text="Inspire travel, diversity of cultures and feeling of freedom, as we empower and connect people globally as we provide durable and innovative travel products for the travellers convenience..."
              img={stepTwoImg}
              shapeColor="#ff7701"
              isReversed={true}
            />
          </div>
          {/* Brand Story  */}
          <div className="py-[120px] custom-md:pt-[20px] custom-md:pb-[90px] custom-sm:pt-[0px] custom-sm:pb-[70px] custom-xs:pt-[0px] custom-xs:pb-[60px]">
            <h2 className="text--xl text-headingColor mb-[30px] text-center" data-aos="fade-up">
              Brand Story
            </h2>
            <AboutStep
              text="Our company was born out of the exhilarating experience of embarking on a mission that took us halfway across the globe. Motivated by the desire to explore all 195 countries, we found inspiration in the freedom of travel and the connections we made with people from diverse cultures. Embracing this diversity, we strive to promote and encourage a sense / feeling of liberation through travel."
              img={stepThreeImg}
              shapeColor="#1687C7"
              isReversed={false}
            />
          </div>
        </div>
      </Container>
      {/* divider  */}
      <div className="py-[60px] custom-xs:py-[40px] bg-primaryOrange text-[20px] custom-xs:text-[18px] font-semibold tetx-center text-white text-center" data-aos="fade-up">
        Inspire and empower every traveler globally with our innovative travel
        gear.
      </div>
      <Container>
        <div>
          {/* Position Statement  */}
          <div className="py-[120px] custom-md:py-[90px] custom-sm:py-[70px] custom-xs:py-[70px]">
            <h2 className="text--xl text-headingColor mb-[30px] text-center" data-aos="fade-up">
              Position Statement
            </h2>
            <AboutStep
              text="To provide innovative travel gear that motivates adventure and the discovery of diverse cultures, sparking inspiration along the way"
              img={stepThreeFour}
              shapeColor="#1687C7"
              isReversed={false}
            />
          </div>
          {/* Value Proposition  */}
          <div className="py-[120px] custom-md:pt-[20px] custom-md:pb-[90px] custom-sm:pt-[0px] custom-sm:pb-[10px] custom-xs:pt-[0px] custom-xs:pb-[10px]">
            <h2 className="text--xl text-headingColor mb-[30px] text-center" data-aos="fade-up">
              Value Proposition
            </h2>
            <AboutStep
              text="At TREKARIUS we are committed to unite and inspire equality through travel and experiences of cultures and a more sustainable future for our community, people and planet"
              img={stepThreeFive}
              shapeColor="#ff7701"
              isReversed={true}
            />
          </div>
        </div>
      </Container>
      <div className="mt-[60px] custom-md:mt-0 custom-xs:mt-10">
        <EarnRewards />
      </div>
    </section>
  );
}

export default MissionStatement;
