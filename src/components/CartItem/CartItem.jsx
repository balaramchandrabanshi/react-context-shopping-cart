import "./CartItem.css";

const CartItem = ({item}) => {
  return (
    <div className="cart">
      <img src={item.image} alt="" />
      <h2>{item.name}</h2>
      <p>{`Rs. ${item.price}`}</p>
      <div className="cart-btn">
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default CartItem;
