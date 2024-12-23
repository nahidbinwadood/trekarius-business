import { Link } from "react-router-dom";
import Container from "../components/container/Container";
import Logo from "../assets/images/logo/logo-footer.svg";
import SocialIcon from "../components/footer/SocialIcon";

const menuItems = [
  { name: "Home", link: "/home" },
  { name: "About Us", link: "/about-us" },
  { name: "Help & Support", link: "/help" },
  { name: "Privacy policy", link: "/privacy-policy" },
  { name: "Terms & Conditions", link: "/terms-condition" },
];

function Footer() {
  return (
    <footer className="bg-footerBg pt-[60px] px-5 custom-sm:px-0">
      <Container>
        <div className="flex items-center justify-between max-md:flex-col">
          {/* footer logo  */}
          <div className="max-md:mb-6" data-aos="fade-in">
            <Link to={"/"}>
              <img className="w-[98px] h-[48px]" src={Logo} alt="logo" />
            </Link>
          </div>
          {/* footer menu  */}
          <div>
            <ul className="flex custom-sm:flex-wrap custom-sm:gap-5 custom-xs:justify-center custom-xs:flex-wrap custom-xs:gap-5 custom-sm:justify-center items-center gap-8">
              {menuItems.map((item, index) => (
                <li
                  key={item?.name}
                  data-aos="fade-in"
                  data-aos-delay={index * 100}
                >
                  <Link
                    to={item?.link}
                    className="menu-item menu-item-footer max-md:text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* footer social  */}
          <div className="max-md:mt-6">
            <SocialIcon />
          </div>
        </div>
      </Container>
      {/* copyright  */}
      <div className="py-8 mt-[60px] border-t border-[rgba(255,255,255,0.2)] text-center text-white">
        Copyright ©2024{" "}
        <Link to={"/"} className="text-primaryBlue" data-aos="fade-in">
          Trekarius
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
