import {bg3, last3} from "../../../assets/images";
import HomeSection from "../HomeSection";
import { trailerVideo } from "./../../../assets/videos";
import "./trailer.scss";

const Trailer = (props) => {

  return (
    <HomeSection
      className={`trailer ${props.isActive ? "active" : ""}`}
      contentClassName="overlay2 trailer__content"
      bgImage={bg3}
    >
      <div className="trailer__content__img">
        <img src={last3} alt="" />
      </div>
      <div className="trailer__content__info">
        <div className="title">
          <span>FIGHT TOGETHER</span>
          <h2 className="main-color">RISE TOGETHER</h2>
        </div>
        <div className="video">
          <video
            controls
            width="100%"
            height="auto"
            className="overlay"
          >
            <source src={trailerVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </HomeSection>
  );
};

export default Trailer;
