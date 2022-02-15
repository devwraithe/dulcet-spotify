// imports
import SideNav from "../../components/sideNav/sideNav";
import "./app.scss";
import songCoverI from "../../assets/coverI.jpg";
import songCoverII from "../../assets/cover.jpg";
import Avatar from "../../components/avatar/avatar";
import NowPlaying from "../../components/nowPlaying";

// component
function App() {
  return (
    <div className="home mx-auto">
      <div className="wrapper flex flex-row flex-wrap">
        <SideNav />
        <main className="main" role="main">
          <header className="header">
            <div className="wrapper px-10 pt-24 pb-10 flex flex-row">
              <Avatar />
              <div className="details mt-2 text-white">
                <p className="title">MY PROFILE,</p>
                <h1 className="username">Pexelsam</h1>
                <div className="more flex flex-row align-middle">
                  <div className="friends">-- Friends</div>
                  <span className="px-2">&#903;</span>
                  <div className="following">-- Following</div>
                  <span className="px-2">&#903;</span>
                  <div className="playlists">-- Playlists</div>
                </div>
              </div>
            </div>
          </header>

          <section className="board px-10 py-7">
            <div className="board__header flex flex-row justify-between">
              <div className="board__tabs flex flex-row text-white">
                <div className="board__tab board__tab--active px-5">
                  Latest Release
                </div>
                <div className="board__tab mx-11 ml-9">Friends Activities</div>
                <div className="board__tab">My Comments</div>
              </div>
              <div className="board__filters flex flex-row text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="board__filter svg"
                >
                  <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" />
                  <path d="M7.33011 15.24C7.17011 15.24 7.01011 15.19 6.87011 15.08C6.54011 14.83 6.48011 14.36 6.73011 14.03L9.11011 10.94C9.40011 10.57 9.81011 10.33 10.2801 10.27C10.7401 10.21 11.2101 10.34 11.5801 10.63L13.4101 12.07C13.4801 12.13 13.5501 12.13 13.6001 12.12C13.6401 12.12 13.7101 12.1 13.7701 12.02L16.0801 9.04001C16.3301 8.71001 16.8101 8.65001 17.1301 8.91001C17.4601 9.16001 17.5201 9.63001 17.2601 9.96001L14.9501 12.94C14.6601 13.31 14.2501 13.55 13.7801 13.6C13.3101 13.66 12.8501 13.53 12.4801 13.24L10.6501 11.8C10.5801 11.74 10.5001 11.74 10.4601 11.75C10.4201 11.75 10.3501 11.77 10.2901 11.85L7.91011 14.94C7.78011 15.14 7.56011 15.24 7.33011 15.24Z" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="board__filter svg svg--active ml-2"
                >
                  <path d="M19.14 20.25C18.95 20.25 18.76 20.18 18.61 20.04C18.31 19.75 18.31 19.28 18.6 18.98C20.31 17.24 21.25 14.94 21.25 12.5C21.25 7.4 17.1 3.25 12 3.25C6.9 3.25 2.75 7.4 2.75 12.5C2.75 14.93 3.68 17.22 5.38 18.96C5.67 19.26 5.66 19.73 5.37 20.02C5.07 20.31 4.6 20.3 4.31 20.01C2.34 17.99 1.25 15.32 1.25 12.5C1.25 6.57 6.07 1.75 12 1.75C17.93 1.75 22.75 6.57 22.75 12.5C22.75 15.33 21.66 18.01 19.67 20.03C19.53 20.18 19.33 20.25 19.14 20.25Z" />
                  <path d="M11.9989 22.25C9.7289 22.25 7.87891 20.4 7.87891 18.13C7.87891 15.86 9.7289 14 11.9989 14C14.2689 14 16.1189 15.85 16.1189 18.12C16.1189 20.39 14.2689 22.25 11.9989 22.25ZM11.9989 15.5C10.5489 15.5 9.37891 16.68 9.37891 18.12C9.37891 19.56 10.5589 20.74 11.9989 20.74C13.4389 20.74 14.6189 19.56 14.6189 18.12C14.6189 16.68 13.4489 15.5 11.9989 15.5Z" />
                  <path d="M16 12.75H15.25C14.42 12.75 13.75 12.08 13.75 11.25V10.5C13.75 9.26 14.76 8.25 16 8.25C17.24 8.25 18.25 9.26 18.25 10.5C18.25 11.74 17.24 12.75 16 12.75ZM16 9.75C15.59 9.75 15.25 10.09 15.25 10.5V11.25H16C16.41 11.25 16.75 10.91 16.75 10.5C16.75 10.09 16.41 9.75 16 9.75Z" />
                </svg>
              </div>
            </div>

            <div className="board__section mt-12">
              <p className="board__sectionTitle text-white">For Today</p>
              <div className="board__sectionItems mt-3">
                <div className="board__card text-white">
                  <img
                    src={songCoverI}
                    alt="song cover"
                    className="board__cardImg"
                  />
                  <div className="board__cardTitle mt-4">Oceans</div>
                  <div className="board__cardMore flex flex-row">
                    <div className="board__cardType">Single</div>
                    <span className="px-2">&#903;</span>
                    <div className="board__cardArtiste">Methyl Ethel</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="board__section mt-12">
              <p className="board__sectionTitle text-white">For Yesterday</p>
              <div className="board__sectionItems mt-3">
                <div className="board__card text-white">
                  <img
                    src={songCoverII}
                    alt="song cover"
                    className="board__cardImg"
                  />
                  <div className="board__cardTitle mt-4">Buildings</div>
                  <div className="board__cardMore flex flex-row">
                    <div className="board__cardType">Album</div>
                    <span className="px-2">&#903;</span>
                    <div className="board__cardArtiste">Methyl Ethel</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <aside class="playlist text-white">
          <div className="playlist__header">
            <div className="playlist__headerWrap pt-24 px-6">
              <div className="playlist__headerPlay">
                <div className="playlist__headerPlayBtn flex flex-row justify-center">
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.49 9.59965L5.6 16.7696C4.9 17.1896 4 16.6896 4 15.8696V7.86965C4 4.37965 7.77 2.19965 10.8 3.93965L15.39 6.57965L17.48 7.77965C18.17 8.18965 18.18 9.18965 17.49 9.59965Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M18.0888 15.4606L14.0388 17.8006L9.99883 20.1306C8.54883 20.9606 6.90883 20.7906 5.71883 19.9506C5.13883 19.5506 5.20883 18.6606 5.81883 18.3006L18.5288 10.6806C19.1288 10.3206 19.9188 10.6606 20.0288 11.3506C20.2788 12.9006 19.6388 14.5706 18.0888 15.4606Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
              <div className="playlist__headerDetails mt-8">
                <h1 className="playlist__headerTitle">Geek's Playlist</h1>
                <div className="playlist__headerArtistes flex flex-row align-middle">
                  Tame Impala, U2, Foals, Moby...
                </div>
              </div>
            </div>
          </div>
          <div className="playlist__list px-6 py-10">
            <div className="playlist__heading">-- FRIENDS AVAILABLE</div>
            <div className="playlist__tracks">
              <div className="playlist__track flex flex-row justify-between mt-5">
                <div className="playlist__trackA flex flex-row">
                  <img
                    src={songCoverI}
                    alt=""
                    srcset=""
                    class="playlist__trackImg"
                  />
                  <div className="playlist__trackDetails ml-3">
                    <div className="playlist__trackTitle">Ruanna J</div>
                    <div className="playlist__trackMore flex flex-row mt-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.28016 22.7498C4.15016 22.7498 2.41016 21.0098 2.41016 18.8798C2.41016 16.7498 4.15016 15.0098 6.28016 15.0098C8.41016 15.0098 10.1502 16.7498 10.1502 18.8798C10.1502 21.0098 8.41016 22.7498 6.28016 22.7498ZM6.28016 16.5098C4.97016 16.5098 3.91016 17.5698 3.91016 18.8798C3.91016 20.1898 4.97016 21.2498 6.28016 21.2498C7.59016 21.2498 8.65016 20.1898 8.65016 18.8798C8.65016 17.5698 7.59016 16.5098 6.28016 16.5098Z"
                          fill="#07401C"
                        />
                        <path
                          d="M9.40039 19.6301C8.99039 19.6301 8.65039 19.2901 8.65039 18.8801V6.30013C8.65039 4.72013 9.60039 3.48013 11.1204 3.07013L17.3604 1.37013C18.6304 1.02013 19.7004 1.15013 20.4504 1.73013C21.2104 2.31013 21.5904 3.28013 21.5904 4.61013V16.8101C21.5904 17.2201 21.2504 17.5601 20.8404 17.5601C20.4304 17.5601 20.0904 17.2201 20.0904 16.8101V4.60013C20.0904 4.02013 19.9904 3.26013 19.5404 2.92013C19.0504 2.54013 18.2104 2.69013 17.7504 2.82013L11.5104 4.52013C10.6404 4.76013 10.1504 5.41013 10.1504 6.31013V18.8901C10.1504 19.2901 9.81039 19.6301 9.40039 19.6301Z"
                          fill="#07401C"
                        />
                        <path
                          d="M17.7196 20.6702C15.5896 20.6702 13.8496 18.9302 13.8496 16.8002C13.8496 14.6702 15.5896 12.9302 17.7196 12.9302C19.8496 12.9302 21.5896 14.6702 21.5896 16.8002C21.5896 18.9302 19.8496 20.6702 17.7196 20.6702ZM17.7196 14.4302C16.4096 14.4302 15.3496 15.4902 15.3496 16.8002C15.3496 18.1102 16.4096 19.1702 17.7196 19.1702C19.0296 19.1702 20.0896 18.1102 20.0896 16.8002C20.0896 15.4902 19.0296 14.4302 17.7196 14.4302Z"
                          fill="#07401C"
                        />
                        <path
                          d="M9.3998 10.2698C9.0698 10.2698 8.7698 10.0498 8.6798 9.71978C8.5698 9.31978 8.7998 8.89978 9.1998 8.78978L20.6398 5.66978C21.0398 5.55978 21.4498 5.79978 21.5598 6.19978C21.6698 6.59978 21.4298 7.00978 21.0298 7.11978L9.5998 10.2398C9.5298 10.2598 9.4598 10.2698 9.3998 10.2698Z"
                          fill="#07401C"
                        />
                      </svg>
                      <div className="playlist__trackAlbum ml-2">
                        The Blaze <span className="mx-1">&#903;</span> Places
                      </div>
                    </div>
                  </div>
                </div>
                <div className="playlist__trackB">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 11.75C14.59 11.75 14.25 11.41 14.25 11V10C14.25 8.54 13.89 7.75 12 7.75C10.11 7.75 9.75 8.54 9.75 10V11C9.75 11.41 9.41 11.75 9 11.75C8.59 11.75 8.25 11.41 8.25 11V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V11C15.75 11.41 15.41 11.75 15 11.75Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M12.0004 15.3499C11.2604 15.3499 10.6504 14.7399 10.6504 13.9999C10.6504 13.2599 11.2604 12.6499 12.0004 12.6499C12.7404 12.6499 13.3503 13.2599 13.3503 13.9999C13.3503 14.7399 12.7404 15.3499 12.0004 15.3499ZM12.0004 13.8499C11.9204 13.8499 11.8503 13.9199 11.8503 13.9999C11.8503 14.1699 12.1504 14.1699 12.1504 13.9999C12.1504 13.9199 12.0804 13.8499 12.0004 13.8499Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M14.5 17.75H9.5C7.1 17.75 6.25 16.9 6.25 14.5V13.5C6.25 11.1 7.1 10.25 9.5 10.25H14.5C16.9 10.25 17.75 11.1 17.75 13.5V14.5C17.75 16.9 16.9 17.75 14.5 17.75ZM9.5 11.75C7.91 11.75 7.75 11.91 7.75 13.5V14.5C7.75 16.09 7.91 16.25 9.5 16.25H14.5C16.09 16.25 16.25 16.09 16.25 14.5V13.5C16.25 11.91 16.09 11.75 14.5 11.75H9.5Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <NowPlaying />
      </div>
    </div>
  );
}

// export
export default App;
