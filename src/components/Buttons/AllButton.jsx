import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import './AllButton.css'
import { trialBtn } from '../../assets'

const AllButton = () => {
  return (
    <main className='btn-container'>
      <ButtonCard 
        btnImg={trialBtn} 
        imgAlt="neumorphic blue button"
        codepenLink="https://codepen.io/Palak-Goyal/pen/VwENdgy"
        zipFileName='trial-button'
        authorName="Palak Goyal"
        githubLink="https://github.com/palakkgoyal"
      />

      <ButtonCard />

      <ButtonCard />

      <ButtonCard />
    </main>
  )
}

export default AllButton
