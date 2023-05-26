import React, { Children } from 'react'
import './ButtonCard.css'

const ButtonCard = ({img, alt, codepen, author, github}) => {
  return (
    <div className='card'>
        <img src={img} alt={alt} className='btn-img' />
        <div className='button-info'>
          <button className='btn view-code-btn'>
             <a href={codepen}>
              View Code
             </a>
          </button>
          <button className='btn download-btn'>Download</button>
          <p className='author'>
            <span>Author: </span> 
            <address>
              <a href={github}>{author}</a>
            </address>
          </p>
        </div>
    </div>
  )
}

export default ButtonCard
