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
          
          <h2 align="center">a highly customized arch-based distro For All Cybersecurity Tracks</h2>
          <h2>It comes with other special editions as well.</h2> 
        
        </div>
        
      </p>

      
    </div>
  );
}

function Banner() {
  return (
    <div className="banner">
      <BannerText />

        <div className="bannerBtns">
        <Link
          to="https://doc-14-a4-docs.googleusercontent.com/docs/securesc/tn6r8879ofo1vt55sgk4q6138pidj7c0/29n6oo9at4mcpdv63n3867k3qng3r1vd/1668610125000/02396259824320917977/02396259824320917977/1fHboN_4K0c6mpO4ed4Ub71Reo-9q68N5?e=download&ax=AEKYgyRYzAImyKzvO8r7Z-sZrUrxlnAo-2GVQJ6_QczRzXfKsB1KghnuoIogbDbUiVdfrMWfCba8tlZVp1TAzrunaRIsjCVrVSuvWKBE-ufo-vkYxWtn-auHKs2L-x70jgm7oCIy70XLHaDDZ1TVEU-k0vzBv7MogXAu7_UzwEByrCXOMUX1uwW-7FArHrL64uT2l6bRCMce5fBPYCcNxeDVPYAziXcOhasR1Jl8zaLTQLd9W9zQfw4TeXPMLcxBLPO2PgM6xsFf4TYGIJvCd_VJ-WQ_jCcGI-ptpbJj-gTV0agfzyl2s-nf91aRKUAuBhAzQIlc5c05f_TZQzYFvNJDSnHu5mgKTZpxiqy8InTKR8tfQzsaEEoGaiqbfflu7-TiV8juiYoFkOcs4dfpCiFBAJ8qUTIXdkEAKMqI-CCtaCgOZfnW1hAMv49AUJcPbmqx0qS3FlvDczTKeVelVe65HZs_C89C_4cJbPS6Mm50PzQN5VvDkg6dlgwGZm0PabfKbsRzvRhQWx-g1VagKDG8krFk55vUkmzYL8_gBNPlc4dPIQgEqiA7fZSv-0Yd7f8B_q5VRd7uf0kCYX2f1TLB-QizG_nL4-Qgkeg1KYcGrKTC9_xktEZ1OGGJeXMi4Um48gYBOt6ZTXVoYiOI5eehsFJHJJq4DuLyBVR0LoHhiI62BGtrOlE5wxDwB_20d7Hk_MSW3LD4uHYj5Cpqlc6Dx-6Fep6enntFhxLIwPQJE2ge1sZMybg6gb43IW_AokKa1uheW611m4xACzyN2xomFzyNtbNJojjv3HwO8IuuLdYqk4LSNo7gFKZ7HOOs2zwNERg2BIzYd41Wsutn9Tu7dKbIjo_KjZMtkvMtqiECdcVSvZS7FRj8TjHrJe28kF0eVYgEmrSBH54ytoBCFVO2ZiqW3V_bMnXzVOjtKx4qh3VF4eG1Jifim-NN-t7840uh5mAA5jfpUFvhRun2ABurda8a8eWTOyE0yQr-iiS4crM76SCqDcHlSYLnW0qLaxO5YEMifiWJny898ffU&uuid=ce514e06-cc32-4ddb-ba5d-695695ddccae&authuser=5&nonce=cojdts1hrclbg&user=02396259824320917977&hash=isoh146gu4902ft3u546keeus3atfm5t"
          style={{ textDecoration: "none" }}
        >
          <button className="banner_btn">
           <img src="icons/download.png" />
          Home
          </button>
        </Link>
          <br/>
        <Link
          to="https://doc-0c-a4-docs.googleusercontent.com/docs/securesc/tn6r8879ofo1vt55sgk4q6138pidj7c0/0vhvav8ph70ikca927vaiu0hndfkqaom/1668610275000/02396259824320917977/02396259824320917977/1UrsFFADkVrada_s0IJo_BjlgeT3Q36tn?e=download&ax=AEKYgySfdgc7j_0e4mbec5Rrz36vFfW-WBuuaY93xsVujZzG5tV18SuGFK68LYqM56CMHaNnSo_0iZQOjbZXBGaEGEov5XGlQ8ZSuYbiKRAMyDJEZjN6LuTRpWvDJUdvez9yaE9LDRfXz9o56w8GhrKmnkDq99Oxh_mfPL4_4qRC2cWktvwnND5-peGHMV1CkzbxirznoA1SdiZ9Hn4bZRSimb2A5Ri3b8cnCms5Z8aeVs41CrsYQ9mjwoloqSOhfCyJTLjre3jcWi_sGesub2o55kZkutGYPIv1VcmB5ngcOAa5fyz9X4Q4hMmwt8Au3SRoSTYEskzKbH9g6tyo9-r9oySaYpUv6-bFJDHAnDCE-HbG4y-v1RyFjD1j7jFN8Q_uAfiM0QhpGoQrZuB8IxtFv1ltNjC2NPqcnAdBEqMV-Bh8lQyHLdJ6ow5XNJrSnmscskGUvD9Zujz6C-Z4cXqF7-xENrsl-jfWaAzuLE5DsRNBIBg-qZEngCE-AHYtlVZJoD5yTrAC5OeH_563d9wQo4WpHcKVI6tHhvJw-XiMgcHX2h_M0-9QSQJg8NltyRClmT8AKHUvA2qI4wNPtSxwKKdL8d00nu7TE1ZyEYmxzMmd6-eb05DCsD-iMUpqB-dHM_CHnCYUC7m0kC48APSp6t9EHMAgoQZfHEi-0jEqcuINAfFJ7wu1ikLTis4XsbJFMTtagqn5IHm8gR6V2T0QXz8OWnS9U82UNj1U3QZ-XWAjpFOR2bPnjv3ySGvZWh07NFeO1VRRKTgvsWeMbl1qm4_SMNTmU8iLMGpEbtCe85nKfvx_Gq1xxaMkK-jFUuVsn9wa1bsNiPsA0o1iWasPss-deh06ItvKbIk-KQ0we5q1AKiJnBEuQPQMZd-i5ELBtYudRvqoQ9iKrRXHTAX01f8CAtyT0bNc789U5nTZJC0IKiSa9wLLC7t6CYLgI60YE2P3rONLUVP4LIXszwmEjO8S-CVOOj0axtq02jYGktJlsKnzfaxQXEOthj75dauvSruvKR4D6srNJ4tP&uuid=6b633aba-d346-4e29-9b68-76d0d01118dd&authuser=5"
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

export default Banner;
