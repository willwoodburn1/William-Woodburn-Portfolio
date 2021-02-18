import React from 'react';
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Heading />
      <Navbar />
      <Sidebar />
      <About />


    </div>
  );
}

export default App;
