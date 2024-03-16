import { Link, NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/news'}>News</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/person/:id'}>Person</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/persons'}>Persons</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;