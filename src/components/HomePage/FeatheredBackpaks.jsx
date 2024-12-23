import Container from "../container/Container";
import ProductCard from "./ProductCard";

const products = [
    {
        id:1,
        imgFront:'https://i.ibb.co.com/kXYzwVk/AB46-DF0-A-1-C46-4144-89-B5-2-E7-ECFEE3-A69.jpg',
        imgBack:'https://i.ibb.co.com/kXYzwVk/AB46-DF0-A-1-C46-4144-89-B5-2-E7-ECFEE3-A69.jpg',
        title:'Trekrius 35L - Travel bag',
        prevPrice:'199',
        currentPrice:'165'
    },
]

function FeatheredBackpaks() {
  return (
    <section className="pt-[160px] custom-xl:pt-[110px] max-xl:pt-[110px] pb-[120px] px-10 max-md:px-0 max-md:py-[80px] custom-xs:!py-[60px]">
        <Container>
            {/* section title  */}
            <div className="mb-10 custom-xs:mb-6">
                <h3 className="text--xl" data-aos="fade-up">Featured Backpaks</h3>
            </div>
            <div className="grid grid-cols-4 custom-2xl:grid-cols-3 custom-xl:grid-cols-3 max-xl:grid-cols-2 custom-sm:!grid-cols-1 custom-xs:!grid-cols-1 gap-5">
                {
                    products.map((item,index) => (
                        <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <ProductCard item={item} />
                        </div>
                    ))
                }
            </div>
        </Container>
    </section>
  )
}

export default FeatheredBackpaks;
