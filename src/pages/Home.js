import React from "react";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import Cards from "../components/Cards";
import Cta from "../components/Cta";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar homeColor="#f58434"/>
      <Hero />
      <Sections />
      <Cards />
      <Cta />
    </div>
  );
}

export default Home;
