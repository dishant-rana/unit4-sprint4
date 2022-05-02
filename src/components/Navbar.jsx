import { Link } from "react-router-dom";
import "../App.css";
export const Navbar = () => {
  const men = "men";
  const women = "women";
  const kids = "kids";
  const homedecor = "homedecor";
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to={`/products/${men}`}>Men</Link>
        <Link to={`/products/${women}`}>Women</Link>
        <Link to={`/products/${kids}`}>Kids</Link>
        <Link to={`/products/${homedecor}`}>HomeDecor</Link>
      </nav>
    </>
  );
};
