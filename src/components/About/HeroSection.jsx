
import AboutBanner from "../../assets/images/about.png"
import Container from "../container/Container"

function HeroSection() {
  return (
    <section className="mt-[90px]">
        <Container>
            <div className="bg-cover bg-no-repeat bg-center py-[260px] custom-md:py-[180px] custom-sm:py-[140px] custom-xs:py-[120px] text-center rounded-[16px]" style={{backgroundImage:`url(${AboutBanner})`}} data-aos="fade-in">
                <h1 className="text-[56px] custom-md:text-[40px] custom-sm:text-[34px] custom-xs:text-[30px] font-bold text-white" data-aos="fade-up">Our Mission</h1>
            </div>
        </Container>
    </section>
  )
}

export default HeroSection