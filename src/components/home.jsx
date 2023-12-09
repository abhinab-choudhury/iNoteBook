import React from 'react'
import Header from './Header/Header'

export default function index() {
  return (
    <>
      <Header />
      <div className='container'>
        <div className='d-flex'>
          <div className='border' style={{ width: "50%", height: "400px", padding: "20px" }}>
            <form action="post w-100" style={{ width: "100%", height: "100px" }}>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                  <label htmlFor="floatingInput" style={{ fontSize:"13px"}}>Email address</label>
              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "181px"}}></textarea>
                <label htmlFor="floatingTextarea" style={{fontSize:"13px"}}>Enter you Note</label>
              </div>
            </form>
          </div>
          <div>
            Hello World
          </div>

        </div>

      </div>
    </>
  )
}
