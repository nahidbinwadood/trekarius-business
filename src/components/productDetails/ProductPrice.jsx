function ProductPrice() {
  return (
    <div className="product-price-box p-8 custom-xs:p-4 rounded-[16px] border border-borderColor">
      <p className="text-[18px] font-medium mb-4">Price</p>
      <p className="text-[32px] custom-xs:text-[26px] font-semibold text-headingColor mt-3 pb-8 border-b border-dashed border-borderColor">$455</p>
      <ul>
        <li>
            <p>Base Price</p>
            <p>$110</p>
        </li>
        <li className="pb-4 border-b border-dashed border-borderColor">
            <p>State Tax</p>
            <p>$15</p>
        </li>
        <li>
            <p>Total</p>
            <p>$125</p>
        </li>
      </ul>
      <button className="mt-10 w-full p-3 custom-xs:p-[10px] custom-xs:text-sm bg-[#1E1E1E] rounded-[100px] text-center border-[2px] text-white border-[#1E1E1E] duration-200 ease-in-out hover:bg-transparent hover:text-[#1E1E1E] font-semibold">Add to cart</button>
    </div>
  );
}

export default ProductPrice;
