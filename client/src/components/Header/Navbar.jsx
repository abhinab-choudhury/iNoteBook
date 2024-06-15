import React from 'react'

export default function Navbar() {
  return (
    <>
      <hr />
      <div className='d-flex justify-content-center text-muted'>
        <ul className='list-inline'>
          <li className='link list-inline-item'>Home</li>
          <li className='link list-inline-item'>Profile</li>
          <li className='link list-inline-item'>Add-Notes</li>
          <li className='link list-inline-item'>About</li>
        </ul>
      </div>
    </>
  )
}
