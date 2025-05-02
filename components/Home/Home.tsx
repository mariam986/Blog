import React from "react";
import Hero from "./Hero/Hero";
import Features from "./Features/Features";
import Blogs from "./Features/Blogs";
import Blog from "./Features/Blog";
import Explore from "./Explore/Explore";
import Profile from "./Explore/Profile";
import Readers from "./Readers/Readers";
import Words from "./Words/Words";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Blogs />
      <Blog />
      <Explore />
      <Profile />
      <Readers />
      <Words />
    </div>
  );
};

export default Home;
