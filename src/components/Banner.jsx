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
         
        <div className="bannerOS"> 
          
          <h2 align="center">a highly customized arch-based distro For All Cybersecurity Tracks, and it comes with other special editions as well.</h2> 
        
        </div>
        
      </p>

      <div className="bannerBtns">
        <Link
          to="https://drive.google.com/file/d/1yOtBqfsXTGFcEAyAMcU9mAx2bN7MnS2U/view?usp=sharing"
          style={{ textDecoration: "none" }}
          >
          
          <button className="banner_btn">
           <img src="icons/download.png" />
           DOWNLOAD
          </button>
       
        </Link>

      
      </div>
      
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />

      <img
        className="bannerImg"
        src="img/desktop.png"
        alt="Exodia Demo"
      />
    </div>
  );
}

export default Banner;
