import React, { Children } from 'react'
import './ButtonCard.css'
import btn from '../../assets'

const ButtonCard = ({Children}) => {
  return (
    <div className='card'>
        <img src={btn} alt="button" className='btn-img' />
        <div className='button-info'>
          <button className='btn view-code'>View Code</button>
          <button className='btn download-btn'>Download</button>
          <p className='author'><span>Author: </span> <address>Palak Goyal</address></p>
        </div>
      {Children}
    </div>
  )
}

export default ButtonCard
