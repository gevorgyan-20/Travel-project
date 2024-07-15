import React, { useEffect } from 'react'
import './eachTourSinglePage.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { footerRendering, navbarRendering } from '../../Store/AllToursSlice/allToursSlice';

const EachTourSinglePage = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(footerRendering(true));
        dispatch(navbarRendering(true));
      }, [])

    const EachSinglePageStyle = createGlobalStyle`
    header {
      background-color: rgb(138, 138, 138, 0.980);
    }
    body {
      padding-top: 85px;
    }
  `;

  return (
    <div className='eachTourSinglePage'>
        <EachSinglePageStyle/>
        <div className='singleImageBlock'>
          <div>
            <img src={location.state.image}/>
          </div>
        </div>
        <div className='singleTourInfo'>
            <div className='singleTourMainInfo'>
                <h2>{location.state.title}</h2>
                <div>{location.state.subtitle}</div>
                <p>{location.state.description}</p>
            </div>
            <div className='singleTourPrices'>
                <div className='oneDayPrice'>{location.state.price}€ (1 day price)</div>
                <div className='availableDays'>
                    {location.state.days.map((day) => <button className='dasyButtons'>
                        <div>{day} day</div>
                        <div>{Math.floor(day * location.state.price/100) * 100 - 1}€</div>
                    </button>)}
                </div>
            </div>
        </div>
        <div className='singleTourControlButtons'>
            <div className='backToToursButton' onClick={() => navigate(-1)}>{'< Back to tours'}</div>
            <div className='backToToursButton' onClick={() => navigate('/registration', {state: {title: location.state.title, days: location.state.days, price: location.state.price}})}>{'Reserve now >'}</div>
        </div>
    </div>
  )
}

export default EachTourSinglePage;