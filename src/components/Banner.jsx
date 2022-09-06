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
          
          <h2 align="center"> OS For All Cybersecurity Tracks </h2> 
        
        </div>
        
      </p>

      <div className="bannerBtns">
        <Link
          to="https://sourceforge.net/projects/exodia-releases/"
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
        src="img/screenshots/TokyoCity.png"
        alt="Exodia Demo"
      />
    </div>
  );
}

export default Banner;
