import { useState } from "react";
import logo from "../../Images/1.png";

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(true);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Food Fire Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <i className="bi bi-bag"></i>
          </li>
          <li>
            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  setIsLoggedin(false);
                }}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-outline-success"
                onClick={() => {
                  setIsLoggedin(true);
                }}
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
