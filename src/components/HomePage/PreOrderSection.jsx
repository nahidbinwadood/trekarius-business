import Container from "../../components/container/Container";
import { Link } from "react-router-dom";
import CommonButton from "../common/CommonButton";
import PreOrderBag from "../../assets/images/bag-preorder.png";
import logo from "../../assets/images/treakaruis.png";

function PreOrderSection() {
  return (
    <section className="pt-[65px] custom-xs:pt-5">
      <Container>
        <div className="p-[87px] custom-md:p-[60px] custom-sm:p-[30px] custom-xs:p-5 bg-primaryOrange text-center rounded-[20px] relative z-[1] custom-xs:rounded-[16px] custom-xs:pb-7">
          <div className="max-md:relative max-md:h-[350px] max-md:w-[422px] custom-xs:!h-[280px] custom-sm:!w-full custom-xs:!w-full max-md:mx-auto max-md:mb-[30px] custom-xs:!mb-5">
            <img
              className="absolute top-0 right-[60px] custom-sm:right-[50px] custom-xs:right-[50px] bottom-0 h-full w-[330px] custom-sm:w-full custom-xs:w-full custom-xs:left-0 z-[-1] max-md:z-[1]"
              src={PreOrderBag}
              alt=""
            />
            <img
              className="absolute top-0 left-0 custom-sm:left-0 bottom-0 w-[422px] custom-sm:w-full custom-xs:w-full h-full z-[-1]"
              src={logo}
              alt=""
            />
          </div>
          <h3 className="w-[868px] max-md:w-full mx-auto text-[32px] font-bold text-white custom-xs:text-[18px]">
            Mark your calendars! We're thrilled to announce that we're launching
            on May 2025.{" "}
          </h3>
          <Link to={"/cart"} className="mt-6 inline-block">
            <CommonButton text="Pre Order Now" type="fill" bgColor="#1687C7" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default PreOrderSection;
