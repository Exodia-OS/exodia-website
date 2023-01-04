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
          
          <h2 align="center">A highly customized arch-based distro For All Cybersecurity fields.</h2>
          <h2>It comes with other special editions as well.</h2> 
        
        </div>
        
      </p>

      <div className="bannerContent">
        
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

{/*  */}

        <Link
          to="https://drive.google.com/file/d/187W3tQGvdGKPIHtuPNm6xDITaMq1ep5F/view?usp=share_link"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="icons/download.png" />
          Home
          </button>
        </Link>

{/*  */}
        
          <br/>
        <Link
          to="https://drive.google.com/file/d/1sq3Hte3XRIsHnfMezKL0332aVpeLGGjS/view?usp=share_link"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download.png" />
            Predator
          </button>
        </Link>

{/*  */}

          <br/>
        <Link
          to="https://drive.google.com/file/d/109FCcl73RjF2pH_o9jS76NrIbWhKdje6/view?usp=share_link"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/download.png" />
           Wireless
          </button>
        </Link>

{/*  */}

        <br/>
        <Link
          to="https://fosstorrents.com/distributions/exodia-os/"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download.png" />
           FOSS Torrents
          </button>
        </Link>

{/*  */}

      <br/>
        <Link
          to="https://sourceforge.net/projects/exodia-releases/files/"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/download.png" />
           sourceforge
          </button>
        </Link>

{/*  */}

        <br/>
        <Link
          to="https://mega.nz/folder/Uy4m3TpR#kRo4AMlQ4M0c_ZuM2leaig"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download.png" />
           MEGA (soon)
          </button>
        </Link>

{/*  */}

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
