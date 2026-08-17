import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length <= 0)
    return (
      <>
        <h1>No Items Added to Cart</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </>
    );
  else
    return (
      <div className="cart-items">
        <h1>Your Cart Added Products</h1>
        <div className="items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item}></CartItem>
          ))}
        </div>
      </div>
    );
};

export default Cart;
