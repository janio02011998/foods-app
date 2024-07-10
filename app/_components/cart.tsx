import { useCart } from "../_contexts/cart";
import { formatCurrency } from "../_helpers/price";
import CartItem from "./cart-item";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

const Cart = () => {
  const { products, totalPrice, subTotalPrice, totalDiscounts } = useCart();

  return (
    <div className="py-5">
      <div className="space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartProduct={product} />
        ))}
      </div>

      <div className="mt-6">
        <Card>
          <CardContent className="space-y-4 p-5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Subtotal</span>
              <span>{formatCurrency(subTotalPrice)}</span>
            </div>

            <Separator className="h-[0.5px] bg-muted-foreground" />

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Descontos</span>
              <span>- {formatCurrency(totalDiscounts)}</span>
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Entrega</span>
              {Number(products[0].restaurant.deliveryFee) === 0 ? (
                <span className="uppercase text-primary">Grátis</span>
              ) : (
                formatCurrency(Number(products[0].restaurant.deliveryFee))
              )}
            </div>

            <Separator />

            <div className="flex items-center justify-between text-xs font-semibold">
              <span>Total</span>
              <span>{formatCurrency(totalPrice)}</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
