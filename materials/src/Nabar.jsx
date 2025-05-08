import CartPage from './cart';
import Footer from './Footer';
import './Navbar.css';
import { Navigate, useNavigate } from 'react-router-dom';

function Navbar() {

const navigate = useNavigate();
  const Welcome= () => {
    navigate('/')
  };

  const turn= () => {
    navigate('/login')
  };

  const off= () => {
    navigate('/Footer')
  };
  const the= () => {
    navigate('/Cart')
  };
  

  return (
    <nav className="navbar">
      <div className="logo">
      <img   class="small-img" src="https://geo-media.beatport.com/image_size/500x500/98f6e518-3083-4512-87c6-3161a279dbda.jpg"/>
      <figcaption>KMT Building Solutions </figcaption>
      </div>
      <ul className="navbar-links">
        <button onClick={Welcome}>Home</button>
        <button onClick={off}>About Us</button>
        <button onClick={turn}>Login</button>
        <button onClick={turn}>Products</button>
        <button onClick={the}className="cart-icon">🛒</button>
      </ul>
    </nav>
  );
}

export default Navbar;
