// imports
import songCoverI from "../../assets/coverI.jpg";
import "./index.scss";

// component
function NowPlaying() {
  return (
    <>
      {/* now playing */}
      <div className="nowPlaying flex flex-row justify-between">
        <div className="nowPlaying__col flex flex-row">
          <img src={songCoverI} alt="" className="nowPlaying__image" />
          <div className="nowPlaying__details ml-5">
            <div className="nowPlaying__album">Twice As Tall</div>
            <div className="nowPlaying__track">Monsters You Made</div>
            <div className="nowPlaying__artiste">Burna Boy</div>
          </div>
        </div>
      </div>
    </>
  );
}

// export
export default NowPlaying;
