import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhatsAppFloating from "./components/WhatsAppFloat";


// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [trailOn, setTrailOn] = useState(false);

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <WhatsAppFloating />

        {/* <ToastContainer /> */}
        <Routes>
          <Route path="/" element={<Home trailOn={trailOn} setTrailOn={setTrailOn} />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
