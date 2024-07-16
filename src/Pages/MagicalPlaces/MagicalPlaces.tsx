import React, { useEffect } from 'react'
import './magicalPlaces.css'
import { useDispatch, useSelector } from 'react-redux'
import { footerRendering, isInSiteChanging, navbarRendering, selectAllTours, slidesToLeft, slidesToRight} from '../../Store/AllToursSlice/allToursSlice'
import SingleMagicalPlacesSlide from '../../Components/SingleMagicalPlacesSlide/SingleMagicalPlacesSlide'
import { createGlobalStyle } from 'styled-components';
import PageTitle from '../../Components/PageTitle/PageTitle'

const MagicalPlaces:React.FC = () => {
  const {slideTours, tours, slideIndex} = useSelector(selectAllTours)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(footerRendering(false));
    dispatch(isInSiteChanging());
    dispatch(navbarRendering(true))
  }, [])
  
  const GlobalStyle = createGlobalStyle`
  html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 3vmin;
}

html {
  background: #151515;
  color: #fff;
  overflow: hidden;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

  return (
    <div className="slides">
      <PageTitle title={'Best Places'}/>
      <GlobalStyle/>
        <button onClick={() => dispatch(slidesToLeft())}>‹</button>

        {[...slideTours, ...slideTours, ...slideTours].map((slide, i) => {
          let offset = slideTours.length + (slideIndex - i);
          return <SingleMagicalPlacesSlide slide={slide} offset={offset} tour={tours[slide.id-1]} key={i} />;
        })}
        <button onClick={() => dispatch(slidesToRight())}>›</button>
      </div>
  );
}

export default MagicalPlaces;
