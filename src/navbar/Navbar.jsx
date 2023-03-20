import "./index.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="Navbar__List">
        <li>Staff</li>
        <li>Affiliates</li>
        <li>Legends</li>
      </ul>
      <img
        className="Navbar__Image"
        src="https://images.vexels.com/media/users/3/266660/isolated/preview/b20f1ec692e9b421a8e8c11e97e16af5-fancy-cocktail-glass.png"
        alt="logo"
      />
      <button className="Navbar__Button">Prenota</button>
    </div>
  );
};

export default Navbar;
