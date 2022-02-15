// imports
import avatar from "../../assets/peakpx.jpg";
import "./avatar.scss";

// component
function Avatar() {
  return (
    <>
      {/* avatar */}
      <div className="avatar mr-8">
        <img src={avatar} alt="" class="image" />
      </div>
    </>
  );
}

// export
export default Avatar;
