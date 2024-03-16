import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <div>
        <input type="search" placeholder='Search products' />
    </div>

    <nav className='seconday-nav'>
        <Link to='featured'>Featured</Link>
        <Link to='new-products'>New arrivals</Link>

    </nav>
    <Outlet/> 
    </>
  )
}

export default Products