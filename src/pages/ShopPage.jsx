import Container from '@/components/container/Container';
import FilterSidebar from '@/components/shop/FilterSidebar';
import Products from '@/components/shop/Products';
import bag from '../assets/images/updated/4.jpeg';
const products = [
  {
    id: 1,
    imgFront: bag,
    imgBack: 'https://i.ibb.co.com/Tr7m6m4/file-28-1.png',
    title: 'Trekarius 35L - Travel bag',
    prevPrice: '199',
    currentPrice: '165',
  },
];

function ShopPage() {
  return (
    <section className="pt-[150px] custom-xl:pt-[120px] custom-md:pt-[100px] custom-sm:pt-[100px] custom-xs:pt-[75px] pb-[100px] custom-xs:pb-[60px]">
      <Container>
        <div className="flex items-start gap-10 w-full max-md:block">
          <div className="w-[20%] custom-2xl:w-[25%] custom-xl:w-[35%] custom-lg:w-[35%] max-md:w-full">
            <FilterSidebar />
          </div>
          <div className="w-[80%] custom-2xl:w-[75%] custom-xl:w-[65%%] custom-lg:w-[65%] max-md:w-full max-md:mt-8 custom-xs:!mt-5">
            <Products products={products} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ShopPage;
