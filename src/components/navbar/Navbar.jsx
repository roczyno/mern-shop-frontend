import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">Shop</div>
      <div className="right">
        <span>Home</span>
        <span>About</span>
        <span>Contact</span>
        <span>Login</span>
      </div>
    </div>
  );
};

export default Navbar;
