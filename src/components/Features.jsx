import React from "react";
import clsx from "clsx";

const FeatureList = [
  {
    title: "PowerShell",
    description: (
      <>
        Microsoft PowerShell pre-installed<br/>pre-configured with Oh My Posh.

      </>
    ),
  },
  {
    title: "TUI Apps",
    description: (
      <>
        support a whole bunch of TUI Apps<br/>RUN `pacman -Sg Exodia-TUI-Apps`<br/>to list all available apps
      </>
    ),
  },
  
  {
    title: "Files Templates",
    description: (
      <>
       help you to create coding files <br/> like C, C++, web Dev, python, etc... <br/> and more Files Templates.
      </>
    ),
  },

  {
    title: "EWW",
    description: (
      <>
        supporting ElKowars wacky widgets(EWW)<br/>comes with EWW pre-installed/configured

      </>
    ),
  },
  {
    title: "zsh",
    description: (
      <>
        Exodia comes zsh pre-installed/configured<br/>zsh is the default shell
      </>
    ),
  },
  
  {
    title: "Predator Sense CLI",
    description: (
      <>
       a kernel module to control keyboard RGB & fan speed in Linux for Acer Predator Laptops
      </>
    ),
  },


  {
    title: "CyberSecurity Tools",
    description: (
      <>
       support tools for all cyber security fields<br/>using Blackarch Repos & Exodia Repos
      </>
    ),
  },


  {
    title: "BIOS & UEFI",
    description: (
      <>
       supporting both BIOS & UEFI
      </>
    ),
  },


  {
    title: "Calamares Installer",
    description: (
      <>
       Exodia uses Calamares Installer to facilitate the installation process
      </>
    ),
  },


  {
    title: "Rolling Release",
    description: (
      <>
       always up-to-date
      </>
    ),
  },


  {
    title: "AUR",
    description: (
      <>
       supporting AUR Repos (yay)
      </>
    ),
  },


  {
    title: "Plymouth",
    description: (
      <>
       supporting Plymouth<br/> exodia-plymouth theme is available
      </>
    ),
  },


];

function Edition({ imgSrc, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Editions() {
  return (
    <section className="features">
      <h1>Features</h1>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => <Edition key={idx} {...props} />)}
        </div>
        
      </div>
    </section>
  );
}
