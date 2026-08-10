import "./ProductCard.css";
import products from "../../data/product";
import CartItem from "../CartItem/CartItem";

const ProductCard = () => {
  return (
    <div className="productCard">
      {products.map(item => <CartItem key={item.id} item={item}></CartItem>)}
    </div>
  );
};

export default ProductCard;
