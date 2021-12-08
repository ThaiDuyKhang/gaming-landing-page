import React from "react";

import "./header.scss";

import { logo } from "../../assets/images";

const Header = () => {
  return (
    <div className="header">
      <div className="header__inner container">
        <ul className="header__nav">
          <li>
            <a href="/">game</a>
          </li>
          <li>
            <a href="news">news</a>
          </li>
          <li className="header__logo">
            <img src={logo} alt="Arena of Valor" />
          </li>
          <li>
            <a href="champions">Esports</a>
          </li>
          <li>
            <a href="support">Comunity</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
