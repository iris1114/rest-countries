import React, { createContext } from "react";
import { COLOR } from "./style";

const themes = {
  dark: {
    backgroundColor: `${COLOR.black}`,
    color: `${COLOR.white}`,
    shadow: `${COLOR.darkShadow}`,
  },
  light: {
    backgroundColor: `${COLOR.white}`,
    color: `${COLOR.black}`,
    shadow: `${COLOR.lightShadow}`,
  },
};

const ThemeContext = createContext({
  dark: false,
  theme: themes.light,
  toggle: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
