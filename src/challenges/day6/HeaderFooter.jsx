import React from 'react'
import Navbar from './Navbar'
import { UseColorsIcons } from './context'
import Footer from './Footer'

const HeaderFooter = () => {
  const { property, handleDarkLight } = UseColorsIcons()
  return (
    <div className={`h-screen w-screen ${property.colors.body}`}>
      <Navbar />
      <Footer />
    </div>
  )
}

export default HeaderFooter
