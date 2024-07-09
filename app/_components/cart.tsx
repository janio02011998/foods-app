import { useCart } from "../_contexts/cart";
import CartItem from "./cart-item";

const Cart = () => {
  const { products } = useCart();

  return (
    <div className="py-5">
      <div className="space-y-4">
        {products.map((product) => (
          <CartItem key={product.id} cartProduct={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
