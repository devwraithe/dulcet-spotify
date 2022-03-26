// imports
import { React } from "react";
import Avatar from "../../components/avatar/avatar";
import SideNav from "../../components/sideNav";
import "./index.scss";
import artiste from "../../assets/images/artiste.jpg";
import cover from "../../assets/images/bg_2.jpg";

// component
function UserProfile() {
  return (
    <div className="user_profile mx-auto">
      <div className="wrapper flex flex-row flex-wrap">
        <SideNav />
        <main className="main" role="main">
          {/* header section */}
          <header className="header">
            <div className="wrapper py-12 pt-32" align="center">
              {/* <Avatar /> */}
              <div className="details mt-2" align="center">
                <h1 className="username">Welcome, Devwraithe</h1>
                <div className="stats flex flex-row justify-center mt-2">
                  <div className="stat">
                    <span className="digit">1,000</span>
                    <br />
                    <span className="title">FOLLOWERS</span>
                  </div>
                  <div className="stat mx-10">
                    <span className="digit">1</span>
                    <br />
                    <span className="title">FOLLOWING</span>
                  </div>
                  <div className="stat">
                    <span className="digit">500</span>
                    <br />
                    <span className="title">PLAYLISTS</span>
                  </div>
                </div>
              </div>
              <button className="logout btn">LOGOUT</button>
            </div>
          </header>
          {/* header section */}
          <div className="main">
            <div className="month_artistes">
              <div className="heading flex flex-row justify-between p-12 pb-7">
                <div>
                  <h3 className="title">Top tracks this month</h3>
                  <span className="subtitle">
                    Based on verified data from Spotify
                  </span>
                </div>
                <div className="more mt-1">SEE MORE</div>
              </div>
              <div className="cards px-12">
                <div class="card rounded-lg overflow-hidden shadow-lg px-4 py-4">
                  <img
                    class="src w-full rounded-lg"
                    src={artiste}
                    alt="Sunset in the mountains"
                  />
                  <div class="">
                    <div class="title mt-5">Post Malone</div>
                    <p class="subtitle mt-1s">42,059,102 monthly listeners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// export
export default UserProfile;
