import CartHeader from "@/components/Cart/CartHeader";
import CartList from "@/components/Cart/CartList";
import PromoCode from "@/components/Cart/PromoCode";
import TotalCart from "@/components/Cart/TotalCart";
import Container from "@/components/container/Container";

function CartPage() {
  return (
    <section className="pt-[120px] custom-xs:pt-[80px] custom-xs:pb-[60px] pb-[100px] min-h-screen">
      <Container>
        <div>
          <div className="p-8 custom-xl:p-5 max-md:p-5 bg-white rounded-[16px] border border-borderColor">
            <div className="p-8 custom-sm:p-4 custom-xs:p-4 custom-xl:p-5 custom-md:p-5 bg-[#F6F6F6] rounded-[16px] border border-borderColor custom-xl:overflow-x-auto custom-lg:overflow-x-auto custom-md:overflow-x-auto">
              <div className="custom-xl:w-[1200px] custom-lg:w-[1200px] custom-md:w-[1200px] cart-box">
                <CartHeader />
                <CartList />
              </div>
            </div>
            <div className="w-[460px] custom-sm:w-full custom-xs:w-full mt-[26px]" data-aos="zoom-in">
              <PromoCode />
            </div>
            <div className="mt-14" data-aos="fade-up">
              <TotalCart />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CartPage;
