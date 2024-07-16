import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import { useDispatch } from 'react-redux';
import { isInSiteChanging } from '../../Store/AllToursSlice/allToursSlice';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const dispatch = useDispatch();
    const [screenSize, setScreenSize] = useState(false) 
    const [frontMenuActivation, setFrontMenuActivation] = useState(false)
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        if(window.innerWidth < 700) {
            setScreenSize(true)
        } else {
            setScreenSize(false)
        }
    }, [])
    
    let timer;

    const handlerChangeFrontMenu = () => {
        clearTimeout(timer)
        let x = frontMenuActivation;
        x = !x
        setFrontMenuActivation(x)
        setAnimation(false)
    }

    const handlerCloseFrontMenu = () => {
        setAnimation(true)
        timer = setTimeout(() => {
            setFrontMenuActivation(false)
        }, 400)
    }
    
    return(
        <header>
            <Link to='/'>
                <img
                    src="https://codewithsadee.github.io/tourly/assets/images/logo.svg"
                    alt="logo"
                    className="logo"
                />
            </Link>
            {screenSize ? 
            <label class="burger" for="burger">
                <input type="checkbox" id="burger" onChange={frontMenuActivation ? handlerCloseFrontMenu : handlerChangeFrontMenu}/>
                <span></span>
                <span></span>
                <span></span>
            </label>
            :
            <nav className="navbar">
              <NavLink className="nav-item" to='/' onClick={() => dispatch(isInSiteChanging())}>Home</NavLink>
              <NavLink className="nav-item" to='/plan$your$visits'>Plan Your Visit</NavLink>
              <NavLink className="nav-item" to='/magical-places'>Best Places</NavLink>
              <NavLink className="nav-item" to='/contact'>Contact</NavLink>
            </nav> 
            }
            {frontMenuActivation && <div className='frontMenu' style={{animation: animation ? 'frontMenuCloseAnimation 1.5s' : `frontMenuAnimation 1s`}}>
                <NavLink className="nav-item" to='/' onClick={() => dispatch(isInSiteChanging())}>Home</NavLink>
                <NavLink className="nav-item" to='/plan$your$visits'>Plan Your Visit</NavLink>
                <NavLink className="nav-item" to='/magical-places'>Best Places</NavLink>
                <NavLink className="nav-item" to='/contact'>Contact</NavLink>
            </div>}
        </header>
    )
}

export default Navbar;
