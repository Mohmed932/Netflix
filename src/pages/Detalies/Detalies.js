import React from "react";
import Similar from "../../components/Similar";
import Popular from "../../components/Popular";
import Trending from "../../components/Trending";
import Toprated from "../../components/Toprated";
import SingleMove from "../../components/SingleMove/SingleMove";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Detalies = () => {
  return (
    <div className="Detalies">
      <Navbar />
      <SingleMove />
      <Similar />
      <Trending />
      <Popular />
      <Toprated />
      <Footer />
    </div>
  );
};

export default Detalies;
