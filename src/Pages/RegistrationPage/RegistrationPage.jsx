import React, { useEffect, useState } from 'react'
import './registrationPage.css'
import { createGlobalStyle } from 'styled-components';
import { footerRendering, navbarRendering } from '../../Store/AllToursSlice/allToursSlice';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle/PageTitle';


const RegistrationPage = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [registrated, setRegistrated] = useState(false)
    
    useEffect(() => {
        dispatch(navbarRendering(false));
        dispatch(footerRendering(false));
    }, [])

    const OnlyRegistrationStyle = createGlobalStyle`
    body {
        font-family: Arial, sans-serif;
        background: linear-gradient(45deg, #83a4d4, #b6fbff);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        ${registrated && 'position: relative;'}
    }
    `

  return (
    <div className="tour-registration">
      <PageTitle title={'Register now'}/>
        <OnlyRegistrationStyle/>
      <h2>Travel Tour Registration</h2>
      <form onSubmit={(e) => {e.preventDefault(); setRegistrated(true)}}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label htmlFor="tourName">Tour Name:</label>
          <button className='tourName'>{location.state.title}</button>
          <label htmlFor="tourPackage">Tour Package:</label>
          <select
            name="tourPackage"
            required
          >
            <option value="">Select a package</option>
            {location.state.days.map((day) => <option value="package1">{day} day package ({Math.floor(day * location.state.price/100) * 100 - 1}€)</option>)}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      {registrated && <div className='seeMorePart'>
        <div className='container'>
            <h2>Congratulations</h2>
            <h4>You're already registrated!</h4>
            <button className='backToHome'><Link to='/'>Back to Home Page</Link></button>
        </div>
      </div>}
    </div>
  )
}

export default RegistrationPage