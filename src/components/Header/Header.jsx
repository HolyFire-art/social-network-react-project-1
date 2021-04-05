import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png' />
        </header>
    );
}

export default Header;