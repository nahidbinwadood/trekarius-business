import Bag from "../../assets/images/bag.png";
import { FaStar } from "react-icons/fa";

function Product() {
  return (
    <div className="p-8 custom-md:p-5 custom-sm:p-4 custom-xs:p-4 rounded-[16px] border border-borderColor">
      {/* product  */}
      <div className="flex custom-sm:flex-col custom-xs:flex-col items-center gap-10 max-md:gap-6 pb-8">
        <div className="w-full max-w-[306px] h-[200px] custom-xs:max-w-full custom-sm:max-w-full flex items-center justify-center bg-[#f5f6f7] rounded-[16px]">
          <img className="w-full h-full rounded-[12px]" src={Bag} alt="Bag" />
        </div>
        <div>
          <h1 className="text--sm custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px] text-headingColor font-bold mb-4">
            Moda 20L Backpack - Travl bag
          </h1>
          <div className="flex items-center gap-2 text-primaryOrange text-[20px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-4 text-[18px] w-[80%] custom-md:text-base custom-sm:text-base custom-xs:text-sm">Google Play Store, shortened to Play Store on the Home screen and App screen, is Google's official pre-installed app store on Android-certified devices.</p>
        </div>
      </div>
      {/* product images  */}
      <div className="grid grid-cols-3 custom-sm:grid-cols-1 custom-xs:grid-cols-1 gap-5 pb-8 border-b border-dashed border-borderColor">
        <img className="h-[300px] custom-xs:h-[240px] w-full object-cover rounded-[12px]" src="https://i.ibb.co.com/BgKn0zX/CAEDC530-F0-B6-4963-94-B1-C80-D2-D4-EAF39.jpg" alt="" />
        <img className="h-[300px] custom-xs:h-[240px] w-full object-cover rounded-[12px]" src="https://i.ibb.co.com/Jkn8zj6/B56-EDC68-BC3-F-4-D83-895-F-3-B6-E97-C02407.jpg" alt="" />
        <img className="h-[300px] custom-xs:h-[240px] w-full object-cover rounded-[12px]" src="https://i.ibb.co.com/njZLwLK/E9-D75622-D5-E7-47-C4-98-DF-92-C23-F33-EF7-F.jpg" alt="" />
      </div>
      {/* description  */}
      <div className="pt-8 custom-sm:pt-5 custom-xs:pt-5 custom-sm:pb-5 custom-xs:pb-5 pb-8 border-b border-dashed border-borderColor">
        <h4 className="text--sm mb-4 text-headingColor font-semibold custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">Comfort is Key:</h4>
        <p className="text-[18px] custom-md:text-base custom-sm:text-base custom-xs:text-base">When choosing an office chair, prioritize comfort. Look for chairs with ergonomic designs, adjustable features, and ample padding to ensure a comfortable seating experience, especially for long hours of work. Invest in a chair made from durable materials. A high-quality chair not only provides comfort but is also built to withstand daily use, ensuring longevity and value for your investment.</p>
      </div>
      <div className="pt-8 pb-8 custom-sm:pt-5 custom-xs:pt-5 custom-sm:pb-5 custom-xs:pb-5 border-b border-dashed border-borderColor">
        <h4 className="text--sm mb-4 text-headingColor font-semibold custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">Comfort is Key:</h4>
        <p className="text-[18px] custom-md:text-base custom-sm:text-base custom-xs:text-base">When choosing an office chair, prioritize comfort. Look for chairs with ergonomic designs, adjustable features, and ample padding to ensure a comfortable seating experience, especially for long hours of work. Invest in a chair made from durable materials. A high-quality chair not only provides comfort but is also built to withstand daily use, ensuring longevity and value for your investment.</p>
      </div>
      <div className="pt-8 pb-8 custom-sm:pt-5 custom-xs:pt-5 custom-sm:pb-5 custom-xs:pb-5">
        <h4 className="text--sm mb-4 text-headingColor font-semibold custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">Comfort is Key:</h4>
        <p className="text-[18px] custom-md:text-base custom-sm:text-base custom-xs:text-base">When choosing an office chair, prioritize comfort. Look for chairs with ergonomic designs, adjustable features, and ample padding to ensure a comfortable seating experience, especially for long hours of work. Invest in a chair made from durable materials. A high-quality chair not only provides comfort but is also built to withstand daily use, ensuring longevity and value for your investment.</p>
      </div>
    </div>
  );
}

export default Product;
