import React from "react";
import { css, keyframes } from "@emotion/css";

export default function SpaceAnimation() {
  const rocket = keyframes`
      0% {transform:translateX(0px)}
      100% {transform:translateX(-4000px)}
    `;

  const upDown = keyframes`
      100% {transform: translateY(0px)}
      0% {transform: translateY(2px)}
    `;

  const astronaut = css`
    top: 50%;
    animation-delay: 40ms;
  `;

  const earth = css`
    top: 2%;
    animation-delay: 2s;
  `;

  const mars = css`
    bottom: 5%;
    animation-delay: 3s;
  `;

  const saturn = css`
    bottom: 30%;
    animation-delay: 5s;
  `;

  const jupiter = css`
    top: 20%;
    animation-delay: 8s;
  `;

  const comet = css`
    bottom: 30%;
    animation-delay: 9s;
  `;

  const ufo = css`
    bottom: 10%;
    left: -1000;
    animation-duration: 38s;
    animation-delay: 1s;
  `;

  const satellite = css`
    bottom: 10%;
    animation-delay: 6s;
  `;

  const planets = css`
    position: absolute;
    right: -2000px;
    z-index: -1;
    animation: ${rocket};
    animation-iteration-count: 1;
    animation-duration: 15s;
  `;

  const starBase = css`
    position: absolute;
    background: beige;
    border-radius: 80%;
    z-index: 8;
    right: -2000px;
    animation: ${rocket};
    animation-iteration-count: 3;
    height: 3px;
  `;

  const star1 = css`
    width: 30px;
    top: 50%;
    animation-duration: 4s;
    animation-delay: 700ms;
  `;

  const star2 = css`
    width: 60px;
    top: 60%;
    animation-duration: 4s;
    animation-delay: 500ms;
  `;

  const star3 = css`
    width: 30px;
    top: 45%;
    animation-duration: 4s;
    animation-delay: 150ms;
  `;

  const star4 = css`
    width: 10px;
    top: 60%;
    animation-duration: 4s;
    animation-delay: 100ms;
  `;

  const star5 = css`
    width: 30px;
    top: 50%;
    animation-duration: 4s;
  `;
  return (
    <div>
      <div
        className={css`
          animation: ${upDown} infinite;
          animation-direction: alternate;
          animation-duration: 150ms;
          z-index: 100 !important;
          position: absolute;
          top: 20%;
          left: 20%;
        `}
      >
        <img
          className={css`
            z-index: 100 !important;
            animation: ${rocket};
          `}
          src={require("../assets/rocket.png")}
          alt="rocket"
        />
      </div>

      <div
        className={css`
          ${[starBase, star1]};
        `}
      ></div>
      <div
        className={css`
          ${[starBase, star2]};
        `}
      ></div>
      <div
        className={css`
          ${[starBase, star3]};
        `}
      ></div>
      <div
        className={css`
          ${[starBase, star4]};
        `}
      ></div>
      <div
        className={css`
          ${[starBase, star5]};
        `}
      ></div>
      <img
        className={css`
          ${[planets, astronaut]};
        `}
        src={require("../assets/musk_big_face.png")}
        alt="Elon Musk Astronaut"
      />
      <img
        className={css`
          ${[planets, earth]};
        `}
        src={require("../assets/earth.png")}
        alt="Earth"
      />
      <img
        className={css`
          ${[planets, mars]};
        `}
        src={require("../assets/mars.png")}
        alt="Mars"
      />
      <img
        className={css`
          ${[planets, saturn]};
        `}
        src={require("../assets/saturn.png")}
        alt="Saturn"
      />
      <img
        className={css`
          ${[planets, jupiter]};
        `}
        src={require("../assets/jupiter.png")}
        alt="Jupiter"
      />
      <img
        className={css`
          ${[planets, comet]};
        `}
        src={require("../assets/comet.png")}
        alt="Comet"
      />
      <img
        className={css`
          ${[planets, ufo]};
        `}
        src={require("../assets/ufo.png")}
        alt="UFO"
      />
      <img
        className={css`
          ${[planets, satellite]};
        `}
        src={require("../assets/satellite.png")}
        alt="Satellite"
      />
    </div>
  );
}
