import { useContext } from "react"
import { CartContext } from "../context"


function TotalCart() {
    const {subTotalValue} = useContext(CartContext)
    const totalValue = subTotalValue + 15;
  return (
    <div className="total-cart w-[416px] custom-xs:w-full p-8 custom-xs:p-4 rounded-[16px] bg-[#F6F6F6] ml-auto">
        <h4 className="text--sm text-headingColor mb-[30px]">Cart Total</h4>
        <ul className="py-[30px] border-b border-t border-dashed border-borderColor">
            <li>
                <p>Subtotal</p>
                <p>£{subTotalValue}</p>
            </li>
            <li>
                <p>Shipping</p>
                <p>£15</p>
            </li>
            <li>
                <p>Total</p>
                <p>£{totalValue}</p>
            </li>
        </ul>
        <button className="mt-[30px] py-3 px-6 rounded-[70px] bg-primaryOrange font-semibold text-white border-[2px] border-primaryOrange duration-200 ease-in-out hover:bg-transparent hover:text-primaryOrange custom-xs:text-sm custom-xs:py-[10px]">Checkout</button>
    </div>
  )
}

export default TotalCart