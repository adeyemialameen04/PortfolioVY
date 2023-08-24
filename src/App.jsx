import { createContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Home from "./Home/Home";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      <div id={theme === "light" ? "light" : "dark"}>
        <Navbar />
        <Home />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
