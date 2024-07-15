import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import { useDispatch } from 'react-redux';
import { isInSiteChanging } from '../../Store/AllToursSlice/allToursSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    return(
        <header>
            <Link to='/'>
                <img
                    src="https://github.com/ecemgo/today-i-learned-app/assets/13468728/4f2923ea-9eca-4221-8b18-7198f78fd04e"
                    alt="logo"
                    className="logo"
                />
            </Link>
            <nav className="navbar">
              <NavLink className="nav-item" to='/' onClick={() => dispatch(isInSiteChanging())}>Home</NavLink>
              <NavLink className="nav-item" to='/plan$your$visits'>Plan Your Visit</NavLink>
              <NavLink className="nav-item" to='/magical-places'>Best Places</NavLink>
              <NavLink className="nav-item" to='/contact'>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Navbar;
