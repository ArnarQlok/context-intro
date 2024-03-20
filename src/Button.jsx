import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Button = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Byt tema</button>;
};

export default Button;
