import { useCart } from "../_contexts/cart";
import { formatCurrency } from "../_helpers/price";
import CartItem from "./cart-item";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface CartProps {
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (isOpen: boolean) => void;
}

// eslint-disable-next-line no-unused-vars
const Cart = ({ setIsOpen }: CartProps) => {
  const { products, totalPrice, subTotalPrice, totalDiscounts } = useCart();

  return (
    <div className="flex h-full flex-col py-5">
      {products.length > 0 ? (
        <>
          <div className="flex-auto space-y-4">
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

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Descontos</span>
                  <span>- {formatCurrency(totalDiscounts)}</span>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Entrega</span>
                  {Number(products?.[0].restaurant.deliveryFee) === 0 ? (
                    <span className="uppercase text-primary">Grátis</span>
                  ) : (
                    formatCurrency(Number(products?.[0].restaurant.deliveryFee))
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
          <Button className="mt-6 w-full">Finalizar Pedido</Button>
        </>
      ) : (
        <h2 className="text-left font-medium">Sua sacola está vazia.</h2>
      )}
    </div>
  );
};

export default Cart;
