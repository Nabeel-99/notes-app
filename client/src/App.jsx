import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import { useEffect, useState } from "react";
function App() {
  //
  // 🔹 Stage 2: JavaScript – Intermediate (5 tasks)
  // 	1.	Flatten an array
  // flatten([1, [2, [3, 4], 5]]) → [1, 2, 3, 4, 5]
  const flattenArray = (array) => {
    return console.log(array.flat(Infinity));
  };

  flattenArray([1, [2, [3, 4], 5]]);

  return (
    <Router>
      <main className="bg-gradient-to-b from-[#0b0a0e] p-4 text-white from-60% to-[#0c0b17] h-screen   w-screen ">
        <div className="flex max-w-5xl mx-auto 2xl:container ">
          <Navbar />
        </div>
        {/* routes */}
        <div className="flex flex-col mt-10 max-w-5xl  mx-auto 2xl:container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
