import "../css/variables.css";
import "../css/style.css";
import "../css/components/home.css";

import React from "react";
import Layout from "@theme/Layout";

import Editions from "../components/Editions";
import Banner from "../components/Banner";
import About from "../components/About";
import Features from "../components/Features"

// Home page //

function Home() {
  return (
    <Layout description="">
      <main className="homepage">
        <Banner />
        <About />
        <Editions />
        <Features />
      </main>
    </Layout>
  );
}

export default function () {
  return <Home />;
}
