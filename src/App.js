import React, { useState } from "react";
import Navbar from "./navbar";
import Main from "./main";

function App() {
  const [category, setCategory] = useState("entertainment");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <Navbar
        setCategory={setCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Main category={category} darkMode={darkMode} />
    </div>
  );
}

export default App;
