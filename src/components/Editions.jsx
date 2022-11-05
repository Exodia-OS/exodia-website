import React from "react";
import clsx from "clsx";

const FeatureList = [
  {
    title: "Home",
    imgSrc: "logos/Exodia.png",
    description: (
      <>
        This Edition is a general purpose operating system with the typical Exodia OS look and feel. This edition is designed for daily use, privacy and software development.

      </>
    ),
  },
  {
    title: "Predator",
    imgSrc: "logos/Predator.png",
    description: (
      <>
        This Edition For Acer Predator Laptops with the typical Exodia OS look and feel, Keyboard RGB change based on the selected theme
        PredatorSense pre-installed to control CPU/GPU Fan, Keyboard RGB
      </>
    ),
  },
  {
    title: "Wireless",
    imgSrc: "logos/Exodia.png",
    description: (
      <>
       This Edition is For penetration testing (and especially for Wireless PenTesting)
       come with 400+ pre-installed Tools For PenTesting(and 130+ For Wireless PenTesting).
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
      <h1>Editions</h1>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => <Edition key={idx} {...props} />)}
        </div>
        
      </div>
    </section>
  );
}
