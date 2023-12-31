
import './App.css'

function App() {

  return (
    <>
      <a href="#main-content" class="skip-link">Skip to main content</a>
   <header role="banner">
    <nav className='header-container'>
      <div className='nav-left'>
        <button>menu</button>
        <h2>Dashboard</h2>
      </div>
      <div className='nav-right'>
        <form>
          <input placeholder='Type / to search'/>
        </form>
        <div>options</div>
      </div>
    </nav>
   </header>
   <main role="main">

    <aside className='repository-activity'>
      <div className='repository-activity-container'>
        <div className='repository-wrapper'>
          <h3>Top Repositories   <button>New</button> </h3>
          <form>
          <input id="search-input" type="text" placeholder="Type / to search" />
        </form>        </div>
        <div>
          <p>User/Repository</p>
        </div>
        <div>
          <h3>Recent activity</h3>
          <div>
            <p>When you take actions across GitHub, we'll provide
              links to that activity here.
            </p>
          </div>
        </div>
      </div>
    </aside>

<div className='rest'>
    <div className="feed-section">
      <div className='feed-header'>

      <div className='feed-header-left'>
        <h3>For you</h3>
        <h3>Following</h3>
       
        </div>
        <div className='feed-header-right'>
          <p>Send feedback</p>
          <p>Filter</p>
          </div>
      </div>
      <div className='card'>
        <h3>Welcome to the new feed !</h3>
        <p>We're updating the cards and ranking all the time , so check back
          regularly. At first, you might need to follow some people or star some Repositories to get started

        </p>
      </div>


  <footer>
    <ul className='links'>
      <li><a href=''>Blog</a></li>
      <li><a href=''>About</a></li>
      <li><a href=''>Shop</a></li>
      <li><a href=''>Contact Github</a></li>
      <li><a href=''>Pricing</a></li>

    </ul>
    <ul className='links'>
      <li><a href=''>API</a></li>
      <li><a href=''>Training</a></li>
      <li><a href=''>Status</a></li>
      <li><a href=''>Security</a></li>

    </ul>
    <ul className='links'>
      <li><a href=''>Terms</a></li>
      <li><a href=''>Privacy</a></li>
      <li><a href=''>Docs</a></li>
      </ul>
  </footer>
    </div>

    <aside className='changes-section'>
      <h2>Latest changes</h2>
      <div>
        <div><h5>time ago</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae id numquam sit eveniet. Consectetur totam modi, animi quo voluptatem nemo quis nihil exercitationem harum quam delectus ut aut dolor.</p></div>
      </div>
      <div>
        <h3>Explore repositories</h3>
        <div>
          <h3>name of example repository</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, accusantium? Nobis cumque deserunt veniam consectetur velit. Id asperiores odit ut dolorum, numquam eaque, in animi incidunt doloribus consectetur qui ullam!</p>
        </div>
      </div>
    </aside>
</div>
  
    </main>  
    </>
  )
}

export default App
