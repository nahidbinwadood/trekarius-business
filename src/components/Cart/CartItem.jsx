import { useContext } from "react";
import Bag from "../../assets/images/bag.png";
import { IoClose } from "react-icons/io5";
import { CartContext } from "../context";

function CartItem({ item }) {
  const subTotal = item.quantity * item.price;
  const { increaseQuantity, decreaseQuantity, updateQuantity, removeItem } =
    useContext(CartContext);

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className={`cart-item grid grid-cols-5 custom-sm:block custom-xs:block items-center pt-4 pb-6 border-b border-borderColor custom-xs:relative custom-sm:relative ${item.id === 1 ? 'pt-0' : 'pt-4'}`} data-aos="fade-up">
      {/* product  */}
      <div className="flex items-center gap-4">
        <div className="h-[70px] min-w-[106px] max-w-[106px] flex items-center justify-center bg-white rounded-[8px]">
          <img
            className="h-[51px] w-[52px] custom-xl:w-full custom-xl:h-full custom-sm:h-full custom-sm:w-full custom-sm:rounded-[8px] custom-xs:h-full custom-xs:w-full custom-xs:rounded-[8px] custom-xl:rounded-[8px]"
            src={Bag}
            alt="Bag"
          />
        </div>
        <p className="text-base text-headingColor font-medium">{item?.name}</p>
      </div>
      {/* price  */}
      <p className="text-center font-medium text-headingColor">
        <div className="flex items-center justify-center custom-sm:justify-start custom-xs:justify-start custom-sm:mt-5 custom-xs:mt-5">
          <p className="hidden custom-sm:block custom-xs:block mr-1">Price:</p>
          ${item?.price}
        </div>
      </p>
      {/* quantitty  */}
      <div className="w-full flex items-center justify-center custom-sm:justify-start custom-sm:mt-5 custom-xs:justify-start custom-xs:mt-5">
        <div className="text-center w-[102px] h-[56px] custom-xs:!h-10 bg-white rounded-[8px] flex items-center justify-center">
          <button
            className="text-[30px]"
            onClick={() => increaseQuantity(item.id)}
          >
            +
          </button>
          <input
            className="w-[40px] mx-1 text-center ml-2 focus:outline-none"
            type="number"
            value={item?.quantity}
            onChange={handleInputChange}
            readOnly
          />
          <button
            className="text-[30px]"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
        </div>
      </div>
      {/* sub total  */}
      <p className="text-center font-medium text-headingColor">
        <div className="flex items-center justify-center custom-sm:justify-start custom-sm:mt-5 custom-xs:justify-start custom-xs:mt-5">
            <p className="hidden custom-sm:block custom-xs:block mr-1">Subtotal: </p>${subTotal}
        </div>
      </p>
      {/* remove  */}
      <div
        className="flex flex-col items-center text-[24px] cursor-pointer custom-sm:absolute custom-sm:top-3 custom-sm:right-0 custom-xs:absolute custom-xs:top-2 custom-xs:right-0"
        onClick={() => removeItem(item.id)}
      >
        <IoClose />
      </div>
    </div>
  );
}

export default CartItem;
