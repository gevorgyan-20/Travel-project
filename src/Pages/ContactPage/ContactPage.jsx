import React, { useEffect } from 'react'
import './contactPage.css'
import { useDispatch } from 'react-redux'
import { footerRendering, isInSiteChanging, navbarRendering } from '../../Store/AllToursSlice/allToursSlice'
import { createGlobalStyle } from 'styled-components'
import Phone from '../../Icons/Phone'
import Mail from '../../Icons/Mail'
import MapContent from '../../Components/MapContent/MapContent'

const ContactPage = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(isInSiteChanging());    
        dispatch(navbarRendering(true));
        dispatch(footerRendering(true));
    }, [])

    const OnlyContactStyle = createGlobalStyle`
    header {
      background-color: rgb(138, 138, 138, 0.980);
    }
    `

  return (
    <div className='contactPage'>
        <OnlyContactStyle/>
        <div className='container'>
            <h1>Contact with us</h1>
            <div className='mainContainer'>
                <div className='info'>
                    <Phone/>
                    <span>+(374) 00 000 000</span>
                </div>
                <div className='info'>
                    <Mail/>
                    <span>example@gmail.com</span>
                </div>
            </div>
            <MapContent/>
        </div>
    </div>
  )
}

export default ContactPage