import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/CartContext";

const CartItem = ({ item }) => {

  const {increaseQuantity, decreaseQuantity} = useContext(CartContext)

  return (
    <div className="cart-item">
  <img src={item.image} alt={item.name} />

  <div className="cart-item-info">
    <h2>{item.name}</h2>

    <p>Rs. {item.price}</p>

    <div className="quantity">
      <button onClick={() => {decreaseQuantity(item.id)}}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => {increaseQuantity(item.id)}}>+</button>
    </div>
  </div>
</div>
  );
};

export default CartItem;