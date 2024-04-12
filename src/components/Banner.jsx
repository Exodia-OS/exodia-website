import React from "react";
import Link from "@docusaurus/Link";

function BannerText() {
  return (
    <div className="bannerContent">


        <p>
            <a href="https://exodia-os.github.io" target="_blank">
                <img align="center" width="200px" src="logos/exodia-cyan.png"/>
            </a>


            <div className="bannerContent">
                <h2 align="center"> visit our new website: <a href="https://exodia-os.github.io" target="_blank">exodia-os.github.io</a>
                </h2>
            </div>


        </p>
        {/*
      <div className="bannerContent">

      <ul>
        <li>
        <h2>User : <code>liveuser</code> </h2>
        </li>

        <li>
        <h2>Password : <code>exodia</code> </h2>
        </li>

      </ul>

    </div>
*/}
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />

        <div className="bannerBtns">

{/*


        <Link
          to="https://omansh.vercel.app/ExodiaOS/latest/home"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="icons/download.png" />
          Home
          </button>
        </Link>

          <br/>
        <Link
          to="https://omansh.vercel.app/ExodiaOS/latest/predator"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download.png" />
           Acer-Predator
          </button>
        </Link>


          <br/>
        <Link
          to="https://omansh.vercel.app/ExodiaOS/latest/wireless"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/download.png" />
           Wireless
          </button>
        </Link>


<br/>
        <Link
          to="https://drive.google.com/drive/folders/1zPh229ZV360hwpbQTSQU9UXfQKYI0-90?usp=sharing"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/google-drive-download.png" />
           Wireless
          </button>
        </Link>


<br/>
        <Link
          to="https://drive.google.com/drive/folders/1HZZdsgdryxvCbTktx9aiV9yl7aa7IAug?usp=drive_link"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="icons/google-drive-download.png" />
           Google Drive
          </button>
        </Link>



        <br/>
        <Link
          to="https://fosstorrents.com/distributions/exodia-os/"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/torrent-download.png" />
           FOSS
          </button>
        </Link>


      <br/>
        <Link
          to="https://sourceforge.net/projects/exodia-releases/files/"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/sourceforge-download.png" />
           sourceforge
          </button>
        </Link>

 */}

{/* 
<br/>
        <Link
          to="https://mega.nz/folder/Uy4m3TpR#kRo4AMlQ4M0c_ZuM2leaig"
          style={{ textDecoration: "none" }}>
          <button className="banner_btn">
           <img src="icons/download-cyan.png" />
           MEGA
          </button>
        </Link> 
        */}

{/*

        <Link
          to="https://t.me/exodia_os"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="icons/telegram-download.png" />
           TELEGRAM
          </button>
        </Link>


<br/>
        <Link
          to="https://omansh.vercel.app/ExodiaOS/archive/"
          style={{ textDecoration: "none" }} >
          <button className="banner_btn">
           <img src="icons/downloadv2.png" />
           Archive
          </button>
        </Link>

*/}

      </div>

      <img
        className="bannerImg"
        src="img/FreePalestine.png"
        alt="Exodia Demo"
      />

    </div>
  );
}

export default Banner;
