import "./NavBar.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="isdestymas">
      <h1>DRIVING INTO</h1>
      <ol>
        <li>
          <Link to="/">HOME </Link>
        </li>
        <li>
          <Link to="/events">EVENTS </Link>
        </li>
        <li>
          <Link to="/merch">MERCH </Link>{" "}
        </li>
        <li>
          <Link to="/community">COMMUNITY </Link>
        </li>
      </ol>
      <div className="buttonGroup">
        <Link to="/cart/" className="button">
          SHOPPING CART
        </Link>
        {localStorage.getItem("token") ? (
          <Link to="/profile" className="button">
            PROFILE
          </Link>
        ) : (
          <Link to="/login" className="button">
            LOG IN
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
