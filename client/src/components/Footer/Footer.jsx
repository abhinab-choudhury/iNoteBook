import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
      <hr className='mt-5'/>
      <div className='container'>
      <div className='d-flex justify-content-evenly'>
        <div className='h-25 p-3'>
          <h2 className='m-2 display-6'>Contact Us</h2>
          <div className='p-2'>
            <a className='text-muted text-align-center' href="https://www.instagram.com/_abhinab_choudhury_/">
              <img height={"22px"} src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram" />
              Instagram
            </a> <br />
            <a className='text-muted text-align-center' href="https://www.linkedin.com/in/abhinab-choudhury-18022822b/">
              <img height={"22px"} src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/>
              LinkedIn
            </a> <br />
            <a className='text-muted' href="https://twitter.com/abhinabc_">
            <img height={"22px"} src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
              Twitter
            </a> <br />
            <a className='text-muted' href="https://github.com/abhinab-choudhury">
              <img height={"22px"} src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
              Github
            </a> <br />
          </div>
        </div>
        <div className='border'></div>
        <div className='h-25 p-3'>
          <h2 className='m-2 display-6 '>Resources</h2>
          <div>
            <spam style={{fontSize:"1rem",fontWeight:"700"}}>Icons are taken from icon8.com</spam> <br />
            <spam style={{fontSize:"1rem",fontWeight:"700"}} >Styling Library Bootstrap</spam> <br />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
