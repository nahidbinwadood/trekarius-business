import { Link } from 'react-router-dom';
// import PaginationCustom from '../common/PaginationCustom';
import ProductCard from '../HomePage/ProductCard';

function Products({ products }) {
  return (
    <div>
      <div className="grid grid-cols-3 custom-xl:grid-cols-2 custom-lg:grid-cols-2 custom-md:grid-cols-2 custom-sm:grid-cols-1 custom-xs:grid-cols-1 custom-xs:gap-4 gap-6">
        {products.map((product, index) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProductCard item={product} />
          </Link>
        ))}
      </div>
      <div className="mt-0">{/* <PaginationCustom /> */}</div>
    </div>
  );
}

export default Products;
