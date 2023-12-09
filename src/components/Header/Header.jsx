import React from 'react'
import './Header.css'

export default function header() {
  return (
    <>
      <div className='d-flex text my-3 mx-2' style={{ justifyContent: "space-between" }}>
        <img className='mx-3' width="55" height="55" src="https://img.icons8.com/cotton/64/cloud-document.png" alt="cloud-document" />
        <span className='display-5'>
          iNoteBook
        </span>
        <span className='text-muted mx-4' style={{ fontSize: "15px", marginTop: "10px" }}>
          <a className='link text-muted' href='/'>Signin</a>
        </span>
      </div>

      <hr />
      <div className='d-flex justify-content-center text-muted'>
        <ul className='list-inline'>
          <li className='link list-inline-item'>Home</li>
          <li className='link list-inline-item'>Profile</li>
          <li className='link list-inline-item'>About</li>
        </ul>
      </div>
    </>
  )
}
