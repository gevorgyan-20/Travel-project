import React from 'react'
import UseTilt from '../../Hook/UseTilt';
import '../../Pages/MagicalPlaces/magicalPlaces.css'
import { Link, useNavigate } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';


const SingleMagicalPlacesSlide = ({ slide, offset, tour }) => {
    const navigate = useNavigate();
    const active = offset === 0 ? true : null;
    const ref = UseTilt(active);
    const OnlyMagicalSingleSlide = createGlobalStyle`
    a {
      text-decoration: none;
      color: unset
    }
    `

    return (
        <div 
          ref={ref}
          className="slide"
          data-active={active}
          style={{
            "--offset": offset,
            "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
          }}
        >
          <OnlyMagicalSingleSlide/>
          <div
            className="slideBackground"
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          />
          <div
            className="slideContent"
            style={{
              backgroundImage: `url('${slide.image}')`
            }}
          >
            {active ? <div className="slideContentInner" style={{cursor: 'pointer'}} onClick={() => navigate('/best$matches$tours', {state: {image: tour.image, title: slide.title, subtitle: slide.subtitle, description: slide.description, price: slide.price, days: slide.days, flag: toString(slide.flag)}})}>
                <h2 className="slideTitle">{slide.title}</h2>
                <h3 className="slideSubtitle">{slide.subtitle}</h3>
                <p className="slideDescription">{slide.description}</p>
            </div> : <div className="slideContentInner" style={{cursor:'default'}}>
              <h2 className="slideTitle">{slide.title}</h2>
              <h3 className="slideSubtitle">{slide.subtitle}</h3>
              <p className="slideDescription">{slide.description}</p>
            </div>}
          </div>
        </div>
      );
}

export default SingleMagicalPlacesSlide;