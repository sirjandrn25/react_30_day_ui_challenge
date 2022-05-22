import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-row place-content-around items-center h-24 bg-black'>
        <a className='text-2xl font-bold text-orange-300' href="">XELA</a>
        <ul className='navitems list-none flex flex-row'>
            <li className='nav-item mr-3 text-white'><a className='nav-item-action' href="">Rules</a></li>
            <li className='nav-item mr-3 text-white'><a className='nav-item-action' href="">Portfolio</a></li>
            <li className='nav-item mr-3 text-white'><a className='nav-item-action' href="">Challenges</a></li>
        </ul>
        <div className='flex flex-row'>
            <img className='h-12 w-12 rounded-2xl' src="https://source.unsplash.com/200x200" alt="" />
            <div className='ml-3'>
                <span className='font-bold text-sm block text-slate-100'>Sirjan Tamang</span>
                <a className='font-bold text-slate-400 text-xs'>sirjantamang@example.com</a>
            </div>
        </div>
    </nav>
    
  )
}

export default Navbar
