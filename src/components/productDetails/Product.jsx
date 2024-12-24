import { FaStar } from 'react-icons/fa';
import ProductSlider from './ProductSlider';
import img1 from '@/assets/images/product/1.jpg';
import img2 from '@/assets/images/product/2.jpg';
import img3 from '@/assets/images/product/3.jpg';
import img4 from '@/assets/images/product/4.jpg';
import img5 from '@/assets/images/product/5.jpg';
import img6 from '@/assets/images/product/6.jpg';
import img7 from '@/assets/images/product/7.jpg';
import img8 from '@/assets/images/product/8.jpg';
import img9 from '@/assets/images/product/9.jpg';
const productImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Product() {
  return (
    <div className="p-8 custom-md:p-5 custom-sm:p-4 custom-xs:p-4 rounded-[16px] border border-borderColor">
      {/* product  details */}
      <div>
        {/* slider */}
        <ProductSlider productImages={productImages} />

        {/* description */}
        <div className="my-5 md:my-8 lg:my-10">
          <h1 className="text--sm custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px] text-headingColor font-bold mb-4">
            Trekarius 35L - Travel bag
          </h1>
          <div className="flex items-center gap-2 text-primaryOrange text-[20px]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="mt-4 text-[18px] w-[80%] custom-md:text-base custom-sm:text-base custom-xs:text-sm">
            Google Play Store, shortened to Play Store on the Home screen and
            App screen, is Google&lsquo;s official pre-installed app store on
            Android-certified devices.
          </p>
        </div>
      </div>

      {/* description  */}
      <div className="pt-8 custom-sm:pt-5 custom-xs:pt-5 custom-sm:pb-5 custom-xs:pb-5 pb-8 border-y border-dashed border-borderColor">
        <h4 className="text--sm mb-4 text-headingColor font-semibold custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">
          Comfort is Key:
        </h4>
        <p className="text-[18px] custom-md:text-base custom-sm:text-base custom-xs:text-base">
          When choosing an office chair, prioritize comfort. Look for chairs
          with ergonomic designs, adjustable features, and ample padding to
          ensure a comfortable seating experience, especially for long hours of
          work. Invest in a chair made from durable materials. A high-quality
          chair not only provides comfort but is also built to withstand daily
          use, ensuring longevity and value for your investment.
        </p>
      </div>
      <div className="pt-8 pb-8 custom-sm:pt-5 custom-xs:pt-5 custom-sm:pb-5 custom-xs:pb-5 border-b border-dashed border-borderColor">
        <h4 className="text--sm mb-4 text-headingColor font-semibold custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">
          Style and Aesthetics:
        </h4>
        <p className="text-[18px] custom-md:text-base custom-sm:text-base custom-xs:text-base">
          Consider the aesthetics of the chair to complement the overall design
          of your workspace. Whether you prefer a modern, sleek look or a more
          traditional style, there are office chairs available to suit various
          tastes.
        </p>
      </div>
      <div className="pt-8 pb-8 custom-sm:pt-5 custom-xs:pt-5 custom-sm:pb-5 custom-xs:pb-5">
        <h4 className="text--sm mb-4 text-headingColor font-semibold custom-md:text-[20px] custom-sm:text-[20px] custom-xs:text-[18px]">
          Support for Good Posture:
        </h4>
        <p className="text-[18px] custom-md:text-base custom-sm:text-base custom-xs:text-base">
          Look for chairs that promote good posture. Proper lumbar support and a
          design that encourages a neutral spine position contribute to
          maintaining a healthy and comfortable seated posture. Chairs with
          swivel functionality and smooth mobility are practical for dynamic
          work environments. This allows users to easily reach different areas
          of their workspace without straining.
        </p>
      </div>
    </div>
  );
}

export default Product;
