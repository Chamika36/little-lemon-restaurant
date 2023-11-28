import logo from '../Logo.svg';

const Nav = () => {
    return (
        <nav>
            <ul>
                <img src={logo} alt="logo" />
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/projects">Menu</a>
                </li>
                <li>
                    <a href="/contact">Reservations</a>
                </li>
                <li>
                    <a href="/contact">Order Online</a>
                </li>
                <li>
                    <a href="/contact">Log in</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;