import React from 'react'
import './seeMoreReviewPart.css'
import Quotes from '../../Icons/Quotes'
import Close from './../../Icons/Close';

const SeeMoreReviewPart = ({info, handler}) => {
  return (
    <div className='seeMorePart'>
        <div className='container'>
            <div className='title'>
                <p>{info.author}</p>
                <div onClick={handler}>
                    <Close/>
                </div>
            </div>
            <div className='quotes'>
                <div>
                    <Quotes/>
                </div>
                <div className='secondQuote'>
                    <Quotes/>
                </div>
            </div>
            <div className='text'>
                <p>{info.text}</p>
            </div>
        </div>
    </div>
  )
}

export default SeeMoreReviewPart