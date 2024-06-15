import React from 'react'
import './Form.css'

export default function Form() {
  return (
    <div className='d-flex justify-content-center inputfield'>
      <div className='input-form rounded m-2'>
        <form action="post">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Title" style={{ height: "80px", resize: "none" }} />
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "380px", resize: "none" }}></textarea>
            <label htmlFor="floatingTextarea">Note</label>
          </div>
          <div>
            <button type="submit" className="d-flex justify-content-end btn btn-dark ms-auto mt-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
