import React from 'react'
import { UseColorsIcons } from './context'

const Navbar = () => {
  const { property, handleDarkLight } = UseColorsIcons()
  return (
    <nav
      className={`flex flex-row place-content-around items-center fixed top-0 w-full py-4 ${property.colors.navbar} border-b-1 shadow`}>
      <a className='text-2xl font-bold text-orange-300' href=''>
        XELA
      </a>
      <ul className='navitems list-none flex flex-row'>
        <li className={`nav-item mr-3 ${property.colors.text_color}`}>
          <a className='nav-item-action' href=''>
            Item
          </a>
        </li>
        <li className={`nav-item mr-3 ${property.colors.text_color}`}>
          <a className='nav-item-action' href=''>
            Item
          </a>
        </li>
        <li className={`nav-item mr-3 ${property.colors.text_color}`}>
          <a className='nav-item-action' href=''>
            Item
          </a>
        </li>
        <li className={`nav-item mr-3 ${property.colors.text_color}`}>
          <a className='nav-item-action' href=''>
            Item
          </a>
        </li>
        <li className={`nav-item mr-3 ${property.colors.text_color}`}>
          <a className='nav-item-action' href=''>
            Item
          </a>
        </li>
      </ul>
      <div className='flex flex-row items-center'>
        <img
          src={property.icons.toggle}
          alt=''
          className='h-[20px] w-[20px] ml-2 cursor-pointer'
          onClick={handleDarkLight}
        />
        <img src={property.icons.user} alt='' className='h-[20px] w-[20px] ml-2' />
        <img src={property.icons.heart} alt='' className='h-[20px] w-[20px] ml-2' />
        <img src={property.icons.setting} alt='' className='h-[20px] w-[20px] ml-2' />
      </div>
    </nav>
  )
}

export default Navbar
