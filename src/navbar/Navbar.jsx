import styles from "./index.module.scss";

const Navbar = ({ SetReservationFormActive }) => {
  const onhandleClick = () => SetReservationFormActive(true);
  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavbarList}>
        <li>Staff</li>
        <li>Affiliates</li>
        <li>Legends</li>
      </ul>
      <img
        className={styles.NavbarImage}
        src="https://images.vexels.com/media/users/3/266660/isolated/preview/b20f1ec692e9b421a8e8c11e97e16af5-fancy-cocktail-glass.png"
        alt="logo"
      />
      <button
        onClick={SetReservationFormActive}
        className={styles.NavbarButton}
      >
        Prenota
      </button>
    </div>
  );
};

export default Navbar;
