import Image from "next/image";
import { CartProduct } from "../_contexts/cart";

interface CartItemsProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemsProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* IMAGE AND INFO */}
      <div className="relative h-20  w-20 ">
        <Image
          fill
          className="rounded-lg object-cover"
          src={cartProduct.imageUrl}
          alt={cartProduct.name}
        />
      </div>

      {/* BTN DELETE */}
    </div>
  );
};

export default CartItem;
