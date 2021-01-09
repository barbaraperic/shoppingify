import React from 'react';
import Nav from './Nav'

const Header = () => {
  return (
    <div>
      <div>
        <a href="#" alt="logo">Shoppingify</a>
      </div>
      <Nav />
      <div>
        <p>Search</p>
      </div>
      <div>Cart</div>
    </div>
  )
}

export default Header