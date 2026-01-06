import React from "react";
import Hero from "../components/Hero";
import Sparks from "../components/Sparks";
import About from "../components/About";
import Hover from "../components/Hover";
import Hoverimage from "../components/Hoverimage";
import Example from "../components/Boxhover";
import LogoOrigami from "../components/LogoOrigami";

const Home = ({ trailOn, setTrailOn }) => {
  return (
    <div className="">
      <Sparks />
      <Hero trailOn={trailOn} setTrailOn={setTrailOn} />
      {/* then this component (Hero.jsx) starts rendering found in components directory and then below */}
      <About />
      <Hover />
      <Hoverimage />
      <Example />
      <LogoOrigami />
    </div>
  );
};

export default Home;
