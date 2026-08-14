import { useContext } from 'react'
import './Navbar.css'
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {cartItems} = useContext(CartContext);

  return (
    <div className="navbar">
        <ul>
          <li><Link to={"/"}>Home</Link></li>

          <li>Blogs</li>
          <li>Contact</li>
          <li><Link to={"/cart"}>Cart {cartItems.length}</Link></li>
          <li>Api Cart</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
    </div>
  )
}

export default Navbar
