import { Product } from "@prisma/client";
import { useCart } from "../_contexts/cart";

const Cart = () => {
  const { products } = useCart();

  return (
    <>
      {products.map((product: Product) => (
        <div key={product.id}>
          {product.id} - {product.name}
        </div>
      ))}
    </>
  );
};

export default Cart;
