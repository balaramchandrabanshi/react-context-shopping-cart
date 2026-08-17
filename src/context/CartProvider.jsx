import { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems( (prev) => {
        const exists = prev.some(cartItem => cartItem.id === item.id)

        if (exists) {
          return prev.map(cartItem => {
            if (cartItem.id === item.id) {
              return {...cartItem, quantity: cartItem.quantity + 1}
            }
            return cartItem;
          })
        }

        return [...prev, {...item, quantity: 1},]
      })
    }

    const increaseQuantity = (id) => {
      setCartItems(prev => {
        return prev.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        })
      })
    }

    const decreaseQuantity = (id) => {
      setCartItems(prev => {
        return prev.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            }
          }
          return item;
        })
      })
    }

    const removeFromCart = (id) => {
      setCartItems(prev => prev.filter(item => item.id !== id))
    }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
