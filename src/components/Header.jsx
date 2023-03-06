import React from 'react'
// import RecipeCard from '../pages/RecipeCard'
import Form from './Form'

const Header = () => {
  return (
    <div>
    <p className='text-3xl text-gray-400 text-center mt-5'>Food App</p>
    <div>
      <Form/>
      {/* <RecipeCard/> */}
    </div>
    </div>
  )
}

export default Header