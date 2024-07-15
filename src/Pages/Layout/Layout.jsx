import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from './../../Components/Footer/Footer';
import { useSelector } from "react-redux";
import { selectAllTours } from "../../Store/AllToursSlice/allToursSlice";

const Layout = () => {
    const {navbarRendering, footerRendering} = useSelector(selectAllTours)
    return(
        <div>
            {navbarRendering && <Navbar/>}
            <Outlet/>
            {footerRendering && <Footer/>}
        </div>
    )
}

export default Layout;