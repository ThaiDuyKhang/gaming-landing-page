import "./credit.scss";

import { useRef, useEffect } from "react";

import { bgVideo } from "../../../assets/videos";
import { logoFooter } from "../../../assets/images";

const Credit = (props) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
    const pauseVideo = () => {
      if (!document.hidden) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    };
    document.addEventListener("webkitvisibilitychange", pauseVideo);
    return () => {
      document.removeEventListener("webkitvisibilitychange", pauseVideo);
    };
  }, []);

  return (
    <div className={`credit overlay ${props.isActive ? "active" : ""}`}>
      <video
        muted
        ref={videoRef}
        width="100%"
        height="auto"
        loop={true}
        className="overlay"
        id="bg-video"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="credit__content">
        <div className="title">
          <span>Start Your</span>
          <h2 className="main-color">LEGENDS</h2>
        </div>
        <div className="btns m-t-4">
          <div>
            <a className="ch-play" href="#!" target="_blank"></a>
            <a className="app-store" href="#!" target="_blank"></a>
          </div>
          <img className="logo-company" src={logoFooter} alt="logo-company" />
        </div>
      </div>
    </div>
  );
};

export default Credit;
