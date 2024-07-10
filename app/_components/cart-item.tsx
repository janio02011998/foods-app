import Image from "next/image";
import { CartProduct, useCart } from "../_contexts/cart";
import { calculateProductTotalPrice, formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";

interface CartItemsProps {
  cartProduct: CartProduct;
}

const CartItem = ({ cartProduct }: CartItemsProps) => {
  const {
    increaseProductQuantity,
    decreaseProductQuantity,
    removeProductFromCart,
  } = useCart();

  const handleIncreaseQuantityClick = () =>
    increaseProductQuantity(cartProduct.id);

  const handleDecreaseQuantityClick = () =>
    decreaseProductQuantity(cartProduct.id);

  const handleRemoveProductClick = () => {
    removeProductFromCart(cartProduct.id);
  };

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
              {formatCurrency(
                calculateProductTotalPrice(cartProduct) * cartProduct.quantity,
              )}
            </h4>
            {cartProduct.discountPercentage > 0 && (
              <span className="text-xs text-muted-foreground line-through">
                {formatCurrency(
                  Number(cartProduct.price) * cartProduct.quantity,
                )}
              </span>
            )}
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-3 text-center">
            <Button
              onClick={handleDecreaseQuantityClick}
              size="icon"
              className="h-8 w-8 border border-solid border-muted-foreground"
              variant="ghost"
            >
              <ChevronLeftIcon size={18} />
            </Button>
            <span className="w-4 text-sm">{cartProduct.quantity}</span>
            <Button
              size={"icon"}
              onClick={handleIncreaseQuantityClick}
              className="h-8 w-8"
            >
              <ChevronRightIcon size={18} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size="icon"
        variant="ghost"
        className="h-8 w-8 border border-solid border-muted-foreground"
      >
        <TrashIcon onClick={handleRemoveProductClick} size={18} />
      </Button>
      {/* BTN DELETE */}
    </div>
  );
};

export default CartItem;
