import logo from "../../Images/1.png";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
