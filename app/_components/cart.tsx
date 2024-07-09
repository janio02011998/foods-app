import { useCart } from "../_contexts/cart";
import CartItem from "./cart-item";

const Cart = () => {
  const { products } = useCart();

  return (
    <>
      {products.map((product) => (
        <CartItem key={product.id} cartProduct={product} />
      ))}
    </>
  );
};

export default Cart;
