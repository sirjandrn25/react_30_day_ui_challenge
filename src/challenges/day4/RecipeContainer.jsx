import React from 'react'
import Card from './Card'

const RecipeContainer = () => {
  return (
    <div className='h-[800px] w-screen flex flex-row justify-center items-center bg-slate-100'>
      <div className='grid grid-cols-2 w-[800px] gap-2'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>
  )
}

export default RecipeContainer
