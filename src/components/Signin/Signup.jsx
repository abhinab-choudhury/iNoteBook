import React from 'react'
import './Signup.css'

export default function Signin() {
  return (
    <div className='signin'>
      <div className='input-form rounded m-2 signin-form'>
        <div className='d-flex justify-content-center'>
          <h1>Signin</h1>
        </div>
        <form action="post" >
          <div className="form-floating mb-3 mt-4">
            <input type="email" className="form-control" id="floatingInput" placeholder="Title" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingInput" placeholder="Title" />
            <label htmlFor="floatingInput">Create Password</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingInput" placeholder="Title" />
            <label htmlFor="floatingInput">Confirm Password</label>
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="n-dark w-100">signin</button>
          </div>
          <div className='d-flex justify-content-center my-1' style={{ fontSize: 'small' }}>
            <div className='text-mutted'>Don't have an account? Signup</div>
          </div>
          <div className='d-flex'>
            <hr className='mx-2' style={{ width: "45%" }} /> or <hr className='mx-2' style={{ width: "45%" }} />
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="bg-white w-100 text-black" style={{ border: "1px solid black" }}>
              Login with Google
              <img className='mx-2' width="30" height="30" src="https://img.icons8.com/ios-filled/50/google-logo.png" alt="google-logo" />
            </button>
          </div>
        </form >
      </div >
    </div >
  )
}
