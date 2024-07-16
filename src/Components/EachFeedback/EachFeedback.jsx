import React, { useState } from 'react'
import './eachFeedback.css'
import Quotes from '../../Icons/Quotes'

const EachFeedback = ({id, text, author, handler, f1, f2}) => {
    
  return (
    <div className='eachFeedback' onDragStart={f2} onDragCapture={f1}>
        <div className='quotes'>
            <div>
                <Quotes/>
            </div>
            <div className='secondQuote'>
                <Quotes/>
            </div>
        </div>
        <div className='feedbackText'>
            <p>{text}</p>
        </div>
        <div className='button'>
            <button onClick={() => handler(id)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div className='author'>
            <h3>{author}</h3>
        </div>
    </div>
  )
}

export default EachFeedback