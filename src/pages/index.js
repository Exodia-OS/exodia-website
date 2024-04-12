import "../css/variables.css";
import "../css/style.css";
import "../css/components/home.css";

import React from "react";
import Layout from "@theme/Layout";
import Banner from "../components/Banner";

// Home page //

function Home() {
  return (
    <Layout description="">
      <main className="homepage">
        <Banner />
      </main>
    </Layout>
  );
}

export default function () {
  return <Home />;
}
