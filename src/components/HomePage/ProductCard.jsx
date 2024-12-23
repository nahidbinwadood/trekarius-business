import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ item }) {
  const [isHoverd, setIsHoverd] = useState(false);
  return (
    <div
      className={`bg-white rounded-[20px] overflow-hidden border duration-200 ease-in-out ${isHoverd ? 'border-primaryOrange' : 'border-[rgba(0,0,18,0.08)]'}`}
      onMouseEnter={() => setIsHoverd(true)}
      onMouseLeave={() => setIsHoverd(false)}
    >
      <div className="bg-[#ececec] rounded-[12px]">
        <img
          className="w-full h-[418px] custom-2xl:h-[350px] custom-xl:h-[350px] max-xl:h-[330px] custom-xs:!h-[300px] object-cover mx-auto rounded-[12px]"
          src={item.imgFront}
          alt={item.title}
        />
      </div>
      <div className="p-6">
        <Link to={`/products/${item.id}`} className="inline-block text-[20px] max-md:text-[18px] font-semibold text-headingColor duration-200 ease-in-out hover:underline">{item.title}</Link>
        <div className="flex items-center gap-[6px] mt-6">
          <p className="text-[18px] font-bold text-headingColor ">
            £{item.currentPrice}
          </p>
          <del className="text-[18px] font-bold text-paragraphColor opacity-40">
            £{item.prevPrice}
          </del>
        </div>
        {/* button  */}
        <div className="mt-6">
          <Link
            to={"/"}
            className="inline-block py-3 px-6 max-md:py-[10px] max-md:px-5 max-md:text-sm font-semibold bg-headingColor rounded-[40px] text-white border-[2px] border-headingColor duration-200 ease-in-out hover:bg-transparent hover:text-headingColor"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
