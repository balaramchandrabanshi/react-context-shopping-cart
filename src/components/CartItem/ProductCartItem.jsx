import { useContext } from "react";
import "./ProductCartItem.css";
import CartContext from "../../context/CartContext";

const ProductCartItem = ({ item }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const isInCart = cartItems.some(cartItem => cartItem.id === item.id);

  return (
    <div className="cart">
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
      <p>{`Rs. ${item.price}`}</p>

      <div className="cart-btn">
        <button
          onClick={() => {
            addToCart(item);
            console.log(cartItems);
          }}
        >
          Add to Cart
        </button>
          {isInCart && <button onClick={() => {removeFromCart(item.id)}} >Remove</button>}
      </div>
    </div>
  );
};

export default ProductCartItem;
