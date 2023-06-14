import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import './AllButton.css'
import { neumorphicGreyBtn, pushButtonWithAnimation } from '../../assets'

const AllButton = () => {
  return (
    <main className="btn-container">
      <ButtonCard
        btnImg={neumorphicGreyBtn}
        imgAlt="neumorphic grey button"
        codepenLink="https://codepen.io/Palak-Goyal/pen/dygEaVp"
        zipFileName="trial-button"
        authorName="Palak Goyal"
        githubLink="https://github.com/palakkgoyal"
      />
      <ButtonCard
        btnImg={pushButtonWithAnimation}
        imgAlt="push button with animation"
        codepenLink="https://codepen.io/kraZeee/pen/ExOPxWo"
        zipFileName="button-mania-button-1"
        authorName="Keshav Kumar Hembram"
        githubLink="https://github.com/keshavkumarhembram"
      />
    </main>
  )
}

export default AllButton
