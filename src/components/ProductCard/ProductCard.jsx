import "./ProductCard.css";
import products from "../../data/product";
import ProductCartItem from '../CartItem/ProductCartItem'

const ProductCard = () => {
  return (
    <div className="productCard">
      {products.map(item => <ProductCartItem key={item.id} item={item}></ProductCartItem>)}
    </div>
  );
};

export default ProductCard;
