import { NavLink } from "react-router-dom";

const Menu = () => {
    const changeClassName = ({ isActive }) => isActive ? 'activeLink' : 'link';

    return (
        <nav>
            <NavLink className={changeClassName} to='.' end>Home</NavLink>
            <NavLink className={changeClassName} to='about'>About</NavLink>
            <NavLink className={changeClassName} to='contacts'>Contacts</NavLink>
            <NavLink className={changeClassName} to='courses'>Courses</NavLink>
        </nav>
    );
};

export default Menu;
