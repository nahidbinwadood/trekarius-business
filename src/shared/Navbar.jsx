import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import CommonButton from "../components/common/CommonButton";
import Container from "../components/container/Container";
import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

const menuItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about-us" },
  { name: "Plan your trip", link: "/plan-your-trip" },
  { name: "Contest & Reward", link: "/contest" },
  { name: "Shop", link: "/shop" },
  { name: "Blog", link: "/blogs" },
  { name: "Photo Gallery", link: "/photo-gallery" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="py-4 custom-xs:py-3 bg-bodyColor fixed top-0 left-0 w-full z-50">
      <Container>
        <div className="flex items-center justify-between">
          {/* logo  */}
          <div data-aos="fade-in">
            <Link to={"/"}>
              <img className="w-[98px] h-[48px] custom-xs:w-[70px] custom-xs:h-[40px]" src={Logo} alt="logo" />
            </Link>
          </div>
          {/* menu  */}
          <div className="max-xl:hidden">
            <ul className="flex items-center gap-6 2xl:gap-10">
              {menuItems.map((item, index) => (
                <li
                  key={item?.name}
                  data-aos="fade-in"
                  data-aos-delay={index * 100}
                >
                  <NavLink to={item?.link} className="menu-item">
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* header actions  */}
          <div className="flex items-center gap-3 max-xl:hidden">
            {/* actions  */}
            <ul className="flex items-center gap-3">
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink to={"/cart"} className="action-button">
                  <AiOutlineShoppingCart />
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="200">
                <NavLink to={"/join-community"} className="action-button">
                  <BiMessageDetail />
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="300">
                <NavLink to={"/ask-ai"} className="action-button">
                  <BsStars />
                </NavLink>
              </li>
            </ul>
            {/* buttons  */}
            <div className="flex items-center gap-3">
              <div data-aos="fade-in" data-aos-delay="350">
                <Link to={"/login"}>
                  <CommonButton text="Login" type="fill" bgColor="#1687C7" />
                </Link>
              </div>
              <div data-aos="fade-in" data-aos-delay="400">
                <Link to={"/signup"}>
                  <CommonButton
                    text="Register"
                    type="border"
                    bgColor="#1687C7"
                  />
                </Link>
              </div>
            </div>
          </div>
          {/* hamburger-menu  */}
          <div
            className="hidden max-xl:block text-primaryBlue text-[40px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {
              isMenuOpen ? <p className="text-[30px]"><GrClose /></p> : <IoMenuOutline />
            }

          </div>
        </div>
        {/* mobile menu  */}
        <div
          className={`hidden max-xl:block max-xl:w-[350px] custom-xs:!w-full max-xl:bg-white max-xl:h-full max-xl:fixed max-xl:top-0 max-xl:p-10 custom-xs:!pl-5 max-xl:z-[-1] shadow-lg duration-200 ease-in-out ${
            isMenuOpen ? "left-0" : "left-[-350px] custom-xs:left-[-100%]"
          }`}
        >
          <ul className="flex flex-col gap-4 mt-[70px]">
            {menuItems.map((item, index) => (
              <li
                key={item?.name}
                data-aos="fade-in"
                data-aos-delay={index * 100}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <NavLink to={item?.link} className="menu-item">
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* header actions  */}
          <div className="flex flex-col gap-3 mt-10">
            {/* actions  */}
            <ul className="flex d items-center gap-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <li data-aos="fade-in" data-aos-delay="100">
                <NavLink to={"/cart"} className="action-button">
                  <AiOutlineShoppingCart />
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="200">
                <NavLink to={"/join-community"} className="action-button">
                  <BiMessageDetail />
                </NavLink>
              </li>
              <li data-aos="fade-in" data-aos-delay="300">
                <NavLink to={"/ask-ai"} className="action-button">
                  <BsStars />
                </NavLink>
              </li>
            </ul>
            {/* buttons  */}
            <div className="flex items-center gap-3 mt-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div data-aos="fade-in" data-aos-delay="350">
                <Link to={"/login"}>
                  <CommonButton text="Login" type="fill" bgColor="#1687C7" />
                </Link>
              </div>
              <div data-aos="fade-in" data-aos-delay="400">
                <Link to={"/signup"}>
                  <CommonButton
                    text="Register"
                    type="border"
                    bgColor="#1687C7"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
