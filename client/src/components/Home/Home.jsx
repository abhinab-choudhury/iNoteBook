import './Home.css'
import del_btn from '../../assets/icons/filled-trash.png'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Form from '../Form/Form'

export default function index() {
  return (
    <>
      <Header />
      <Form />
      <div className='note border rounded px-5 py-3 m-3 w-75 ms-auto me-auto'>
        <div className='d-flex justify-content-end'>
          <button className="delete-btn d-flex justify-content-center border border-0">
            <img width="30" height="30" src={del_btn} alt="filled-trash" />
          </button>
        </div>
        <span className='d-flex note-title p-1 my-2 border rounded '>
          <h3 className='m-2'>Story</h3>
          <blockquote className="blockquote mt-3 ms-auto mx-2 text-muted" style={{ fontSize: "12px", fontWeight: "800" }}>Dt: 12.07.2022</blockquote>
        </span>
        <hr />
        <p>
          Once upon a time, in a quaint village nestled between rolling hills and lush forests, there lived a young girl named Elara.
          She had an insatiable curiosity that often led her into marvelous adventures.
        </p>
        <p>
          One sunny morning, while exploring the woods near her home, Elara stumbled upon an ancient-looking key half-buried in the earth. Intrigued, she traced its intricate design with her
          fingers and noticed a peculiar symbol etched on its handle.
        </p>
        <p>
          With an adventurer&apos;s spirit, Elara decided to uncover the key&apos;s mystery. Guided by the symbol&apos;s faint glow, she embarked on a journey through the dense forest,
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
      </div >
      <div className='note border rounded p-5 py-3 m-3 w-75 ms-auto me-auto'>

        <div className='d-flex justify-content-end'>
          <button className="delete-btn d-flex justify-content-center border border-0">
            <img width="30" height="30" src={del_btn} alt="filled-trash" />
          </button>
        </div>

        <span className='d-flex note-title p-1 my-2 border rounded '>
          <h3 className='m-2'>Gameing Tips : </h3>
          <blockquote className="blockquote mt-3 ms-auto mx-2 text-muted" style={{ fontSize: "12px", fontWeight: "800" }}>Dt: 02.02.2021</blockquote>
        </span>
        <hr />
        <b>
          20 Gaming Tips to Level Up Your Play <br />
        </b>
        Improving your gaming skills takes time and dedication, but these tips can help you get there faster: <br /> <br />
        <ol>
          <li>
            Practice Regularly:
            Treat gaming like any other skill. The more you play, the better you&apos;ll become.
          </li>
          <li>
            Focus on the Fundamentals:

            Before getting fancy, master the basics of your chosen game.
          </li>
          <li>
            Watch Pro Players:

            Observe how skilled players approach the game and learn from their strategies.
          </li>
          <li>
            Analyze Your Mistakes:
            Don&apos;t get discouraged by defeats; instead, learn from them and identify areas for improvement.
          </li>
          <li>
            Experiment with Different Playstyles:

            Find a playstyle that suits you and master it.
          </li>
          <li>
            Take Breaks:

            Don&apos;t burn yourself out. Take breaks to avoid fatigue and frustration.
          </li>
          <li>
            Stay Hydrated and Well-Fed:

            Your physical and mental state can significantly impact your performance.
          </li>
          <li>
            Warm Up Before Playing:

            Just like athletes, gamers need to warm up their muscles and reflexes.
          </li>
          <li>
            Adjust Your Settings:

            Customize your settings for optimal comfort and performance.
          </li>
          <li>
            Use the Right Equipment:

            Invest in good quality gaming gear to give yourself an edge.
          </li>
          <li>
            Join a Community:

            Connect with other players and learn from each other.
          </li>
          <li>
            Be a Good Team Player:

            Communication and cooperation are key to success in multiplayer games.
          </li>
          <li>
            Be Respectful:

            Treat your opponents and teammates with respect.
          </li>
          <li>
            Have Fun:

            Gaming is supposed to be enjoyable, so don&apos;t take it too seriously.
          </li>
          <li>
            Learn from Others:

            Read guides, watch tutorials, and listen to podcasts to expand your knowledge.
          </li>
          <li>
            Set Goals:

            Having goals will help you stay motivated and track your progress.
          </li>
          <li>
            Dont Be Afraid to Fail:

            Failure is a natural part of learning. Embrace it and use it to improve.
          </li>
          <li>
            Be Patient:

            It takes time to become a skilled gamer. Don&apos;t get discouraged if you don&apos;t see results immediately.
          </li>
          <li>
            Have a Growth Mindset:

            Believe in your ability to improve and keep learning.
          </li>
        </ol>
      </div>
      <Footer />
    </>
  )
}

