import React from "react";
import Hero from "../components/Hero";
import Sparks from "../components/Sparks";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";

// import Hover from "../components/Hover";
// import Hoverimage from "../components/Hoverimage";
import TechStack from "../components/TechStack";
import Contacts from "../components/Contacts";

const Home = ({ trailOn, setTrailOn }) => {
  return (
    <div className="">
      <Sparks />
      <Hero trailOn={trailOn} setTrailOn={setTrailOn} />
      {/* then this component (Hero.jsx) starts rendering found in components directory and then below */}
      <About />
      <Services />
      <Projects />


      {/* <Hover /> */}
      {/* <Hoverimage /> */}
      <TechStack />
      <Contacts />
      {/* <LogoOrigami /> */}
    </div>
  );
};

export default Home;
