import "../css/variables.css";
import "../css/style.css";
import "../css/components/home.css";

import React from "react";
import Layout from "@theme/Layout";

import Editions from "../components/Editions";
import Banner from "../components/Banner";
import Description from "../components/Description";

// Home page //

function Home() {
  return (
    <Layout description="">
      <main className="homepage">
        <Banner />
        <Description />
        <Editions />
      </main>
    </Layout>
  );
}

export default function () {
  return <Home />;
}
