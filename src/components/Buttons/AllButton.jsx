import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import './AllButton.css'
import { abhiButton, neumorphicGreyBtn } from '../../assets'

const AllButton = () => {
  return (
    <main className='btn-container'>
      <ButtonCard 
        btnImg={ neumorphicGreyBtn } 
        imgAlt="neumorphic grey button"
        codepenLink="https://codepen.io/Palak-Goyal/pen/dygEaVp"
        zipFileName='trial-button'
        authorName="Palak Goyal"
        githubLink="https://github.com/palakkgoyal"
      />
      <ButtonCard 
        btnImg={ abhiButton } 
        imgAlt="simple grey button"
        codepenLink="https://codepen.io/AbhiSharma1511/pen/bGQddPp"
        zipFileName='trial-button'
        authorName="Abhinav Sharma"
        githubLink="https://github.com/AbhiSharma1511"
      />
    </main>
  )
}

export default AllButton
