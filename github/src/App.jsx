
import './App.css'

function App() {

  return (
    <>
   <header>
    <nav className='header-container'>
      <div>
        <button>menu</button>
        <h2>Dashboard</h2>
      </div>
      <div>
        <form>
          <input placeholder='Type / to search'/>
        </form>
        <div>options</div>
      </div>
    </nav>
   </header>
   <main>

    <section>
      <div>
        <div>
          <h3>Top Repositories</h3>
          <button>New</button>
          <input placeholder='Find a repository...'/>
        </div>
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
    </section>

    <secction>
      <div>
        <h3>For you</h3>
        <h3>Following</h3>
        <div>
          <p>Send feedback</p>
          <p>Filter</p>
        </div>
      </div>
      <div>
        <h3>Welcome to the new feed !</h3>
        <p>We're updating the cards and ranking all the time , so check back
          regularly. At first, you might need to follow some people or star some Repositories to get started

        </p>
      </div>
    </secction>

    <section>
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
    </section>
    </main>  
    </>
  )
}

export default App
