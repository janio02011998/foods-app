import Image from "next/image";
import { CartProduct } from "../_contexts/cart";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";

interface CartItemsProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemsProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* IMAGE AND INFO */}
        <div className="relative h-20 w-20 ">
          <Image
            fill
            className="rounded-lg object-cover"
            src={cartProduct.imageUrl}
            alt={cartProduct.name}
          />
        </div>

        <div className="space-y-1">
          <h3 className="text-xs">{cartProduct.name}</h3>

          <div className="flex items-center gap-1">
            <h4 className="text-sm font-semibold">
              {formatCurrency(calculateProductTotalPrice(cartProduct))}
            </h4>
            {cartProduct.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(Number(cartProduct.price))}
              </span>
            )}
          </div>

          {/* QUANTITY */}
        </div>
      </div>

      {/* BTN DELETE */}
    </div>
  );
};

export default CartItem;
