import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className='input-form rounded m-2 login-form'>
        <div className='d-flex justify-content-center'>
          <h1>Login</h1>
        </div>
        <form action="post" >
          <div className="form-floating mb-3 mt-4">
            <input type="email" className="form-control" id="floatingInput" placeholder="Title" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingInput" placeholder="Title" />
            <label htmlFor="floatingInput">Password</label>
          </div>
          <div className='d-flex justify-content-center'>
            <button type="submit" className="n-dark w-100">login</button>
          </div>
          <div className='d-flex justify-content-center my-1' style={{ fontSize: 'small' }}>
            <div className='text-mutted'>Forgot Password?</div>
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
