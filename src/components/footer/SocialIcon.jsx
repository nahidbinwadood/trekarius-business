import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

function SocialIcon() {
  return (
    <ul className="flex items-center gap-3">
        <li data-aos="fade-in" data-aos-delay="100">
            <Link to={'/'} className="social-icon"><FaFacebook /></Link>
        </li>
        <li data-aos="fade-in" data-aos-delay="200">
            <Link to={'/'} className="social-icon"><FaTwitter /></Link>
        </li>
        <li data-aos="fade-in" data-aos-delay="200">
            <Link to={'/'} className="social-icon"><FaInstagram /></Link>
        </li>
        <li data-aos="fade-in" data-aos-delay="300">
            <Link to={'/'} className="social-icon"><FaSkype /></Link>
        </li>
    </ul>
  )
}

export default SocialIcon;
