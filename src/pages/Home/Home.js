import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Popular from "../../components/Popular";
import Toprated from "../../components/Toprated";
import Trending from "../../components/Trending";
import Upcomeing from "../../components/Upcomeing";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Popular />
      <Toprated />
      <Trending />
      <Upcomeing />
      <Footer />
    </div>
  );
};

export default Home;
