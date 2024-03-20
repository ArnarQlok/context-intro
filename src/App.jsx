import { useState } from "react";
import "./App.css";
import MainComponent from "./MainComponent";
import { ThemeProvider } from "./ThemeContext";

function App() {
  // const [theme, setTheme] = useState("light");

  // const toggleTheme = () => {
  //   setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  // };

  return (
    <div>
      <h1>Context-Intro</h1>
      {/* <MainComponent theme={theme} toggleTheme={toggleTheme} /> */}
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
