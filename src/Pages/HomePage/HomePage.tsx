import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import video from '../../Videos/video1.mp4';
import './homePage.css'
import './sda.ts'
import { useDispatch } from 'react-redux';
import { footerRendering, isInSiteChanging, navbarRendering } from '../../Store/AllToursSlice/allToursSlice.js';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();

    return(
        <div className="HomePage">
            <video autoPlay loop muted playsInline className="background-video">
                <source
                    src={video}
                    type="video/mp4" />
            </video>
            <section className="content">
              <h1>Your holidays in the mountains</h1>
              <Link className="btn light" to='/' onClick={() => {dispatch(isInSiteChanging()); dispatch(navbarRendering(true)); dispatch(footerRendering(true))}}></Link>
            </section>
        </div>
    )
}

export default HomePage;
