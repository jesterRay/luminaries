import React from 'react'

const Navbar = () => {
  return (
    <div id='nav_bar_container'>
      <div id='nav_logo' className='nav_bar_item'>
        <img src="https://png.pngtree.com/png-vector/20210126/ourmid/pngtree-red-shark-mascot-logo-png-image_2834719.jpg" alt="error" />
        <span>Lumi<span>naries</span></span>
      </div>
      <div id='search_section' className='nav_bar_item'>
        <input type="text" placeholder="Search..." name="search"></input>
        <button id='search_button'>
            <span class="material-icons-sharp">
            search
            </span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
