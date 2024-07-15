import React, { useState } from 'react'
import './animatedRecomendations.css'

const AnimatedRecomendations = ({scroll, scrollingSize, firstImage, firstTitle, firstSubtitle, secondImage, secondTitle, thirdImage, thirdTitle}) => {
    const [animation, setAnimation] = useState(false)
    if(!animation) {
        if(scroll > scrollingSize) {
            setAnimation(true)
        }
    }

  return (
    <div className='animatedRecomendations'>
        <div className='animatedFromLeft' style={{visibility: animation ? 'visible' : 'hidden', animation: animation ? 'slideToRight 1.3s' : ''}}>
            <div className='firstBlock' style={{backgroundImage: `url(${firstImage})`}}>
                <div>
                    <h3>{firstTitle}</h3>
                    <p>{firstSubtitle}</p>
                </div>
            </div>
        </div>
        <div className='animatedFromRight' style={{visibility: animation ? 'visible' : 'hidden', animation: animation ? 'slideToLeft 1.3s' : ''}}>
            <div className='secondBlock' >
                <div style={{backgroundImage: `url(${secondImage})`}}></div>
                <h4>{secondTitle}</h4>
            </div>
            <div className='secondBlock' >
                <div style={{backgroundImage: `url(${thirdImage})`}}></div>
                <h4>{thirdTitle}</h4>
            </div>
        </div>
    </div>
  )
}

export default AnimatedRecomendations