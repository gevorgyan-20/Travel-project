import React from 'react'
import './footer.css'
import Github from '../../Icons/Github'
import { Link } from 'react-router-dom'
import LinkedIn from './../../Icons/LinkedIn';

const Footer = () => {
  return (
    <footer>
        <div className='footerBlock'>
          <div className='copyright'>
            <h3>
              Copyright © 2024. All rights are reserved!
            </h3>
          </div>
          <div className='links'>
            <Link to='https://github.com/gevorgyan-20' target="_blank"><Github/></Link>
            <Link to='https://linkedin.com/in/hayk-gevorgyan-8456412a7' target="_blank"><LinkedIn/></Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer;