import React from 'react'
import './mainPageSingleTour.css'
import { useNavigate } from 'react-router-dom';

const MainPageSingleTour = ({tour}) => {
    const navigate = useNavigate();

  return (
    <div className='mainPageSingleTour'>
        <div className='imageBlock'>
            <div>
                <img src={tour.image}/>
            </div>
        </div>
        <div className='tourInfoBlock'>
            <h2>{tour.title}</h2>
            <div>{tour.flag} {tour.subtitle}</div>
            <p>{tour.description}</p>
        </div>
        <div className='tourPriceAndButtonBlock'>
            <div>
                <p>{tour.price}€ (1 day price)</p>
            </div>
            <div>
                <button onClick={() => navigate('/best$matches$tours', {state: {image: tour.image, title: tour.title, subtitle: tour.subtitle, description: tour.description, price: tour.price, days: tour.days, flag: toString(tour.flag)}})}>
                    <span className="shadow"></span>
                    <span className="edge"></span>
                    <span className="front">View more...</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default MainPageSingleTour