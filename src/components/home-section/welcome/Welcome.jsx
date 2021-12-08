import { useEffect } from "react";
import "./welcome.scss";

import HomeSection from "../HomeSection";

import hoverEffect from "hover-effect";

import {
  bg4,
  quillen,
  errol,
  sephera,
  distortion,
  logoFooter,
} from "../../../assets/images";

const champImgs = [quillen, errol, sephera];

const Welcome = (props) => {
  useEffect(() => {
    const welcomeImgs = document.querySelectorAll("#welcome__img__slide > img");
    let animates = [];
    welcomeImgs.forEach((item, index) => {
      let nextImg =
        welcomeImgs[
          index === welcomeImgs.length - 1 ? 0 : index + 1
        ].getAttribute("src");
      let animation = new hoverEffect({
        parent: document.querySelector("#welcome__img__slide"),
        intensity: 0.5,
        image1: item.getAttribute("src"),
        image2: nextImg,
        displacementImage: distortion,
        hover: false,
      });
      animates.push(animation);
    });
    welcomeImgs.forEach((e) => e.remove());

    let currItem = 0;

    const autoImageSlide = () => {
      let prevItem = currItem;
      currItem = (currItem + 1) % animates.length;

      if (!document.hidden) {
        animates[prevItem].next();
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll("#welcome__img__slide > canvas");
        document.querySelector("#welcome__img__slide").appendChild(canvas[0]);
        animates[prevItem].previous();
      }, 3000);
    };

    setInterval(autoImageSlide, 3000);
  }, []);

  return (
    <HomeSection
      className={`welcome ${props.isActive ? "active" : ""}`}
      contentClassName="overlay welcome__content"
      bgImage={bg4}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content m-t-4">
          <div className="title">
            {/* <span>Welcome To</span> */}
            <h2>TIME MAKES</h2>
            <h2 className="main-color">HEROES</h2>
          </div>
          <div className="description m-t-2">
          Heroes! Stand the test of fire, give all of me to the time, to the time. We'll never terrified, time makes heroes alive, I struggle with death, 
          nothing ever turn me back, turn me back. When I stand, when I have climbed above the clouds and it reminds me why, I am still far away from the sky
          We're bruised and we're losing, We're fell but still chasing, it's not the end...
          The way I have chosen, it makes me feel "Who I am..."
          </div>
          <div className="btns m-t-2">
            <a className="ch-play" href="#!" target="_blank"></a>
            <a className="app-store" href="#!" target="_blank"></a>
            <img className="logo-company" src={logoFooter} alt="logo-company"/>
          </div>
        </div>
      </div>
      <div className="welcome__img relative">
        <div className="welcome__img__slide" id="welcome__img__slide">
          {champImgs.map((item, index) => (
            <img src={item} key={index} />
          ))}
        </div>
      </div>
    </HomeSection>
  );
};

export default Welcome;
