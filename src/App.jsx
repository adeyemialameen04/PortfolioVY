import { createContext, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";

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
        <h1>Hello</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
