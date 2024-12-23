import Container from "@/components/container/Container";
import Product from "@/components/productDetails/Product";
import ProductPrice from "@/components/productDetails/ProductPrice";

function ProductDetailsPage() {
  return (
    <section className="pt-[150px] custom-md:pt-[100px] pb-[100px] px-20 custom-2xl:px-0 custom-xl:px-0 custom-lg:px-0 max-md:px-0 custom-sm:pt-[100px] custom-xs:pt-[80px] custom-sm:pb-[60px] custom-xs:pb-[60px]">
        <Container>
            <div className="flex max-md:flex-col items-start gap-6">
                <div className="w-[75%] max-md:w-full">
                    <Product />
                </div>
                <div className="w-[25%] max-md:w-full">
                    <ProductPrice />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ProductDetailsPage;
