import s from './Navbar.module.css'; // s == classes

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a /* href='#' className={s.item_link} */>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <a /* href='#' className={s.item_link} */>Messages</a>
      </div>
      <div className={s.item}>
        <a /* href='#' className={s.item_link} */>News</a>
      </div>
      <div className={s.item}>
        <a href='#' /* className={s.item_link} */>Music</a>
      </div>
      <div className={s.item}>
        <a href='#' className={s.item_link}>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;