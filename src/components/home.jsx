import React from 'react'
import Header from './Header/Header'
import './home.css'

export default function index() {
  return (
    <>
      <Header />
      <div style={{height:"100vh", marginLeft:"39px"}}>
        <div className='d-flex'>
          <div className='border rounded m-2' style={{ position: "absolute", width: "39%", height: "400px", padding: "20px", background: "#c8c8c80f" }}>
            <form action="post w-100" style={{ width: "100%", height: "100px" }}>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Title" />
                <label htmlFor="floatingInput" style={{ fontSize: "13px" }}>Title</label>
              </div>
              <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "198px" , resize:"none"}}></textarea>
                <label htmlFor="floatingTextarea" style={{ fontSize: "13px" }}>Enter you Note</label>
              </div>
            </form>
          </div>
          <div className='border rounded my-2 me-5' style={{ position: "sticky", marginLeft: "490px", height: "100%" }}>
            <div className='note border rounded p-5 h-100'>
              <span className='d-flex'>
                <h3>Story</h3>
                <blockquote className="blockquote mt-2 ms-auto text-muted" style={{fontSize:"12px", fontWeight:"800"}}>12.07.2022</blockquote>
              </span>
              <p>
                Once upon a time, in a quaint village nestled between rolling hills and lush forests, there lived a young girl named Elara.
                She had an insatiable curiosity that often led her into marvelous adventures.
              </p>
              <p>
                One sunny morning, while exploring the woods near her home, Elara stumbled upon an ancient-looking key half-buried in the earth. Intrigued, she traced its intricate design with her
                fingers and noticed a peculiar symbol etched on its handle.
              </p>
              <p>
                With an adventurer's spirit, Elara decided to uncover the key's mystery. Guided by the symbol's faint glow, she embarked on a journey through the dense forest,
                following clues that seemed to appear magically before her.
              </p>
              <p>
                As she ventured deeper, the forest unveiled secrets—a hidden pathway through a thicket, a sparkling stream that whispered ancient tales,
                and an abandoned tower standing tall amidst the trees.
              </p>
              <p>
                Determined, Elara approached the tower, the key pulsating in her palm. With a trembling hand, she fitted the key into the lock, and with a soft click, the door
                swung open, revealing a room filled with shimmering light.
              </p>
              <p>
                Inside, she found a wondrous book adorned with golden pages—a book of forgotten tales waiting to be discovered. Each page held stories of forgotten lands,
                mythical creatures, and lost treasures.
              </p>
              <p>
                As Elara immersed herself in the tales, she realized that the key had led her not only to a magical book but also to the realization
                that the greatest adventures often begin with a simple curiosity and an open heart.
              </p>
              <p>
                Filled with wonder and gratitude, Elara left the tower, carrying the book of tales. She returned to her village, sharing the stories and inspiring others to embrace curiosity,
                reminding them that within every heart lies the key to extraordinary adventures.
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
