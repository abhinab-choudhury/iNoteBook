import { Link } from "react-router-dom";
import './Header.css'
import Navbar from './Navbar'

export default function header() {
  return (
    <>
      <div className='d-flex text my-3 mx-2 justify-content-between'>
        <img className='mx-3' width="55" height="55" src="https://img.icons8.com/cotton/64/cloud-document.png" alt="cloud-document" />
        <div>
          <Link to='/' className='d-inline display-5' style={{ color: "black" }}>iNoteBook</Link>
        </div>
        <div className='d-inline header-sigin text-muted mx-4'>
          <Link to='/signin' className='link text-muted'>Signin</Link>
        </div>
      </div>
      <Navbar />
    </>
  )
}
