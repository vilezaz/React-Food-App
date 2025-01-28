import React from 'react'
import HomeIntro from '../Components/HomeIntro'
import Recipes from '../Components/Recipes'

const HomePage = () => {
  return (
    <div className='md:px-28'>
      <HomeIntro />
      <Recipes />
    </div>
  )
}

export default HomePage