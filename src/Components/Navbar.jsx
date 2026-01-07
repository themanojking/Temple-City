import React from 'react'

const Navbar = () => {
  return (
    <>
      <div>
         <nav className='flex justify-between p-10'>
            <h1>Heritage</h1>
            <ul className='flex gap-10'>
                <li>Home</li>
                <li>All Temples</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
         </nav>
      </div>
    </>
  )
}

export default Navbar
