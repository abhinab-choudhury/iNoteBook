import React from 'react'

export default function Form() {
  return (
    <>
      <div className='input-form border rounded m-2 my-3'>
        <form action="post w-100">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Title" />
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating">
            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "198px", resize: "none" }}></textarea>
            <label htmlFor="floatingTextarea">Enter you Note</label>
          </div>
          <button type="submit" className="d-flex ms-auto btn btn-dark my-5">Submit</button>
        </form>
      </div>
    </>
  )
}
