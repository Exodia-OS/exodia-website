import React from "react";
import Link from "@docusaurus/Link";

function BannerText() {
  return (
    <div className="bannerContent">
      <h1>
        Exodia OS
      </h1>
      
      <p>
      <img align="center" width="200px" src="img/Exodia.png"/>
         
        <div className="bannerContent"> 
          
          <h2 align="center">a highly customized arch-based distro For All Cybersecurity fields.</h2>
          <h2>It comes with other special editions as well.</h2> 
        
        </div>
        
      </p>

      <div className="bannerContent">
      <h1>Exodia</h1>

      <ul>
        <li>
        <h2>User : liveuser</h2>
        </li>

        <li>
        <h2>Password : exodia</h2>
        </li>

      </ul>

    </div>

    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />

        <div className="bannerBtns">
        <Link
          to="https://drive.google.com/file/d/1fHboN_4K0c6mpO4ed4Ub71Reo-9q68N5/view?usp=share_link"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="icons/download.png" />
          Home
          </button>
        </Link>
        
          <br/>
        <Link
          to="https://drive.google.com/file/d/1UrsFFADkVrada_s0IJo_BjlgeT3Q36tn/view?usp=share_link"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download.png" />
            Predator
          </button>
        </Link>
        
          <br/>
        <Link
          to="https://github.com/Exodia-OS/exodia-wireless-ISO"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/download.png" />
           Wireless
          </button>
        </Link>
        
        <br/>
        <Link
          to="https://fosstorrents.com/distributions/exodia-os/"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download.png" />
           FOSS Torrents
          </button>
        </Link>

      <br/>
        <Link
          to="https://sourceforge.net/projects/exodia-releases/files/"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/download.png" />
           sourceforge
          </button>
        </Link>

      </div>

      <br/>  <br/>

      <img
        className="bannerImg"
        src="img/desktop.png"
        alt="Exodia Demo"
      />

    </div>
  );
}

function user() {
  return (
    <div className="homePage_desc">
      <h1>Exodia</h1>

      <ul>
        <li>
        User : liveuser
        </li>

        <li>
        Password : exodia
        </li>

      </ul>
    </div>
  );
}

export default Banner;
