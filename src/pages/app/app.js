import "./app.scss";

function App() {
  return (
    <div className="home mx-auto">
      {/* <div className="home__wrapper flex flex-row flex-wrap py-4 columns-5">
        <nav className="sideNav w-full sm:w-1/3 md:w-1/4 px-2">Column 1</nav>
        <main>Column 2</main>
        <div>Column 3</div>
      </div> */}
      {/* <div className="home__wrapper grid grid-flow-col">
        <aside className="sidenav bg-gray-600 w-1/3">
          <nav class="">Nav</nav>
        </aside>
        <main role="main" class="main bg-lime-300 w-1/3">
          Main
        </main>
        <aside class="right bg-orange-400">Right</aside>
      </div> */}
      <div className="home__wrapper flex flex-row flex-wrap">
        <aside className="sidenav bg-zinc-900 h-screen text-white flex py-5 px-7">
          <nav class="sidenav__nav sticky flex flex-col justify-between">
            <div className="sidenav__section">Play Now</div>
            {/* section b */}
            <div className="sidenav__navItems">
              <div className="sidenav__navItem">
                {/* icon */}
                Home
              </div>
              <div className="sidenav__navItem">
                {/* icon */}
                Search
              </div>
              <div className="sidenav__navItem">
                {/* icon */}
                Your Library
              </div>
              <div className="sidenav__navItem mt-5">
                {/* icon */}
                Create Playlist
              </div>
              <div className="sidenav__navItem">
                {/* icon */}
                Liked Songs
              </div>
              <hr className="mt-4 mb-3 w-40" />
              <div className="sidenav__navItem">Instrumental</div>
              <div className="sidenav__navItem">All Out 90s</div>
              <div className="sidenav__navItem">Blues Rock</div>
            </div>
            <div>Install App</div>
          </nav>
        </aside>
        <main role="main" class="main bg-lime-300">
          Main
        </main>
        <aside class="right bg-orange-400">Right</aside>
      </div>
    </div>
  );
}

export default App;
