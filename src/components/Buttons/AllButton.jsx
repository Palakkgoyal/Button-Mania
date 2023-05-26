import React from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import './AllButton.css'
import btn from '../../assets'

const AllButton = () => {
  return (
    <main className='btn-container'>
      <ButtonCard 
        img={btn} 
        alt="neumorphic blue button"
        codepen="https://codepen.io/palakgoyal432/pen/xxZQqQq"
        author="Palak Goyal"
        github="https://github.com/palakkgoyal"
      />

      <ButtonCard />

      <ButtonCard />

      <ButtonCard />
    </main>
  )
}

export default AllButton
