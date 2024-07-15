import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../Pages/Layout/Layout";
import MagicalPlaces from "../Pages/MagicalPlaces/MagicalPlaces.tsx";
import HomePage from './../Pages/HomePage/HomePage.tsx';
import MainPage from './../Pages/MainPage/MainPage.jsx';
import EachTourSinglePage from "../Pages/EachTourSinglePage/EachTourSinglePage.jsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectAllTours } from "../Store/AllToursSlice/allToursSlice.js";
import SecondHomePage from "../Pages/SecondHomePage/SecondHomePage.jsx";
import ContactPage from "../Pages/ContactPage/ContactPage.jsx";
import RegistrationPage from "../Pages/RegistrationPage/RegistrationPage.jsx";

const AppRouter = () => {
    const { isInSite } = useSelector(selectAllTours)
    const ScrollToTop = () => {
        const { pathname } = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [pathname]);
      
        return null;
      };

    return (
        <div>
            <Routes>
                {ScrollToTop()}
                <Route path="/" element={<Layout/>}>
                    <Route index element={isInSite ? <SecondHomePage/> : <HomePage/>}/>
                    <Route path="/plan$your$visits" element={<MainPage/>}/>
                    <Route path="/magical-places" element={<MagicalPlaces/>}/>
                    <Route path="/best$matches$tours" element={<EachTourSinglePage/>}/>
                    <Route path="/contact" element={<ContactPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default AppRouter;
